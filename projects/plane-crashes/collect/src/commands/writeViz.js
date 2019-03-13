import * as R from 'ramda'
import Promise from 'bluebird'

import { getPool } from '../db'
import { logger, writeFile, prettyJson } from '../util'

const log = logger('writeViz')

const writeCSV = data => {
  const cols = Object.keys(data[0])
  const ret = [
    cols.join(','),
    ...data.map(d =>
      Object.values(d)
        .map(v => (v && v.match && v.match(',') && v[0] !== '"' ? `"${v}"` : v))
        .join(','),
    ),
  ].join('\n')
  return ret
}

export default async function writeForViz() {
  const pool = getPool()

  const dataFiles = [
    {
      filename: 'years',
      query: `
        select
          (parsed->'date'->>'year')::int as year,
          count(*) as crashes,
          sum((parsed->'fatalities'->'Total'->>'fatalities')::int) as total,
          sum((parsed->'fatalities'->>'Ground')::int) as ground
        from crashes
        where
          parsed->'date'->>'year' is not null
        group by 1
        order by 1
      `,
      writer: writeCSV,
    },
    {
      filename: 'years-nm',
      query: `
        select
          (parsed->'date'->>'year')::int as year,
          count(*) as crashes,
          sum((parsed->'fatalities'->'Total'->>'fatalities')::int) as total,
          sum((parsed->'fatalities'->>'Ground')::int) as ground
        from crashes
        where
          parsed->'date'->>'year' is not null
          and raw->>'Nature' != 'Military'
        group by 1
        order by 1
      `,
      writer: writeCSV,
    },
    {
      filename: 'phase',
      query: `
        select
          raw->>'Phase' as phase,
          count(*) as count,
          avg((parsed->'fatalities'->'Total'->>'fatalities')::int)
        from crashes
        where raw->>'Phase' != '(CMB)'
        group by 1
        order by 2 desc
      `,
      writer: writeCSV,
    },
    {
      filename: 'damage-fate',
      query: `
        select
          count(*) as count,
          parsed->>'damage' as damage,
          parsed->>'fate' as fate
        from crashes
        where parsed->>'damage' is not null and parsed->>'fate' is not null
        group by 2,3
      `,
      writer: writeCSV,
    },
    {
      filename: 'damage',
      query: `
        select
          count(*) as count,
          parsed->>'damage' as damage
        from crashes
        group by 2
      `,
      writer: writeCSV,
    },
    {
      filename: 'fate',
      query: `
        select
          count(*) as count,
          parsed->>'fate' as fate
        from crashes
        where parsed->>'fate' is not null
        group by 2
      `,
      writer: writeCSV,
    },
    {
      filename: 'nature',
      query: `
        select
          raw->>'Nature' as nature,
          count(*) as count,
          avg((parsed->'fatalities'->'Total'->>'fatalities')::int) as avg_fat
        from crashes
        group by 1
        order by 2 desc
      `,
      process: R.pipe(
        R.reduce((acc, d) => {
          if (d.nature === '-') {
            d.nature = 'Unknown'
          }

          const match = acc.find(a => a.nature === d.nature)
          if (match) {
            const tot1 = d.avg_fat * d.count
            const tot2 = match.avg_fat * match.count
            const tot = +match.count + +d.count
            match.count = tot
            match.avg_fat = (tot1 + tot2) / tot
            return acc
          }

          return [...acc, d]
        }, []),
      ),
      writer: writeCSV,
    },
    {
      filename: 'fatality-histogram',
      query: `
        select
          (parsed->'fatalities'->'Crew'->>'occupants')::int as crew_occ,
          (parsed->'fatalities'->'Crew'->>'fatalities')::int as crew_fat,
          (parsed->'fatalities'->'Passengers'->>'occupants')::int as passenger_occ,
          (parsed->'fatalities'->'Passengers'->>'fatalities')::int as passenger_fat,
          (parsed->'fatalities'->>'Ground')::int as ground
        from crashes
      `,
      writer: writeCSV,
    },
    {
      filename: 'classification',
      query: `
        select trim('"' FROM classification) as classification, count(*)
        from (
          select json_array_elements(raw->'Classification')::text as classification from crashes
        ) t
        group by 1
        order by 2 desc
      `,
      process: R.identity,
      writer: writeCSV,
    },
    {
      filename: 'operator-by-year',
      query: [
        `
        select
          count(*),
          (parsed->'date'->>'year')::int as year,
          raw->>'Operator' as operator,
          'mil' as nature
        from crashes
        where
        	(parsed->'date'->>'year')::int is not null
        	and raw->>'Operator' != ''
        	and raw->>'Nature' = 'Military'
        group by 2, 3
        order by 2, 3 desc;
      `,
        `
      select
        count(*),
        (parsed->'date'->>'year')::int as year,
        raw->>'Operator' as operator
      from crashes
      where
        (parsed->'date'->>'year')::int is not null
        and raw->>'Operator' != ''
        and raw->>'Nature' != 'Military'
      group by 2, 3
      order by 2, 3 desc;
    `,
      ],
      process: rows => {
        const [mil, nonmil] = R.splitWhen(d => !d.nature)(rows)
        const transform = R.pipe(
          R.map(d => ({ ...d, count: +d.count })),
          R.groupBy(d => d.operator),
          R.toPairs,
          R.filter(
            ([key, arr]) => arr.reduce((tot, v) => tot + v.count, 0) > 30,
          ),
          R.map(d => [d[0], R.map(R.omit(['nature', 'operator']))(d[1])]),
        )

        return {
          military: transform(mil),
          nonmilitary: transform(nonmil),
        }
      },
      // writer: writeCSV,
    },
    {
      filename: 'classification-links',
      query: `
        select
          raw->>'Classification' as classifications,
          count(*) as count
        from crashes
        where JSON_ARRAY_LENGTH(raw->'Classification') > 1
        group by 1
        order by 2 desc
      `,
      process: rows => {
        const links = rows.reduce((acc, d) => {
          const classifications = JSON.parse(d.classifications).sort()
          while (classifications.length > 1) {
            const source = classifications.pop()
            classifications.forEach(target => {
              const mi = acc.findIndex(
                ad => ad.source === source && ad.target === target,
              )
              if (mi > -1) {
                acc[mi].count += +d.count
              } else {
                acc.push({
                  source,
                  target,
                  count: +d.count,
                })
              }
            })
          }
          return acc
        }, [])

        const nodes = [
          ...new Set([
            ...links.map(l => l.source),
            ...links.map(l => l.target),
          ]),
        ].map(node => ({
          id: node,
          links: links.filter(l => l.source === node || l.target === node)
            .length,
        }))

        return {
          links,
          nodes,
        }
      },
    },
    {
      filename: 'classifications',
      query: `
        select trim('"' FROM classification) as classification, count(*) as count
        from (
          select json_array_elements(raw->'Classification')::text as classification from crashes
        ) t
        group by 1
        order by 2 desc;
      `,
      process: R.identity,
      writer: writeCSV,
    },
  ]

  await Promise.map(
    [dataFiles.find(f => f.filename === 'classifications')],
    // [dataFiles[0]],
    // dataFiles,
    async dataFile => {
      log('doing', dataFile.filename)
      const rows = await Promise.reduce(
        Array.isArray(dataFile.query) ? dataFile.query : [dataFile.query],
        async (acc, query) => {
          const { rows } = await pool.query(query)
          return acc.concat(rows)
        },
        [],
      )
      const data = dataFile.process ? dataFile.process(rows) : rows
      return writeFile(
        `../viz/src/data/${dataFile.filename}.${
          dataFile.writer ? 'csv' : 'json'
        }`,
        dataFile.writer ? dataFile.writer(data) : prettyJson(data),
      )
    },
  )

  log('done')

  return pool.end()
}
