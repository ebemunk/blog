import { parse, differenceInYears } from 'date-fns'
import fs from 'fs/promises'
import { resolve } from 'path'

import getPool from './db'

export const parseHeight = (str: string | undefined): number | null => {
  if (!str) return null

  const height = /\(or (.+) cm\)/.exec(str)?.[1]

  if (!height) return 666

  return parseInt(height, 10)
}

export const parseEthnicity = (str: string | undefined): string | null => {
  if (!str) return null

  let eth = str
  if (str === 'Caucaision') {
    eth = 'Caucasian'
  }
  if (str.indexOf('Mixed') > -1 || str.indexOf(',') > -1) {
    eth = 'Mixed'
  }

  return eth
}

export const parseWeight = (str: string | undefined): number | null => {
  if (!str) return null

  const weight = /or (.+) kg/.exec(str)?.[1]

  if (!weight) return 666

  return parseInt(weight, 10)
}

export const parseMeasurements = (
  str: string | undefined,
): null | { bust: number; waist: number; hips: number; cup: string } => {
  if (!str) return null

  const matches = /(\d\d)([A-Z]?[A-Z])?[- \/]+(\d\d)[- \/](\d\d)/.exec(str)
  if (!matches) {
    return null
  }

  return {
    bust: +matches[1],
    waist: +matches[3],
    hips: +matches[4],
    cup: matches[2],
  }
}

export const parseHair = (str: string | undefined): string | null => {
  if (!str) return null

  const colors: { [key: string]: string[] } = {
    Blonde: ['Blonde'],
    Brunette: ['Brunette', 'Brown', 'Hazel'],
    Black: ['Black'],
    Red: ['Red', 'Redhead'],
    Auburn: ['Auburn'],
  }

  for (let color of Object.keys(colors)) {
    const [first] = str.split(/[,;]/)
    if (colors[color].includes(first)) return color
  }

  return null
}

export const parseBorn = (str: string | undefined): Date | null => {
  if (!str) return null

  return parse(str, `EEEE do 'of' MMMM yyyy`, new Date())
}

export const parseCup = (str: string | undefined): string | null => {
  if (!str) return null

  if (str.length === 1) return str

  const m1 = /(\d\d)?([A-Z]+)/.exec(str)

  if (m1) return m1[2]

  return null
}

export const parseTattoos = (str: string | undefined): boolean | null => {
  if (!str) return null

  if (!['None', 'none', 'no'].includes(str)) return true

  return false
}

const cm2in = num => (num ? num / 2.54 : null)
const in2cm = num => (num ? num * 2.54 : null)
const kg2lb = num => (num ? num / 0.45359237 : null)

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const run = async () => {
  const pool = getPool()
  const { rows } = await pool.query('select * from playboy.playmates')

  const mates = rows
    .map(row => {
      const bp = row.babepedia
      const mp = row.mypmates

      const height = mp.height
      const weight = mp.weight
      const bust = mp.bust
      const waist = mp.waist
      const hips = mp.hips
      const zodiac = mp.zodiac
      const hair = capitalizeFirstLetter(mp.hair)
      const ethnicity = mp.ethnicity
      const born = new Date(mp.born)

      const measurements = parseMeasurements(bp?.['Measurements'])
      const cup = parseCup(bp?.['Bra/cup size'])

      return {
        name: row.name,
        heightCM: height,
        heightIN: cm2in(height),
        weightKG: weight,
        weightLB: kg2lb(weight),
        bustIN: cm2in(bust),
        bustCM: bust,
        waistIN: cm2in(waist),
        waistCM: waist,
        hipsIN: cm2in(hips),
        hipsCM: hips,
        cup: measurements?.cup ?? cup,
        hair: hair,
        breasts: bp?.['Boobs'],
        ethnicity,
        born,
        month: row.month,
        year: row.year,
        mateAge: born
          ? differenceInYears(new Date(row.year, row.month, 1), born)
          : null,
        first: row.first,
        babepediaUrl: bp.url,
        mypmatesUrl: mp.url,
        zodiac,
      }
    })
    .sort((a, b) => {
      const yr = a.year - b.year
      if (yr !== 0) return yr

      return a.month - b.month
    })

  await fs.writeFile(
    resolve(__dirname, '../../viz/data.json'),
    JSON.stringify(mates, null, 2),
  )
}

run()
