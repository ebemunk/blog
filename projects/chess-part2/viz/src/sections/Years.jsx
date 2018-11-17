import React from 'react'
import { format } from 'd3-format'
import { VerticalBarSeries } from 'react-vis'

import data from '../data'
import { colorScale } from '../util'
import Plot from '../components/Plot'

const Years = ({}) => {
  return (
    <div>
      <Plot
        data={data.Years}
        height={400}
        xAxis={{
          title: 'Year',
        }}
        yAxis={{
          title: 'Count',
          tickFormat: d => format('.2s')(d),
        }}
        crosshairProps={{
          titleFormat: d => ({
            title: 'Year',
            value: `${d[0].x}`,
          }),
          itemsFormat: d => [
            {
              title: 'Count',
              value: format(',')(d[0].y),
            },
          ],
        }}
      >
        <VerticalBarSeries
          data={data.Years}
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
)(Years)
