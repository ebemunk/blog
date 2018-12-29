import data from '/Users/bfirat/Downloads/csv-db/planecrashinfo_20181121001952.csv'

import { pipe, reduce, map, values } from 'ramda'

export default {
  dates: pipe(
    reduce((acc, d) => {
      const date = new Date(d.date).getFullYear()

      if (acc[date]) {
        acc[date].y++
      } else {
        acc[date] = {
          x: date,
          y: 1,
        }
      }

      return acc
    }, {}),
    // map(d => d),
    values,
  )(data),
}
