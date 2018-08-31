import * as d3 from 'd3'

export const seasonColor = d3.scaleOrdinal([
  '#0081bd',
  '#7a7ed3',
  '#ce70c7',
  '#ff669a',
  '#ff7a5b',
  '#ffa600',
])

export const SEASONS = [
  [0, 23],
  [24, 46],
  [47, 68],
  [69, 81],
  [82, 97],
  [98, 113],
]

export const groupColor = d3.scaleOrdinal(d3.schemeCategory10.slice(1))

export const toTitleCase = str =>
  str.replace(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  )

export const MAIN_CHARS = [
  'JACK',
  'SAWYER',
  'LOCKE',
  'KATE',
  'HURLEY',
  'SAYID',
  'CHARLIE',
  'BEN',
]
