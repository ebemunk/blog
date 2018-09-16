import { pipe, map, evolve } from 'ramda'

/*

select count(*) as count, details->'location'->>'name' as name from events
where
details->>'startDate' > '2017-12-31'
and details->>'startDate' < '2019-01-01'
group by 2
having count(*) > 40
order by 1 desc
;

*/

import places from './places.csv'

export default pipe(
  map(
    evolve({
      count: Number.parseInt,
    }),
  ),
)(places)
