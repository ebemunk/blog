import { scaleOrdinal, scaleLinear } from 'd3-scale'
import { hsl } from 'd3-color'
import { interpolateSinebow } from 'd3-scale-chromatic'
import { range } from 'd3-array'

export const colors8 = scaleOrdinal([
  '#0081bd',
  '#5f80d0',
  '#a079d3',
  '#d86ec3',
  '#ff66a2',
  '#ff6d77',
  '#ff8548',
  '#ffa600',
])

function makeColors(num) {
  const base = 3
  const lightnessMin = 0.4
  const lightnessMax = 0.8
  const lightnessDecay = 30
  const saturation = 0.5

  let tmp = ''
  let hue, lightness

  const data = []

  for (var i = 0; i < num; i++) {
    tmp = i
      .toString(base)
      .split('')
      .reverse()
      .join('')
    hue = (360 * parseInt(tmp, base)) / Math.pow(base, tmp.length)
    lightness =
      lightnessMin +
      (lightnessMax - lightnessMin) * (1 - Math.exp(-i / lightnessDecay))

    data.push({ h: hue, s: saturation, l: lightness, code: tmp })
  }

  return data.map(d => hsl(d.h, d.s, d.l))
}

console.log('geagea', makeColors(34))

export const colorScalex = num => scaleOrdinal(makeColors(num))

export const colorScalexx = num => {
  const scale = scaleLinear()
    .domain([0, num])
    .range([0, 1])
  return scaleOrdinal(range(num).map(n => interpolateSinebow(scale(n))))
}

export const colorScale = num =>
  scaleOrdinal([
    '#e2809c',
    '#53c24c',
    '#a43bb9',
    '#b2c231',
    '#4e5cd5',
    '#80b946',
    '#9362de',
    '#398e2d',
    '#d171e5',
    '#49c584',
    '#c1329b',
    '#729133',
    '#8649ae',
    '#b0af3f',
    '#6184f0',
    '#d6ac3e',
    '#6257b8',
    '#e48f33',
    '#3d68c4',
    '#cf5c21',
    '#4ab4dd',
    '#d03c37',
    '#59c8b5',
    '#d84187',
    '#64a76a',
    '#e46dc8',
    '#546e19',
    '#aa83e4',
    '#ad7820',
    '#6a5daa',
    '#8e812c',
    '#7899e0',
    '#dd7650',
    '#476ba4',
    '#a3b56e',
    '#a24a91',
    '#35773e',
    '#d53f61',
    '#3a9c83',
    '#a2425a',
    '#277257',
    '#ca93d1',
    '#597236',
    '#85609c',
    '#6f682c',
    '#975175',
    '#d3a16b',
    '#a34b35',
    '#e58073',
    '#946332',
  ])
