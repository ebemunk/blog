import memoize from 'lodash/memoize'

import raw from '../data.json'

export const data = raw
  .map(d => ({
    ...d,
    date: new Date(d.year, d.month, 1),
  }))
  .sort((a, b) => a.date.getTime() - b.date.getTime())

const _get = (key: Function): [Date, number][] =>
  data
    .filter((d: any) => !!key(d))
    .filter(d => d.name !== 'Debbie Hooper')
    .filter(d => d.name !== 'Kristine Winder')
    .filter(d => d.name !== 'Julia Lyndon')
    .map((d: any) => [d.date, key(d)])

export const get = memoize(_get)

console.log('data', data)
