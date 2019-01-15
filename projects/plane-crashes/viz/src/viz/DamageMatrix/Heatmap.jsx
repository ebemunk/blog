import React from 'react'
import { XYPlot, HeatmapSeries, XAxis, YAxis } from 'react-vis'
import { scalePow, scaleBand } from 'd3-scale'
import { extent } from 'd3-array'

import Plot from '../../vizlib/Plot'
import Axis from '../../vizlib/Axis'

import { white100, white80 } from '../../colors'

import data from '../../data/damage-fate.csv'

const scale = scalePow()
  .exponent(0.5)
  .domain(extent(data.map(d => +d.count)))
  .range(['transparent', 'red'])

const Heatmap = ({}) => (
  <div>
    <Plot
      width={500}
      height={220}
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
            {data.map(d => (
              <rect
                x={xScale(d.damage)}
                y={yScale(d.fate)}
                width={xScale.bandwidth()}
                height={yScale.bandwidth()}
                style={{
                  fill: colorScale(+d.count),
                }}
              />
            ))}
          </React.Fragment>
        )
      }}
    </Plot>
    <XYPlot
      width={560}
      height={340}
      xType="ordinal"
      yType="ordinal"
      margin={{
        left: 200,
        right: 0,
        top: 0,
        bottom: 100,
      }}
      style={{
        marginTop: '2rem',
      }}
    >
      <XAxis
        title="Damage"
        tickSize={3}
        style={{
          title: {
            fill: white100,
            fontSize: '0.75rem',
          },
          ticks: {
            fill: white80,
          },
          line: {
            strokeWidth: 1,
          },
        }}
      />
      <YAxis
        title="Fate"
        tickSize={3}
        style={{
          title: {
            fill: white100,
            fontSize: '0.75rem',
          },
          ticks: {
            fill: white80,
          },
          line: {
            strokeWidth: 1,
          },
        }}
      />
      <HeatmapSeries
        data={data.map(d => ({
          x: d.damage,
          y: d.fate,
          count: +d.count,
        }))}
        getColor={d => scale(d.count)}
        colorType="literal"
      />
    </XYPlot>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Heatmap)
