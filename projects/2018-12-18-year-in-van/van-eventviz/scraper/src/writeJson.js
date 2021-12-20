import * as R from 'ramda'
import axios from 'axios'

import { logger } from './util'
import { getPool } from './db'

const log = logger({
  slack: {},
})

const dotPath = R.useWith(R.path, [R.split('.')])
const propsDotPath = R.useWith(R.ap, [R.map(dotPath), R.of])
const deepPick = paths => data => {
  return R.zipObj(paths, propsDotPath(paths)(data))
}

export default async function writeJson(args, opts) {
  log.verbose({
    type: 'env',
    env: process.env,
  })
  const pool = getPool()
  const { rows } = await pool.query(
    `
    select *
    from events where
      geo is not null
      and geo != 'false'::jsonb
      and (
        to_date(details->>'startDate', 'YYYY-MM-DD"T"HH24:MI:SS') > now()
        or to_date(details->>'endDate', 'YYYY-MM-DD"T"HH24:MI:SS') > now()
      )
    ;
    `,
  )
  const data = rows.map(row => ({
    id: row.id,
    tags: row.evt.tags,
    url: row.evt.url,
    ...(row.details &&
      deepPick([
        'name',
        'image',
        'endDate',
        'startDate',
        'description',
        'location.name',
      ])(row.details)),
    ...(row.geo &&
      deepPick(['geometry.location', 'formatted_address'])(row.geo.results[0])),
  }))
  const json = JSON.stringify(data)
  const jsonSize = json.length / (1024 * 1024)

  // require('fs').writeFileSync('../viz/data.json', JSON.stringify(data))
  await axios.put(
    'https://jsonblob.com/api/jsonBlob/6d894d47-0ca2-11e8-a2ea-5d19acf93d35',
    json,
    {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    },
  )

  log.info({
    type: 'json upload',
    size: jsonSize,
  })

  await pool.end()
}
