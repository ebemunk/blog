import React from 'react'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { line } from 'd3-shape'

import FlexPlot from '../../vizlib/FlexPlot'
import Path from '../../vizlib/Path'
import Axis from '../../vizlib/Axis'
import GridLines from '../../vizlib/GridLines'
import Legend from '../../vizlib/Legend'
import { colors8 } from '../../vizlib/colors'

import yearsNMRaw from '../../data/years-nm.csv'
import yearsRaw from '../../data/years.csv'

import Highlight from './Highlight'
import PointOut from './PointOut'
import Interaction from './Interaction'

const Chart = ({ stage }) => (
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
      margin={{ left: 40, right: 15, top: 15, bottom: 30 }}
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
          <>
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

            <Path
              generator={line()}
              data={data.map(d => [xScale(d.year), yScale(+d.total)])}
              style={{
                stroke: colors8(0),
                strokeWidth: 3,
                fill: 'none',
              }}
            />
            <Path
              generator={line()}
              data={data.map(d => [xScale(d.year), yScale(+d.crashes)])}
              style={{
                stroke: colors8(1),
                strokeWidth: 3,
                fill: 'none',
              }}
            />
            <Path
              generator={line()}
              data={data.map(d => [xScale(d.year), yScale(+d.ground)])}
              style={{
                stroke: colors8(2),
                strokeWidth: 3,
                fill: 'none',
              }}
            />

            <Path
              generator={line()}
              data={yearsNMRaw.map(d => [xScale(d.year), yScale(+d.total)])}
              style={{
                stroke: colors8(0),
                strokeWidth: 1,
                strokeDasharray: '3 3',
                fill: 'none',
              }}
            />
            <Path
              generator={line()}
              data={yearsNMRaw.map(d => [xScale(d.year), yScale(+d.crashes)])}
              style={{
                stroke: colors8(1),
                strokeWidth: 1,
                strokeDasharray: '3 3',
                fill: 'none',
              }}
            />
            <Path
              generator={line()}
              data={yearsNMRaw.map(d => [xScale(d.year), yScale(+d.ground)])}
              style={{
                stroke: colors8(2),
                strokeWidth: 1,
                strokeDasharray: '3 3',
                fill: 'none',
              }}
            />

            <defs>
              <marker
                id="end"
                viewBox="0 -5 10 10"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
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
              x={xScale(1972)}
              y={yScale(data.find(d => +d.year === 1972).total)}
              dx={-20}
              dy={-32}
              color={colors8(0)}
              title="1972: Worst year in aviation history"
              show={stage >= 1}
              textAnchor="end"
            />
            <PointOut
              x={xScale(2001)}
              y={yScale(data.find(d => +d.year === 2001).ground)}
              dx={-100}
              dy={-15}
              color={colors8(2)}
              title="2001: 9/11 Attacks"
              show={stage >= 2}
            />

            <Highlight
              start={xScale(1939)}
              end={xScale(1946)}
              chartHeight={chartHeight}
              title="WW2"
              show={stage >= 4}
            />
            <Highlight
              start={xScale(1955)}
              end={xScale(1975)}
              chartHeight={chartHeight}
              title="Vietnam War"
              show={stage >= 5}
            />

            <Interaction xScale={xScale} data={data} />
          </>
        )
      }}
    </FlexPlot>
  </div>
)

export default React.memo(Chart)
