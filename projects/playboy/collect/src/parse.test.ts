import {
  parseHeight,
  parseEthnicity,
  parseWeight,
  parseMeasurements,
  parseHair,
  parseBorn,
  parseCup,
  parseTattoos,
} from './parse'
import getPool from './db'
import { uniq } from 'remeda'
import { max, min, isAfter, isBefore } from 'date-fns'

let mates: {
  babepedia?: { [key: string]: string }
}[]

beforeAll(async () => {
  const pool = getPool()
  const { rows } = await pool.query('select * from playboy.playmates')
  mates = rows
})

test('parseHeight', () => {
  const h = mates.map(mate => parseHeight(mate?.babepedia?.['Height']))

  const nulls = h.filter(d => d == null)

  const legit = h.filter(d => d === 666)

  expect(nulls.length).toBe(18)
  expect(legit.length).toBe(0)
})

test('parseWeight', () => {
  const h = mates.map(mate => parseWeight(mate?.babepedia?.['Weight']))

  const nulls = h.filter(d => d == null)

  const legit = h.filter(d => d === 666)

  expect(nulls.length).toBe(56)
  expect(legit.length).toBe(0)
})

test('parseMeasurements', () => {
  const h = mates.map(mate =>
    parseMeasurements(mate?.babepedia?.['Measurements']),
  )

  const nulls = h.filter(d => d == null)

  expect(nulls.length).toBe(20)
})

test('parseBorn', () => {
  const h = mates.map(mate => parseBorn(mate?.babepedia?.['Born']))

  const nulls = h.filter(d => d == null)

  expect(nulls.length).toBe(16)

  const legits = h.filter(d => d !== null)

  expect(isAfter(min(legits), new Date(1923, 3, 21))).toBe(true)
  expect(isBefore(max(legits), new Date(2000, 6, 19))).toBe(true)
})

test('parseCup', () => {
  const h = mates.map(mate => parseCup(mate?.babepedia?.['Bra/cup size']))

  const nulls = h.filter(d => d == null)

  expect(nulls.length).toBe(33)

  const legits = h.filter(d => d !== null)

  expect(uniq(legits)).toMatchInlineSnapshot(`
    Array [
      "B",
      "D",
      "C",
      "E",
      "H",
      "DD",
      "A",
      "F",
      "I",
    ]
  `)
})

test('parseTattoos', () => {
  const h = mates.map(mate => parseTattoos(mate?.babepedia?.['Tattoos']))

  const nulls = h.filter(d => d == null)

  expect(nulls.length).toBe(574)

  const legits = h.filter(d => d !== null)

  expect(uniq(legits)).toMatchInlineSnapshot(`
    Array [
      false,
      true,
    ]
  `)
})

test('parseHair', () => {
  const h = mates.map(mate => parseHair(mate?.babepedia?.['Hair color']))

  const nulls = h.filter(d => d == null)

  expect(nulls.length).toBe(4)

  const legit = h.filter(d => d !== null)
  expect(uniq(legit)).toMatchInlineSnapshot(`
    Array [
      "Black",
      "Brunette",
      "Red",
      "Blonde",
      "Auburn",
      "Hazel",
    ]
  `)
})

test('parseEthnicity', () => {
  const h = mates.map(mate => parseEthnicity(mate?.babepedia?.['Ethnicity']))

  const nulls = h.filter(d => d == null)

  expect(nulls.length).toBe(3)

  const legit = h.filter(d => d !== null)

  expect(uniq(legit)).toMatchInlineSnapshot(`
    Array [
      "Caucasian",
      "Black",
      "Mixed-race (primarily Black)",
      "Latin",
      "Asian",
      "Other",
      "Mixed-race (primarily Caucasian)",
      "Mixed-race (primarily Middle Eastern)",
      "Mixed-race (primarily Asian)",
      "Mixed-race",
      "South Asian, Black",
      "Mixed-race (primarily Latin)",
      "Caucasian, Latina",
      "Caucasian, Pacific Islander",
    ]
  `)
})
