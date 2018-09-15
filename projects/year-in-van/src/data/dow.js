import { pipe, map, evolve } from 'ramda'

/*

select extract(isodow from (details->>'startDate')::date) as dow, count(*)::int as count from events
where details->>'startDate' is not null
and details->>'startDate' > '2017-12-31'
and details->>'startDate' < '2019-01-01'
group by 1
order by 1;

*/
import dow from './dow.csv'

export default pipe(
  map(
    evolve({
      count: Number.parseInt,
    }),
  ),
)(dow)
