import { format } from 'd3-format'
import { scaleOrdinal } from 'd3-scale'

export function speakerName(name: string) {
  if (name.includes('Trump')) return 'Trump'
  if (name.includes('Biden')) return 'Biden'
  if (name.includes('Wallace')) return 'Wallace'
  return 'None'
}

export const speakerIds = {
  Trump: 0,
  Biden: 1,
  Wallace: 2,
}

export const speakerIdToName = {
  0: 'Trump',
  1: 'Biden',
  2: 'Wallace',
}

export function speakerNameToId(name: string): number {
  if (name.includes('Trump')) return 0
  if (name.includes('Biden')) return 1
  if (name.includes('Wallace')) return 2
  return -1
}

export function pad(number: number) {
  if (number < 10) return `0${number}`
  return `${number}`
}

export function msToString(ms: number) {
  var d = new Date(ms)
  const h = d.getUTCHours()
  const m = d.getUTCMinutes()
  const s = d.getUTCSeconds()

  if (!h && !m && !s) return ''

  return pad(d.getUTCHours()) + ':' + pad(d.getUTCMinutes())
}

export const colorScaleByName = scaleOrdinal<string>()
  .domain(['Trump', 'Biden', 'Wallace'])
  .range(['#E81B23', '#3333FF', '#B1AB99'])

export const colorScaleById = scaleOrdinal<string>()
  .domain(['0', '1', '2'])
  .range(['#E81B23', '#3333FF', '#B1AB99'])

export const formatSec = (sec: number) => {
  const d = new Date(sec * 1000)
  const m = d.getUTCMinutes()
  const s = d.getUTCSeconds()
  if (!m) return `${s} sec.`
  if (!s) return `${m} min.`
  return `${m}m ${s}s`
}

export const formatPct = format('.2p')

export const defaultMargins = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}
