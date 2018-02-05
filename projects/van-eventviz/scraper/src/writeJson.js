import * as R from 'ramda'
// import axios from 'axios'

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
  console.log(json.length / (1024 * 1024))

  require('fs').writeFileSync('../viz/data.json', JSON.stringify(data))
  // // console.log(rows)
  // await axios.put('https://api.jsonbin.io/b/5a76d5322cc12d126d717aae', json)

  // log.info({
  //   type: 'details',
  //   fails,
  //   saves: updates.length - fails,
  // })

  await pool.end()
}
