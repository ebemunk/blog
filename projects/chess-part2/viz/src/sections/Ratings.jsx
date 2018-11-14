import React from 'react'
import { format } from 'd3-format'
import { VerticalRectSeries } from 'react-vis'

import data from '../data'
import { colorScale } from '../util'
import Plot from '../components/Plot'

const Ratings = ({}) => {
  return (
    <div>
      <Plot
        data={data.Ratings.map(d => ({
          ...d,
          x: d.x - (d.x - d.x0) / 2,
          x1: d.x,
        }))}
        height={400}
        xAxis={{
          title: 'ELO Rating',
        }}
        yAxis={{
          title: 'Count',
          tickFormat: d => format('.2s')(d),
        }}
        crosshairProps={{
          titleFormat: d => ({
            title: 'Rating',
            value: `${d[0].x0} - ${d[0].x1}`,
          }),
          itemsFormat: d => [
            {
              title: 'Count',
              value: format(',')(d[0].y),
            },
          ],
        }}
      >
        <VerticalRectSeries
          data={data.Ratings}
          stroke="#282c34"
          color={colorScale(0)}
        />
      </Plot>
    </div>
  )
}

import { compose, pure, withState } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
)(Ratings)
