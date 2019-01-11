import React from 'react'
import { LineSeries as LS } from 'react-vis'

import Pulot from '../components/Plot'
import { colors } from '../colors'
import data from '../data/years-fat-crash.csv'

import Plot from '../vizlib/Plot'
import Line from '../vizlib/Line'
import Axis from '../vizlib/Axis'
import GridLines from '../vizlib/GridLines'

import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

const Years = ({}) => (
  <div>
    <Plot
      width={1500}
      height={300}
      margin={{ left: 40, right: 30, top: 30, bottom: 30 }}
    >
      {({ margin, chartHeight, chartWidth }) => {
        const xScale = scaleLinear()
          .domain(extent(data.map(d => d.year)))
          .range([0, chartWidth])

        const yScale = scaleLinear()
          .domain(extent(data.map(d => +d.total)))
          .range([chartHeight, 0])

        console.log('iner render')

        return (
          <React.Fragment>
            <Axis
              scale={xScale}
              orientation="bottom"
              transform={`translate(0, ${chartHeight})`}
              ticks={20}
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
                stroke: 'red',
                strokeWidth: '3',
              }}
            />
            <Line
              data={data.map(d => [xScale(d.year), yScale(d.crashes)])}
              style={{
                stroke: 'yellow',
                strokeWidth: '3',
              }}
            />
            <Line
              data={data.map(d => [xScale(d.year), yScale(d.ground)])}
              style={{
                stroke: 'pink',
                strokeWidth: '3',
              }}
            />
          </React.Fragment>
        )
      }}
    </Plot>
    <Pulot
      height={400}
      data={data.map(d => ({
        x: d.year,
        y: +d.total,
      }))}
    >
      <LS
        data={data.map(d => ({
          x: d.year,
          y: d.total,
        }))}
        stroke={colors[0]}
        strokeWidth={3}
      />
      <LS
        data={data.map(d => ({
          x: d.year,
          y: d.crashes,
        }))}
        stroke={colors[1]}
        strokeWidth={3}
      />
      <LS
        data={data.map(d => ({
          x: d.year,
          y: d.ground,
        }))}
        stroke={colors[2]}
        strokeWidth={3}
      />
    </Pulot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Years)
