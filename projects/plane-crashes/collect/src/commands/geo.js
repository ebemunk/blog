import * as R from 'ramda'
import axios from 'axios'
import Promise from 'bluebird'

import { getPool } from '../db'
import { insertObj } from '../util'

export const qs = obj =>
  Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&')

export default async function geo(args, opts) {
  const pool = getPool()
  const { rows: list } = await pool.query(`
    select location, count(*) from
      (
        select raw->>'Departure airport' as location
        from crashes
        union all
        select raw->>'Destination airport' as location
        from crashes
        union all
        select raw->>'Location' as location
        from crashes
      ) t
      where
      	location <> '?'
      	and location <> '-'
      	and location not ilike '%unknown%'
      	and location not in (select location from locations)
      group by 1
      order by 2 asc
  `)

  console.log(`found ${list.length} rows`)

  await Promise.map(
    list,
    async row => {
      let geo
      let search = row.location
        .replace('near', '')
        .replace(/(.*?off)(.+)/, '$2')
        .replace(/(.*?of(?! America))(.+)/, '$2')
        .replace(/(.*?from)(.+)/, '$2')
        .trim()

      try {
        geo = await geocode(search)
      } catch (e) {
        console.log(`error for ${row.airport} -- ${search}`)
        console.log(e.message)
        console.log('------')
        return false
      }

      return pool.query(
        ...insertObj({ location: row.location, search, geo }, 'locations'),
      )
    },
    { concurrency: 5 },
  )

  await pool.end()
}

export async function geocode(address) {
  const params = {
    app_id: process.env.HERE_APP_ID,
    app_code: process.env.HERE_APP_CODE,
    searchtext: address,
  }
  const { data } = await axios.get(
    `https://geocoder.api.here.com/6.2/geocode.json?${qs(params)}`,
  )
  // if (data.status !== 'OK') {
  //   throw new Error(
  //     `geocode status not OK: ${data.status}: ${data.error_message}`,
  //   )
  // }
  return data
}
