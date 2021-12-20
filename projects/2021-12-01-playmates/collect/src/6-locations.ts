import fs from 'fs/promises'
import { resolve } from 'path'

import getPool from './db'

async function run() {
  const pool = getPool()
  const { rows } = await pool.query(
    "select name, mypmates->'birthplace' as birthplace from playboy.playmates;",
  )

  await fs.writeFile(
    resolve(__dirname, '../../viz/locations.json'),
    JSON.stringify(rows, null, 2),
  )
}

run()
