import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

import FlexPlot from '../vizlib/FlexPlot'
import Axis from '../vizlib/Axis'
import GridLines from '../vizlib/GridLines'
import Rects from '../vizlib/Rects'

import { colors8 } from '../colors'
import data from '../data/phase.csv'

const Phase = ({}) => (
  <div>
    <FlexPlot
      height={400}
      margin={{ left: 40, right: 15, top: 30, bottom: 30 }}
    >
      {({ chartHeight, chartWidth }) => {
        const xScale = scaleBand()
          .domain([...new Set(data.map(d => d.phase))])
          .range([0, chartWidth])
          .padding(0.2)

        const yScale = scaleLinear()
          .domain(extent(data.map(d => +d.count)))
          .range([chartHeight, 0])

        return (
          <React.Fragment>
            <Axis orientation="left" scale={yScale} />
            <Axis
              orientation="bottom"
              scale={xScale}
              transform={`translate(0, ${chartHeight})`}
            />
            <GridLines scale={yScale} orientation="horizontal" />
            <Rects
              data={data.map(d => [xScale(d.phase), yScale(+d.count)])}
              width={xScale.bandwidth()}
              height={d => chartHeight - d[1]}
              style={{
                fill: colors8(1),
              }}
            />
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Phase)
