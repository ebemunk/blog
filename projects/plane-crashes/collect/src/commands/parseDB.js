import * as R from 'ramda'
import Promise from 'bluebird'

import { readFile, insertObj, logger } from '../util'
import { getPool } from '../db'

const log = logger('parseDB')

const parseDate = str => {
  const date = new Date(str)

  return {
    day: /^xx .+$/.exec(str) ? null : date.getDay(),
    month: /^xx xxx .+$/.exec(str) ? null : date.getMonth(),
    year: date.getFullYear(),
  }
}

const getFatalities = str => {
  const regex = /Fatalities: (\d+)? \/ Occupants: ?(\d+)?/

  const [, totFat, totOcc] = regex.exec(str)
  return {
    fatalities: totFat === undefined ? null : totFat,
    occupants: totOcc === undefined ? null : totOcc,
  }
}

const getGroundFatalities = str => {
  if (!str) return null
  const regex = /Fatalities: (\d+)/
  const [, fatalities] = regex.exec(str)
  return fatalities === undefined ? null : fatalities
}

const parseFatailities = raw => ({
  Crew: getFatalities(raw.Crew),
  Passengers: getFatalities(raw.Passengers),
  Total: getFatalities(raw.Total),
  Ground: getGroundFatalities(raw['Ground casualties']),
})

const parseFate = raw => {
  if (!raw) return null
  return {
    unk: 'Unknown',
    'Presumed damaged beyond repair': 'Damaged beyond repair (presumed)',
    Repaired: 'Repaired',
    '-': 'Unknown',
    'Written off (damaged beyond repair)':
      'Damaged beyond repair (Written off)',
  }[raw]
}

export default async function parseDB(opts) {
  const pool = getPool()

  const { rows } = await pool.query('select * from crashes')

  await Promise.map(rows, async row => {
    const date = parseDate(row.raw.Date)
    const fatalities = parseFatailities(row.raw)
    const fate = parseFate(row.raw['Aircraft fate'])

    await pool.query('update crashes set parsed=$1 where id=$2', [
      { date, fatalities, fate, damage: row.raw['Aircraft damage'] },
      row.id,
    ])
  })

  pool.end()
}
