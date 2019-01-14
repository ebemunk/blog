import React from 'react'
import { colors8 } from '../colors'
// import datar from '../data/years-fat-crash.csv'
import datar from '../data/years-no-military.csv'

import FlexPlot from '../vizlib/FlexPlot'
import Line from '../vizlib/Line'
import Axis from '../vizlib/Axis'
import GridLines from '../vizlib/GridLines'

import { scaleLinear } from 'd3-scale'
import { extent, max } from 'd3-array'

// const data = datar.filter(d => d.year > 1937 && d.year < 1948)
const data = datar

import dara from '../data/years-military.csv'

const Years = ({ linedata, setLinedata }) => (
  <div>
    <button onClick={() => setLinedata(!linedata)}>set {linedata}</button>
    <FlexPlot
      height={400}
      margin={{ left: 40, right: 15, top: 30, bottom: 30 }}
    >
      {({ margin, chartHeight, chartWidth }) => {
        const xScale = scaleLinear()
          .domain(extent(data.map(d => d.year)))
          .range([0, chartWidth])

        const yScale = scaleLinear()
          .domain([0, 3000])
          .range([chartHeight, 0])

        console.log('iner render')

        return (
          <React.Fragment>
            <Axis
              scale={xScale}
              orientation="bottom"
              transform={`translate(0, ${chartHeight})`}
              ticks={20}
              tickFormat={d => d}
            />
            <Axis scale={yScale} orientation="left" ticks={5} />
            <GridLines
              scale={xScale}
              ticks={20}
              style={{
                stroke: 'gray',
              }}
              orientation="vertical"
            />
            <GridLines
              scale={yScale}
              ticks={5}
              style={{
                stroke: 'gray',
              }}
              orientation="horizontal"
            />
            <Line
              data={data.map(d => [xScale(d.year), yScale(d.total)])}
              style={{
                stroke: colors8(0),
                strokeWidth: '3',
              }}
            />
            <Line
              data={data.map(d => [xScale(d.year), yScale(d.crashes)])}
              style={{
                stroke: colors8(1),
                strokeWidth: '3',
              }}
            />
            <Line
              data={data.map(d => [xScale(d.year), yScale(d.ground)])}
              style={{
                stroke: colors8(2),
                strokeWidth: '3',
              }}
            />
            <Line
              data={dara.map(d => [xScale(d.year), yScale(d.crashes)])}
              style={{
                stroke: 'yellow',
                strokeWidth: '3',
              }}
            />
            <Line
              data={dara.map(d => [xScale(d.year), yScale(d.total)])}
              style={{
                stroke: 'red',
                strokeWidth: '3',
              }}
            />
            <rect
              x={xScale(1939)}
              y={0}
              width={xScale(1945) - xScale(1939)}
              height={chartHeight}
              style={{ fill: 'rgba(255,255,255, 0.1)' }}
            />
            <line
              x1={xScale(1939)}
              y1={0}
              x2={xScale(1939)}
              y2={chartHeight}
              style={{
                stroke: 'red',
                strokeWidth: '1',
                strokeDasharray: '3 3',
              }}
            />
            <line
              x1={xScale(1945)}
              y1={0}
              x2={xScale(1945)}
              y2={chartHeight}
              style={{
                stroke: 'red',
                strokeWidth: '1',
                strokeDasharray: '3 3',
              }}
            />
            <circle
              r={3}
              cx={xScale(2001)}
              cy={yScale(data.find(d => +d.year === 2001).ground)}
              style={{ fill: 'red' }}
            />
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose, withState } from 'recompose'

export default compose(
  hot(module),
  withState('linedata', 'setLinedata', false),
)(Years)
