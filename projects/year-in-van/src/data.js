import { memoizeWith, identity } from 'ramda'
import { getTime, getHours } from 'date-fns'

import events from './events.csv'

const byName = name => d => d.name.match(new RegExp(`${name}`, 'ig'))

export const filterByName = memoizeWith(identity, name =>
  events.filter(byName(name)),
)

// const durationLessThan = d =>
//   differenceInHours(d.startdate, d.enddate) < 4

// const evtz = events.filter(byDiffHours).filter(d => d.startdate === d.enddate)

const byStartHour = ([start, end]) => d => {
  const hour = getHours(d.startdate)
  return hour >= start && hour < end
}

export const filterByStartHour = memoizeWith(identity, (start, end) => {
  console.log('runin', start, end)

  return events.filter(byStartHour([start, end]))
})

import { scaleQuantize, extent, range } from 'd3'

export const dateScale = scaleQuantize()
  .range(range(0, 101))
  .domain(extent(events, event => getTime(event.startdate)))

export const byDate = events.reduce((acc, event) => {
  const skey = dateScale(getTime(event.startdate))
  const ekey = dateScale(getTime(event.enddate))
  range(skey, ekey).map(key => acc[key].push(event))
  return acc
}, range(0, 101).map(() => []))
