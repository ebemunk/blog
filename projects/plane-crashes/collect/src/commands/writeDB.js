import * as R from 'ramda'
import Promise from 'bluebird'

import { readFile, insertObj, logger } from '../util'
import { getPool } from '../db'
import data from '../../data/json/data.json'

const log = logger('writeDB')

export default async function writeDB(opts) {
  const pool = getPool()

  await pool.query('truncate crashes')

  await Promise.map(data, async d => {
    if (d.error) {
      return
    }
    await pool.query(...insertObj({ id: d.id, raw: d }))
  })

  pool.end()
}
