import { pipe, map, evolve } from 'ramda'

/*

select extract(month from startdate::date) as month, count(*)::int as count from uidata
where startdate is not null
and startdate > '2017-12-31'
and startdate < '2019-01-01'
group by 1
order by 1;

*/
import month from './month.csv'

export default pipe(
  map(
    evolve({
      count: Number.parseInt,
    }),
  ),
)(month)
