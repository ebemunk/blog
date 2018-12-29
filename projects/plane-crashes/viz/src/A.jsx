import React from 'react'
import {
  FlexibleWidthXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries,
} from 'react-vis'

import data from './data'

console.log('dat', data.dates)

const A = ({}) => (
  <div>
    <FlexibleWidthXYPlot height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries data={data.dates} />
    </FlexibleWidthXYPlot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(A)
