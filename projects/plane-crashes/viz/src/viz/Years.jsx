import React from 'react'
import { LineSeries, Hint } from 'react-vis'

import Plot from '../components/Plot'
import { colors } from '../colors'
import data from '../data/years-fat-crash.csv'

const Years = ({}) => (
  <div>
    <Plot
      height={400}
      data={data.map(d => ({
        x: d.year,
        y: +d.total,
      }))}
    >
      <LineSeries
        data={data.map(d => ({
          x: d.year,
          y: d.total,
        }))}
        stroke={colors[0]}
        strokeWidth={3}
      />
      <LineSeries
        data={data.map(d => ({
          x: d.year,
          y: d.crashes,
        }))}
        stroke={colors[1]}
        strokeWidth={3}
      />
      <LineSeries
        data={data.map(d => ({
          x: d.year,
          y: d.ground,
        }))}
        stroke={colors[2]}
        strokeWidth={3}
      />
    </Plot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Years)
