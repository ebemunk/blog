import * as R from 'ramda'
import axios from 'axios'

import { logger } from './util'
import { getPool } from './db'

const log = logger({
  slack: {},
})

export default async function writeJson(args, opts) {
  log.verbose({
    type: 'env',
    env: process.env,
  })
  const pool = getPool()
  const { rows } = await pool.query(`select * from events`)
  const data = rows.map(row => ({
    id: row.id,
    tags: row.evt.tags,
    ...(row.details &&
      R.pick(['name', 'image', 'endDate', 'startDate', 'description'])(
        row.details,
      )),
    ...(row.geo &&
      R.pick(['geometry', 'formatted_address'])(row.geo.results[0])),
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
