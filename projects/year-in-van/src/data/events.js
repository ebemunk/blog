/* events:
create view uidata as
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
and distance(
	cast(geo->'results'->0->'geometry'->'location'->>'lat' as float),
	cast(geo->'results'->0->'geometry'->'location'->>'lng' as float),
	49.27953,-123.122505
	) < 45000
order by startDate
;

CREATE OR REPLACE FUNCTION distance(
    lat1 double precision,
    lon1 double precision,
    lat2 double precision,
    lon2 double precision)
  RETURNS double precision AS
$BODY$
DECLARE
    R integer = 6371e3; -- Meters
    rad double precision = 0.01745329252;

    φ1 double precision = lat1 * rad;
    φ2 double precision = lat2 * rad;
    Δφ double precision = (lat2-lat1) * rad;
    Δλ double precision = (lon2-lon1) * rad;

    a double precision = sin(Δφ/2) * sin(Δφ/2) + cos(φ1) * cos(φ2) * sin(Δλ/2) * sin(Δλ/2);
    c double precision = 2 * atan2(sqrt(a), sqrt(1-a));
BEGIN
    RETURN R * c;
END
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
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

import { scaleQuantize } from 'd3-scale'
import { extent, range } from 'd3-array'

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
