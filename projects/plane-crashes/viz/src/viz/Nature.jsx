import React from 'react'
import { VerticalBarSeries } from 'react-vis'

import Plot from '../components/Plot'
import { colors } from '../colors'

import data from '../data/nature.csv'

const Nature = ({}) => (
  <div>
    <Plot
      height={400}
      data={data.map(d => ({
        x: d.nature,
        y: +d.count,
      }))}
      xType="ordinal"
    >
      <VerticalBarSeries
        data={data.map(d => ({
          x: d.nature,
          y: +d.count,
        }))}
      />
    </Plot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Nature)
