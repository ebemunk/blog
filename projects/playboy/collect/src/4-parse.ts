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

const run = async () => {
  const pool = getPool()
  const { rows } = await pool.query('select * from playboy.playmates')

  const mates = rows.map(row => {
    const bp = row.babepedia

    const height = parseHeight(bp?.['Height'])
    const ethnicity = parseEthnicity(bp?.['Ethnicity'])
    const weight = parseWeight(bp?.['Weight'])
    const born = parseBorn(bp?.['Born'])

    return {
      name: row.name,
      height,
      weight,
      ethnicity,
      measurements: parseMeasurements(bp?.['Measurements']),
      cup: parseCup(bp?.['Bra/cup size']),
      hair: parseHair(bp?.['Hair color']),
      breasts: bp?.['Boobs'],
      born,
      age: born ? differenceInYears(new Date(), born) : null,
      eye: bp?.['Eye color'],
      tattoos: parseTattoos(bp?.['Tattoos']),
      month: row.month,
      year: row.year,
      mateAge: born
        ? differenceInYears(new Date(row.year, row.month, 1), born)
        : null,
    }
  })

  await fs.writeFile(
    resolve(__dirname, '../../viz/data.json'),
    JSON.stringify(mates, null, 2),
  )
}

run()
