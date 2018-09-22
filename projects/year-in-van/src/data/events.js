/* events:
select
id,
details->'name' as name,
details->>'startDate' as startDate,
details->>'endDate' as endDate,
evt->'tags' as tags,
geo->'results'->0->'geometry'->'location'->>'lat' as lat,
geo->'results'->0->'geometry'->'location'->>'lng' as lng
from events
where geo != 'false'
and details->>'startDate' > '2017-12-31'
and details->>'startDate' < '2019-01-01'
order by startDate
;
*/

import { memoizeWith, identity, groupBy } from 'ramda'
import { getTime, getHours, getMonth } from 'date-fns'

import events from './events.csv'

const byName = name => d => d.name.match(new RegExp(`\\b${name}\\b`, 'ig'))

export const filterByName = memoizeWith(identity, name =>
  events.filter(byName(name)),
)

const byStartHour = ([start, end]) => d => {
  const hour = getHours(d.startdate)
  return hour >= start && hour < end
}

export const filterByStartHour = memoizeWith(identity, (start, end) =>
  events.filter(byStartHour([start, end])),
)

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

const seasons = [
  'winter',
  'winter',
  'spring',
  'spring',
  'spring',
  'summer',
  'summer',
  'summer',
  'fall',
  'fall',
  'fall',
  'winter',
]

export const bySeason = groupBy(event => seasons[getMonth(event.startdate)])(
  events,
)