//@ts-nocheck

import { uniqBy } from 'remeda'
import * as d3 from 'd3'
import fs from 'fs/promises'

const rawData = require(__dirname + '/../../viz/data.json')

const data = uniqBy(rawData, d => d.name)

const normalizer = accessor =>
  d3
    .scaleLinear()
    .domain(d3.extent(data, accessor) as [number, number])
    .range([0, 1])

const normalizedData = data.map(d => ({
  ...d,
  bustCM: normalizer(d => d.bustCM)(d.bustCM),
  waistCM: normalizer(d => d.waistCM)(d.waistCM),
  hipsCM: normalizer(d => d.hipsCM)(d.hipsCM),
  heightCM: normalizer(d => d.heightCM)(d.heightCM),
  weightKG: normalizer(d => d.weightKG)(d.weightKG),
  mateAge: normalizer(d => d.mateAge)(d.mateAge),
}))

const hairAvgs = new Map(
  d3
    .groups(data, d => d.hair)
    .map(([k, v]) => {
      return [k, v.length / data.length]
    }),
)

const ethnicityAvgs = new Map(
  d3
    .groups(data, d => d.ethnicity)
    .map(([k, v]) => {
      return [k, v.length / data.length]
    }),
)

const cupAvgs = new Map(
  d3
    .groups(data, d => d.cup)
    .map(([k, v]) => {
      return [k, v.length / data.length]
    }),
)

const breastsAvgs = new Map(
  d3
    .groups(data, d => d.breasts)
    .map(([k, v]) => {
      return [k, v.length / data.length]
    }),
)

const average = [
  d3.mean(normalizedData, d => d.bustCM),
  d3.mean(normalizedData, d => d.waistCM),
  d3.mean(normalizedData, d => d.hipsCM),
  d3.mean(normalizedData, d => d.heightCM),
  d3.mean(normalizedData, d => d.weightKG),
  d3.mean(normalizedData, d => d.mateAge),
  // hairAvgs.get('Blond'),
  // ethnicityAvgs.get('Caucasian'),
  // breastsAvgs.get('Real/Natural'),
  // cupAvgs.get('C'),
]

export const euclidian = normalizedData
  .map((d, i) => {
    const distance = Math.sqrt(
      Math.pow(average[0] - d.bustCM, 2) +
        Math.pow(average[1] - d.waistCM, 2) +
        Math.pow(average[2] - d.hipsCM, 2) +
        Math.pow(average[3] - d.heightCM, 2) +
        Math.pow(average[4] - d.weightKG, 2) +
        Math.pow(average[5] - d.mateAge, 2),
      // Math.pow(average[6] - hairAvgs.get(d.hair), 2) +
      // Math.pow(average[7] - ethnicityAvgs.get(d.ethnicity), 2) +
      // Math.pow(average[8] - breastsAvgs.get(d.breasts), 2) +
      // Math.pow(average[9] - cupAvgs.get(d.cup), 2),
    )
    return { ...d, distance, index: i }
  })
  .sort((a, b) => a.distance - b.distance)

async function run() {
  await fs.writeFile(
    __dirname + '/../../viz/averages.json',
    JSON.stringify(euclidian, null, 2),
  )
}

run()
