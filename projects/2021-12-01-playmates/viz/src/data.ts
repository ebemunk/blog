import { group } from 'd3'
import memoize from 'lodash/memoize'
import { uniqBy } from 'remeda'

import raw from '../data.json'
import { Playmate } from './types'

export const data: Playmate[] = raw
  .map(d => ({
    ...d,
    date: new Date(d.year, d.month, 1),
  }))
  .sort((a, b) => a.date.getTime() - b.date.getTime())

const _get = (key: Function): [Date, number][] =>
  data.filter((d: any) => !!key(d)).map((d: any) => [d.date, key(d)])

export const get = memoize(_get)

// console.log('data', data)

export const byCountry = group(
  uniqBy(data, d => d.name),
  d => d.country,
)

export const byState = group(
  uniqBy(data, d => d.name).filter(d => d.country === 'United States'),
  d => d.state.trim(),
)
