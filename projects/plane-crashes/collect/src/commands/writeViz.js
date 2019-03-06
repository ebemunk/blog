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
        where length(raw->>'Nature') > 2
        group by 1
        order by 2 desc
      `,
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
      query: `
        select
          count(*),
          (parsed->'date'->>'year')::int as year,
          raw->>'Operator' as operator
        from crashes
        where (parsed->'date'->>'year')::int is not null and raw->>'Operator' != ''
        group by 2, 3
        order by 2, 3 desc;
      `,
      process: R.identity,
      writer: writeCSV,
    },
  ]

  await Promise.map(
    // [dataFiles.find(f => f.filename === 'sceneTone')],
    // [dataFiles[0]],
    dataFiles,
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
