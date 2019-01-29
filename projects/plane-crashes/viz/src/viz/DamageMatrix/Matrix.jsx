import React from 'react'
import { scalePow, scaleBand } from 'd3-scale'
import { extent } from 'd3-array'

import Plot from '../../vizlib/Plot'
import Axis from '../../vizlib/Axis'
import Rects from '../../vizlib/Rects'

import data from '../../data/damage-fate.csv'

const Matrix = ({}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Plot
      width={650}
      height={320}
      margin={{
        left: 200,
        right: 0,
        top: 0,
        bottom: 20,
      }}
    >
      {({ chartWidth, chartHeight }) => {
        const xScale = scaleBand()
          .domain([...new Set(data.map(d => d.damage))])
          .range([0, chartWidth])

        const yScale = scaleBand()
          .domain([...new Set(data.map(d => d.fate))])
          .range([chartHeight, 0])

        const colorScale = scalePow()
          .exponent(0.5)
          .domain(extent(data.map(d => +d.count)))
          .range(['transparent', 'red'])

        return (
          <React.Fragment>
            <Axis
              orientation="bottom"
              scale={xScale}
              transform={`translate(0, ${chartHeight})`}
            />
            <Axis orientation="left" scale={yScale} />
            <Rects
              data={data}
              x={d => xScale(d.damage)}
              y={d => yScale(d.fate)}
              width={xScale.bandwidth()}
              height={yScale.bandwidth()}
              style={d => ({
                fill: colorScale(+d.count),
              })}
            />
          </React.Fragment>
        )
      }}
    </Plot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Matrix)
