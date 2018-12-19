import * as R from 'ramda'
import axios from 'axios'
import Promise from 'bluebird'

import { logger, qs } from './util'
import { getPool } from './db'

const log = logger({
  slack: false,
})

export default async function placeGeo(args, opts) {
  log.verbose({
    type: 'env',
    env: process.env,
  })
  const pool = getPool()
  const { rows: list } = await pool.query(
    `select * from events where
      geo='false'
      and details->'location'->'name' is not null
    ;`,
    // `select * from events where id='1160706';`,
  )
  log.verbose({
    type: 'found events where geo=false',
    count: list.length,
  })

  if (!list.length) return pool.end()

  const update = R.partial(updatePool, [pool])
  await Promise.map(
    list,
    async row => {
      log.verbose({
        type: 'updating',
        rowId: row.id,
        url: row.evt.url,
      })
      let place
      try {
        place = await getPlace(row)
      } catch (e) {
        log.verbose({
          type: 'error getting place',
          error: e.message, //.substr(0, 25),
          row,
        })
        return false
      }

      let geo
      try {
        geo = await geocode(place.candidates[0].formatted_address)
      } catch (e) {
        log.verbose({
          type: 'error geocoding',
          address: place.candidates[0].formatted_address,
          error: e.message, //.substr(0, 25),
        })
        return false
      }

      return update(geo, row.id)
    },
    { concurrency: 5 },
  )

  await pool.end()
}

export async function getPlace(row) {
  const name = R.path(['details', 'location', 'name'])(row)
  if (!name) throw new Error('findplacefromtext no details.location.name found')
  const params = {
    key: process.env.GOOGLE_API_KEY,
    inputtype: 'textquery',
    fields: 'formatted_address',
    locationbias: '49.2827291,-123.1207375',
    input: name,
  }
  const { data } = await axios.get(
    `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?${qs(
      params,
    )}`,
  )
  if (data.status !== 'OK') {
    throw new Error(
      `findplacefromtext status not OK: ${data.status}: ${data.error_message}`,
    )
  }
  return data
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

export async function updatePool(pool, geo, id) {
  return pool.query(`update events set geo=$1 where id=$2;`, [geo, id])
}
