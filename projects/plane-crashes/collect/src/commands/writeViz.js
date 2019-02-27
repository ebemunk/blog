import * as R from 'ramda'
import Promise from 'bluebird'

import { getPool } from '../db'
import { logger, writeFile, prettyJson } from '../util'

const log = logger('writeViz')

const writeCSV = data => {
  const cols = Object.keys(data[0])
  const ret = [
    cols.join(','),
    ...data.map(d => Object.values(d).join(',')),
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
          count(*) as count,
          raw->>'Nature' as nature
        from crashes
        group by 2
        order by 1 desc
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
        select classification, count(*)
        from (
          select json_array_elements(raw->'Classification')::text as classification from crashes
        ) t
        group by 1
        order by 2 desc
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
