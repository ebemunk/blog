import React from 'react'
import { XYPlot, HeatmapSeries, XAxis, YAxis } from 'react-vis'
import { scalePow } from 'd3-scale'
import { extent } from 'd3-array'

import { white100, white80 } from '../../colors'

import data from '../../data/damage-fate.csv'

const scale = scalePow()
  .exponent(0.5)
  .domain(extent(data.map(d => +d.count)))
  .range(['transparent', 'red'])

const Heatmap = ({}) => (
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
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Heatmap)
