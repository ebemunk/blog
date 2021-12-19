// @ts-nocheck

import fs from 'fs/promises'
import * as d3 from 'd3'
import { omit } from 'remeda'

const json = require(__dirname + '/../../viz/data.json')

async function toCsv() {
  let data = json
    .map(d =>
      omit(d, [
        'heightIN',
        'weightLB',
        'bustIN',
        'waistIN',
        'hipsIN',
        'cup',
        'babepediaUrl',
        'mypmatesUrl',
        'country',
        'state',
        'town',
      ]),
    )
    .map(d => ({
      ...d,
      hair: ['Blond', 'Black', 'Brown', 'Red'].indexOf(d.hair),
      breasts: ['Real/Natural', 'Fake/Enhanced'].indexOf(d.breasts),
      ethnicity: ['Caucasian', 'Black', 'Asian', 'Latin'].indexOf(d.ethnicity),
      born: new Date(d.born).getTime(),
    }))

  data = calcAverage(data)

  const csv = d3.csvFormat(data)

  await fs.writeFile(__dirname + '/../../viz/data.csv', csv)
}

function calcAverage(data) {
  const normalizer = accessor =>
    d3.scaleLinear().domain(d3.extent(data, accessor)).range([0, 1])

  const normalizedData = data.map(d => ({
    ...d,
    bustCMNorm: normalizer(d => d.bustCM)(d.bustCM),
    waistCMNorm: normalizer(d => d.waistCM)(d.waistCM),
    hipsCMNorm: normalizer(d => d.hipsCM)(d.hipsCM),
    heightCMNorm: normalizer(d => d.heightCM)(d.heightCM),
    weightKGNorm: normalizer(d => d.weightKG)(d.weightKG),
    mateAgeNorm: normalizer(d => d.mateAge)(d.mateAge),
  }))

  const categoricalAverage = accessor =>
    d3.groups<string, number>(data, accessor).map(([k, v]) => {
      return [k, v.length / data.length]
    })

  const categoricalAvgs = {
    hair: categoricalAverage(d => d.hair),
    ethnicity: categoricalAverage(d => d.ethnicity),
    breasts: categoricalAverage(d => d.breasts),
  }

  const average = [
    d3.mean(normalizedData, d => d.bustCMNorm),
    d3.mean(normalizedData, d => d.waistCMNorm),
    d3.mean(normalizedData, d => d.hipsCMNorm),
    d3.mean(normalizedData, d => d.heightCMNorm),
    d3.mean(normalizedData, d => d.weightKGNorm),
    d3.mean(normalizedData, d => d.mateAgeNorm),
    categoricalAvgs.hair[0][1],
    categoricalAvgs.ethnicity[0][1],
    categoricalAvgs.breasts[0][1],
  ] as const

  return normalizedData.map((d, i) => {
    const distance = Math.sqrt(
      Math.pow(average[0] - d.bustCMNorm, 2) +
        Math.pow(average[1] - d.waistCMNorm, 2) +
        Math.pow(average[2] - d.hipsCMNorm, 2) +
        Math.pow(average[3] - d.heightCMNorm, 2) +
        Math.pow(average[4] - d.weightKGNorm, 2) +
        Math.pow(average[5] - d.mateAgeNorm, 2) +
        Math.pow(average[6] - categoricalAvgs.hair[d.hair][1], 2) +
        Math.pow(average[7] - categoricalAvgs.ethnicity[d.ethnicity][1], 2) +
        Math.pow(average[8] - categoricalAvgs.breasts[d.breasts][1], 2),
    )
    return omit({ ...d, avgDist: distance.toFixed(3) }, [
      'bustCMNorm',
      'waistCMNorm',
      'hipsCMNorm',
      'heightCMNorm',
      'weightKGNorm',
      'mateAgeNorm',
    ])
  })
}

toCsv()
