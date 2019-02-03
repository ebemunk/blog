import React from 'react'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { format } from 'd3-format'

import FlexPlot from '../../vizlib/FlexPlot'
import Line from '../../vizlib/Line'
import Axis from '../../vizlib/Axis'
import GridLines from '../../vizlib/GridLines'
import Legend from '../../vizlib/Legend'
import Voronoi from '../../vizlib/Voronoi'
import Hint from '../../vizlib/Hint'
import { colors8 } from '../../vizlib/colors'

import yearsNMRaw from '../../data/years-nm.csv'
import yearsRaw from '../../data/years.csv'

import Highlight from './Highlight'
import PointOut from './PointOut'

const formatCount = format(',')

const Chart = ({ stage, hint, setHint }) => (
  <div
    style={{
      position: 'relative',
    }}
  >
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
      height={500}
      margin={{ left: 40, right: 15, top: 30, bottom: 30 }}
    >
      {({ chartHeight, chartWidth }) => {
        const data = stage < 3 ? yearsNMRaw : yearsRaw

        const xScale = scaleLinear()
          .domain(extent(data.map(d => d.year)))
          .range([0, chartWidth])

        const yScale = scaleLinear()
          .domain([0, 3200])
          .range([chartHeight, 0])
          .nice()

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

            <Highlight
              start={xScale(1939)}
              end={xScale(1945)}
              chartHeight={chartHeight}
              title="World War 2"
              show={stage >= 4}
            />

            <Highlight
              start={xScale(1955)}
              end={xScale(1975)}
              chartHeight={chartHeight}
              title="Vietnam War"
              show={stage >= 5}
            />

            <defs>
              <marker
                id="end"
                viewBox="0 -5 10 10"
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

            <PointOut
              x={xScale(1985)}
              y={yScale(data.find(d => +d.year === 1985).total)}
              dx={20}
              dy={-32}
              color={colors8(0)}
              title="1985: Worst year in aviation history"
              show={stage >= 1}
            />

            <PointOut
              x={xScale(2001)}
              y={yScale(data.find(d => +d.year === 2001).ground)}
              dx={20}
              dy={30}
              color={colors8(2)}
              title="2001: 9/11 Attacks"
              show={stage >= 2}
            />

            <Voronoi
              points={data.map(d => [xScale(d.year), 0])}
              onMouseMove={(e, point) => {
                const x = Math.round(xScale.invert(point.x))
                const d = data.find(d => +d.year === x)
                setHint({
                  x: xScale(x),
                  data: d,
                })
              }}
              onMouseLeave={() => {
                setHint(null)
              }}
            />

            {hint && (
              <Hint x1={hint.x} y1={0} x2={hint.x} y2={chartHeight}>
                <div
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '0.5rem',
                    margin: '0 0.5rem',
                    fontSize: '0.75rem',
                    pointerEvents: 'none',
                  }}
                >
                  Year: <strong>{hint.data.year}</strong>
                  <br />
                  Crashes: <strong>{formatCount(hint.data.crashes)}</strong>
                  <br />
                  Fatalities: <strong>{formatCount(hint.data.total)}</strong>
                  <br />
                  Ground Fatalities:{' '}
                  <strong>{formatCount(hint.data.ground)}</strong>
                </div>
              </Hint>
            )}
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </div>
)

import { compose, withState } from 'recompose'

export default compose(withState('hint', 'setHint', null))(Chart)