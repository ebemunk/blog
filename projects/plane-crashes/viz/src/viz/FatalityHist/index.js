import React from 'react'
import { histogram, extent, max } from 'd3-array'
import { scaleLinear, scalePow } from 'd3-scale'
import { format } from 'd3-format'

import { colors8 } from '../../colors'

import FlexPlot from '../../vizlib/FlexPlot'
import GridLines from '../../vizlib/GridLines'
import Axis from '../../vizlib/Axis'
import Rects from '../../vizlib/Rects'
import Voronoi from '../../vizlib/Voronoi'
import Hint from '../../vizlib/Hint'
import Tooltip from '../../vizlib/Tooltip'

import PointOut from '../Years/PointOut'

import data from '../../data/fatality-histogram.csv'

const hist = histogram().thresholds(26)
const bins = hist(data.map(d => +d.passenger_fat + +d.crew_fat))

const lolz = data.reduce(
  (acc, d) => {
    const tot = +d.passenger_fat + +d.crew_fat
    if (tot > 0) {
      acc.onep++
    } else {
      acc.none++
    }
    return acc
  },
  {
    none: 0,
    onep: 0,
  },
)

const totla = lolz.none + lolz.onep

const FatalityHist = ({ hint, setHint }) => (
  <div>
    <FlexPlot height={300} margin={{ bottom: 20, left: 50, top: 5, right: 20 }}>
      {({ chartHeight, chartWidth }) => {
        const xScale = scaleLinear()
          .domain(extent(data.map(d => +d.passenger_fat + +d.crew_fat)))
          .range([0, chartWidth])

        const yScale = scalePow()
          .exponent(0.3)
          .domain([0, max(bins, d => d.length)])
          .range([chartHeight, 0])

        return (
          <React.Fragment>
            <GridLines
              scale={xScale}
              orientation="vertical"
              style={{ stroke: 'rgba(255,255,255,0.3)' }}
              ticks={20}
            />
            <GridLines
              scale={yScale}
              orientation="horizontal"
              style={{ stroke: 'rgba(255,255,255,0.3)' }}
              ticks={5}
            />
            <Rects
              data={bins}
              x={d => xScale(d.x0)}
              y={d => yScale(d.length)}
              width={d => xScale(d.x1) - xScale(d.x0)}
              height={d => chartHeight - yScale(d.length)}
              style={{
                fill: colors8(0),
              }}
            />
            <Voronoi
              points={bins.map(bin => {
                return [(xScale(bin.x0) + xScale(bin.x1)) / 2, 0]
              })}
              onMouseMove={(e, point) => {
                const x = xScale.invert(point.x)
                const d = bins.find(bin => x >= bin.x0 && x < bin.x1)
                setHint({
                  x: (xScale(d.x0) + xScale(d.x1)) / 2,
                  d,
                })
              }}
              onMouseLeave={() => {
                setHint(null)
              }}
            />
            {hint && (
              <Hint x1={hint.x} y1={0} x2={hint.x} y2={chartHeight}>
                <Tooltip>
                  Fatalities:{' '}
                  <strong>
                    {hint.d.x0}-{hint.d.x1}
                  </strong>
                  <br />
                  Frequency: <strong>{format(',')(hint.d.length)}</strong>
                </Tooltip>
              </Hint>
            )}
            <Axis
              orientation="left"
              scale={yScale}
              tickArguments={[5]}
              title="Frequency"
            />
            <Axis
              orientation="bottom"
              scale={xScale}
              transform={`translate(0, ${chartHeight})`}
              tickArguments={[20]}
              title="Fatalities"
            />

            <PointOut
              x={xScale(510)}
              y={yScale(1)}
              dx={-90}
              dy={-32}
              color={colors8(0)}
              title="Worst crash in history"
              show
            />
          </React.Fragment>
        )
      }}
    </FlexPlot>

    <div
      style={{
        display: 'flex',
        height: '80px',
      }}
    >
      <div
        style={{
          background: 'green',
          width: `${(lolz.none / totla) * 100}%`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div>No fatalities</div>
        <strong>{format('.4p')(lolz.none / totla)}</strong>
      </div>
      <div
        style={{
          background: 'red',
          width: `${(lolz.onep / totla) * 100}%`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <div>At least 1 fatality</div>
        <strong>{format('.4p')(lolz.onep / totla)}</strong>
      </div>
    </div>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose, withState } from 'recompose'

export default compose(
  hot(module),
  withState('hint', 'setHint'),
)(FatalityHist)
