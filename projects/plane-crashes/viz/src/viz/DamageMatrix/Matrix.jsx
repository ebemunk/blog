import React from 'react'
import { scalePow, scaleBand } from 'd3-scale'
import { extent, ticks } from 'd3-array'

import Plot from '../../vizlib/Plot'
import Axis from '../../vizlib/Axis'
import Rects from '../../vizlib/Rects'
import Legend from '../../vizlib/Legend'

import data from '../../data/damage-fate.csv'

const dataExtent = extent(data.map(d => +d.count))
const colorScale = scalePow()
  .exponent(0.5)
  .domain(dataExtent)
  .range(['transparent', 'red'])

const Matrix = ({}) => (
  <>
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
    >
      <div style={{ marginBottom: '0.5rem', width: 650 }}>
        <strong>What's the most common fate for a plane after a crash?</strong>
        <div style={{ fontSize: '0.8rem' }}>
          Number of Damage-Fate occurences for crashes
        </div>
      </div>
    </div>
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

          return (
            <>
              <Axis
                orientation="bottom"
                scale={xScale}
                transform={`translate(0, ${chartHeight})`}
                title="Damage"
              />
              <Axis orientation="left" scale={yScale} title="Fate" />
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
            </>
          )
        }}
      </Plot>
      <Legend
        data={ticks(dataExtent[0], dataExtent[1], 5).map(d => ({
          title: d,
          color: colorScale(d),
        }))}
        style={{
          background: 'transparent',
          border: 'none',
        }}
      />
    </div>
  </>
)

import { hot } from 'react-hot-loader'

export default hot(module)(Matrix)
