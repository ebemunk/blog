import React from 'react'
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries,
} from 'react-vis'

const A = ({}) => (
  <div>
    <XYPlot height={300} width={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries
        data={[
          { x: 0, y: 8 },
          { x: 1, y: 5 },
          { x: 2, y: 4 },
          { x: 3, y: 9 },
          { x: 4, y: 1 },
          { x: 5, y: 7 },
          { x: 6, y: 6 },
          { x: 7, y: 3 },
          { x: 8, y: 2 },
          { x: 9, y: 0 },
        ]}
      />
    </XYPlot>
  </div>
)

export default A
