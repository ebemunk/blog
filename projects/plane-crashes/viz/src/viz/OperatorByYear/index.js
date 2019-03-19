import React, { useState } from 'react'
import { scaleLinear, scalePow } from 'd3-scale'
import { curveMonotoneX } from 'd3-shape'
import { line as d3Line } from 'd3-shape'

import data from '../../data/operator-by-year.json'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import GridLines from '../../vizlib/GridLines'
import Legend from '../../vizlib/Legend'
import ChartTitle from '../../vizlib/ChartTitle'
import { blueRed } from '../../vizlib/colors'

import Interaction from './Interaction'

const color = blueRed()

const OperatorByYear = () => {
  const [hint, setHint] = useState({})

  return (
    <>
      <ChartTitle
        title="Crashes by operator through the century"
        subtitle="Colored by military and non-military intent. Notice the power scale on the y axis. Mouseover to highlight."
        style={{
          marginLeft: '0.5rem',
          marginBottom: '0.5rem',
        }}
      />
      <div style={{ position: 'relative' }}>
        <Legend
          style={{
            position: 'absolute',
            right: '1rem',
            top: '1rem',
          }}
          data={[
            { color: color(1), title: 'Military' },
            { color: color(0), title: 'Non-Military' },
          ]}
        />
        <FlexPlot
          height={500}
          margin={{ left: 40, right: 15, top: 10, bottom: 30 }}
          onMouseEnter={() => setHint(true)}
          onMouseLeave={() => setHint(false)}
        >
          {({ chartHeight, chartWidth }) => {
            const xScale = scaleLinear()
              .domain([1919, 2019])
              .range([0, chartWidth])

            const yScale = scalePow()
              .exponent(0.1)
              .domain([1, 1100])
              .range([chartHeight, 0])

            const line = d3Line().curve(curveMonotoneX)

            return (
              <>
                <GridLines scale={yScale} orientation="horizontal" />
                <Axis
                  scale={xScale}
                  orientation="bottom"
                  transform={`translate(0, ${chartHeight})`}
                  title="Year"
                  tickFormat={d => d}
                />
                <Axis scale={yScale} orientation="left" title="Crashes" />

                <g>
                  {data.military.map(([key, arr]) => (
                    <path
                      key={key}
                      d={line(arr.map(d => [xScale(d.year), yScale(+d.count)]))}
                      style={{
                        stroke: !hint ? color(1) : 'gray',
                        strokeWidth: 2,
                        mixBlendMode: !hint ? 'lighten' : '',
                        opacity: !hint ? 1 : 0.2,
                        fill: 'none',
                      }}
                    />
                  ))}
                </g>

                <g>
                  {data.nonmilitary.map(([key, arr]) => (
                    <path
                      key={key}
                      d={line(arr.map(d => [xScale(d.year), yScale(+d.count)]))}
                      style={{
                        stroke: !hint ? color(0) : 'gray',
                        strokeWidth: 2,
                        mixBlendMode: !hint ? 'lighten' : '',
                        opacity: !hint ? 1 : 0.2,
                        fill: 'none',
                      }}
                    />
                  ))}
                </g>

                <Interaction xScale={xScale} yScale={yScale} hint={hint} />
              </>
            )
          }}
        </FlexPlot>
      </div>
    </>
  )
}

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  React.memo,
)(OperatorByYear)
