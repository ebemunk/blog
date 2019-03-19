import { scaleOrdinal, scaleLinear } from 'd3-scale'
import { hsl } from 'd3-color'
import { interpolateSinebow } from 'd3-scale-chromatic'
import { range } from 'd3-array'

export const get8 = () =>
  scaleOrdinal([
    '#0081bd',
    '#5f80d0',
    '#a079d3',
    '#d86ec3',
    '#ff66a2',
    '#ff6d77',
    '#ff8548',
    '#ffa600',
  ]).domain(range(8))

export const blueRed = () => scaleOrdinal(['#0081bd', '#e43034']).domain([0, 1])

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

export const colorScalex = num => scaleOrdinal(makeColors(num))

export const colorScalexx = num => {
  const scale = scaleLinear()
    .domain([0, num])
    .range([0, 1])
  return scaleOrdinal(range(num).map(n => interpolateSinebow(scale(n))))
}
