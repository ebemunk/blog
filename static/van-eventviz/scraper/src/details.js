import * as R from 'ramda'
import WAE from 'web-auto-extractor'
import axios from 'axios'
import Promise from 'bluebird'

import { logger, qs } from './util'
import { getPool } from './db'

const log = logger({
  slack: {
    username: 'Details Dude',
    icon_emoji: ':japanese_goblin:',
  },
})

export default async function details(args, opts) {
  log.verbose({
    type: 'env',
    env: process.env,
  })
  const pool = getPool()
  const { rows: list } = await pool.query(
    `select * from events where details is null or (geo is null and details!='false'::jsonb);`,
    // `select * from events where id='1027356';`,
  )
  log.verbose({
    type: 'found events without details',
    count: list.length,
  })

  if (!list.length) return pool.end()

  const update = R.partial(updatePool, [pool])
  const updates = await Promise.map(
    list,
    async row => {
      log.verbose({
        type: 'updating',
        rowId: row.id,
        url: row.evt.url,
      })
      let deets
      try {
        deets = await getDetails(row)
      } catch (e) {
        log.verbose({
          type: 'error getting details',
          error: e.message.substr(0, 25),
          row,
        })
        return false
      }

      if (deets.length > 1) {
        log.verbose({
          type: 'more than 1 event found',
          row,
          deets,
        })
        return false
      }

      const address = R.path(['location', 'address'])(deets[0])

      if (!address) {
        log.verbose({
          type: 'address is empty',
          row,
          deets,
        })
        await update(deets[0], false, row.id)
        return false
      }

      let geo
      try {
        geo = await geocode(address)
      } catch (e) {
        log.verbose({
          type: 'error geocoding',
          address: address,
          error: e.message.substr(0, 25),
        })
        return false
      }

      return update(deets[0], geo, row.id)
    },
    { concurrency: 5 },
  )

  const fails = updates.filter(i => !i).length
  log.info({
    type: 'details',
    fails,
    saves: updates.length - fails,
  })

  await pool.end()
}

export async function getDetails(row) {
  const { data } = await axios.get(row.evt.url)
  const { microdata } = WAE().parse(data)
  if (!microdata.Event) {
    throw new Error('microdata.Event is empty')
  }
  return microdata.Event
}

export async function geocode(address) {
  const params = {
    address,
    key: process.env.GOOGLE_API_KEY,
    region: 'ca',
  }
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?${qs(params)}`,
  )
  if (data.status !== 'OK') {
    throw new Error(
      `geocode status not OK: ${data.status}: ${data.error_message}`,
    )
  }
  return data
}

export async function updatePool(pool, details, geo, id) {
  return pool.query(`update events set details=$1, geo=$2 where id=$3;`, [
    details,
    geo,
    id,
  ])
}
