import { inspect } from 'util'

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
    // 'select * from events where details is null or geo is null;',
    `select * from events where id='1014681';`,
  )
  log.verbose({
    type: 'found events without details',
    count: list.length,
  })
  // console.log('list', list)
  const updates = await Promise.map(
    list,
    async row => {
      log.verbose({
        type: 'updating',
        rowId: row.id,
      })
      let deets
      try {
        deets = await getDetails(row)
      } catch (e) {
        log.error({
          type: 'error getting details',
          error: e.message,
          row,
        })
        return false
      }

      if (deets.length > 1) {
        log.error({
          type: 'more than 1 event found',
          row,
          deets,
        })
        return false
      }

      const address = R.path(['location', 'address'])(deets[0])

      if (!address) {
        log.error({
          type: 'address is empty',
          row,
          deets,
        })
        return false
      }

      let geo
      try {
        geo = await geocode(address)
      } catch (e) {
        log.error({
          type: 'error geocoding',
          address: address,
          error: e.message,
        })
        return false
      }

      return pool.query(`update events set details=$1, geo=$2 where id=$3;`, [
        deets[0],
        geo,
        row.id,
      ])
    },
    { concurrency: 10 },
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
    throw new Error('geocode status not OK')
  }
  return data
}
