import React from 'react'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

import FlexPlot from '../../vizlib/FlexPlot'
import Line from '../../vizlib/Line'
import Axis from '../../vizlib/Axis'
import GridLines from '../../vizlib/GridLines'
import Legend from '../../vizlib/Legend'
import { colors8 } from '../../vizlib/colors'

import yearsNMRaw from '../../data/years-nm.csv'
import yearsRaw from '../../data/years.csv'

import Highlight from './Highlight'

const Arrow = ({ source, target, ...rest }) => {
  const dx = target.x - source.x
  const dy = target.y - source.y
  const r = Math.sqrt(dx * dx + dy * dy)

  return (
    <path
      d={`M${source.x},${source.y}A${r},${r} 0 0,1 ${target.x},${target.y}`}
      style={{
        fill: 'none',
        stroke: 'white',
        strokeWidth: 1,
        strokeDasharray: '3 3',
      }}
      {...rest}
    />
  )
}

const Years = ({ linedata, setLinedata }) => (
  <div
    style={{
      position: 'relative',
    }}
  >
    <button onClick={() => setLinedata((linedata + 1) % 2)}>
      set {linedata}
    </button>
    <Legend
      style={{
        position: 'absolute',
        right: '1rem',
        top: '1rem',
      }}
      data={[
        { color: colors8(0), title: 'Fatalities' },
        { color: colors8(1), title: 'Crashes' },
        { color: colors8(2), title: 'Ground Fatalities' },
      ]}
    />
    <FlexPlot
      height={400}
      margin={{ left: 40, right: 15, top: 30, bottom: 30 }}
    >
      {({ chartHeight, chartWidth }) => {
        const data = linedata < 1 ? yearsNMRaw : yearsRaw

        const xScale = scaleLinear()
          .domain(extent(data.map(d => d.year)))
          .range([0, chartWidth])

        const yScale = scaleLinear()
          .domain([0, 3200])
          .range([chartHeight, 0])

        return (
          <React.Fragment>
            <Axis
              scale={xScale}
              orientation="bottom"
              transform={`translate(0, ${chartHeight})`}
              tickArguments={[20]}
              tickFormat={d => d}
            />
            <Axis scale={yScale} orientation="left" tickArguments={[5]} />
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
              data={data.map(d => [xScale(d.year), yScale(+d.total)])}
              style={{
                stroke: colors8(0),
                strokeWidth: 3,
              }}
            />
            <Line
              data={data.map(d => [xScale(d.year), yScale(+d.crashes)])}
              style={{
                stroke: colors8(1),
                strokeWidth: 3,
              }}
            />
            <Line
              data={data.map(d => [xScale(d.year), yScale(+d.ground)])}
              style={{
                stroke: colors8(2),
                strokeWidth: 3,
              }}
            />

            <Line
              data={yearsNMRaw.map(d => [xScale(d.year), yScale(+d.total)])}
              style={{
                stroke: colors8(0),
                strokeWidth: 1,
                strokeDasharray: '3 3',
              }}
            />
            <Line
              data={yearsNMRaw.map(d => [xScale(d.year), yScale(+d.crashes)])}
              style={{
                stroke: colors8(1),
                strokeWidth: 1,
                strokeDasharray: '3 3',
              }}
            />
            <Line
              data={yearsNMRaw.map(d => [xScale(d.year), yScale(+d.ground)])}
              style={{
                stroke: colors8(2),
                strokeWidth: 1,
                strokeDasharray: '3 3',
              }}
            />

            {linedata == 1 && (
              <Highlight
                start={xScale(1939)}
                end={xScale(1945)}
                chartHeight={chartHeight}
                title="World War 2"
              />
            )}

            {linedata == 1 && (
              <Highlight
                start={xScale(1955)}
                end={xScale(1975)}
                chartHeight={chartHeight}
                title="Vietnam War"
              />
            )}

            <defs>
              <marker
                id="end"
                viewBox="0 -5 10 10"
                // refX="15"
                // refY="-1.5"
                markerWidth="6"
                markerHeight="6"
                orient="auto"
              >
                <path
                  d="M0,-5L10,0L0,5"
                  style={{
                    fill: 'white',
                  }}
                />
              </marker>
            </defs>

            <g>
              <circle
                r={3}
                cx={xScale(1985)}
                cy={yScale(data.find(d => +d.year === 1985).total)}
                style={{ fill: 'red' }}
              />
              <Arrow
                source={{
                  x: xScale(1985),
                  y: yScale(data.find(d => +d.year === 1985).total),
                }}
                target={{
                  x: xScale(1985) + 16,
                  y: yScale(yearsRaw.find(d => +d.year === 1985).total) - 16,
                }}
                markerEnd="url(#end)"
              />
              <text
                x={xScale(1985)}
                y={yScale(yearsRaw.find(d => +d.year === 1985).total)}
                dx={'1.5rem'}
                dy={'-1rem'}
                alignmentBaseline="middle"
                style={{ fill: 'white', fontSize: '0.75rem' }}
              >
                Worst year in aviation history
              </text>
              <path />
            </g>

            <g>
              <circle
                r={3}
                cx={xScale(2001)}
                cy={yScale(data.find(d => +d.year === 2001).ground)}
                style={{ fill: 'red' }}
              />
              <text
                x={xScale(2001)}
                y={yScale(data.find(d => +d.year === 2001).ground)}
                dx={'1rem'}
                dy={'1rem'}
                style={{ fill: 'white', fontSize: '0.75rem' }}
              >
                9/11 attacks on September 11, 2001
              </text>
              <path />
            </g>
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
  withState('linedata', 'setLinedata', 0),
)(Years)
