import React from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import { extent } from 'd3-array'

import FlexPlot from '../vizlib/FlexPlot'
import Line from '../vizlib/Line'
import Rects from '../vizlib/Rects'
import Voronoi from '../vizlib/Voronoi'
import Axis from '../vizlib/Axis'
import Hint from '../vizlib/Hint'
import { scaleBandInvert } from '../vizlib/util'
import { colors8 } from '../vizlib/colors'

import rawData from '../data/phase.csv'
const data = rawData
  .map(d => [d.phase, +d.count, +d.avg])
  .sort((a, b) => a[2] - b[2])
// .sort((a, b) => a[1] - b[1])

const Phase = ({ hint, setHint }) => (
  <div>
    <FlexPlot
      height={400}
      margin={{
        top: 10,
        left: 35,
        right: 35,
        bottom: 25,
      }}
    >
      {({ chartHeight, chartWidth }) => {
        const xScale = scaleBand()
          .domain([...new Set(data.map(d => d[0]))])
          .range([0, chartWidth])
          .padding(0.2)

        const invertXScale = scaleBandInvert(xScale)

        const yScale = scaleLinear()
          .domain(extent(data.map(d => d[1])))
          .range([chartHeight, 0])

        const y2Scale = scaleLinear()
          .domain(extent(data.map(d => d[2])))
          .range([chartHeight, 0])

        return (
          <React.Fragment>
            <Rects
              data={data.map(d => [xScale(d[0]), yScale(d[1])])}
              width={xScale.bandwidth()}
              height={d => chartHeight - d[1]}
              style={{
                fill: colors8(0),
              }}
            />
            <Line
              data={data.map(d => [
                xScale(d[0]) + xScale.bandwidth() / 2,
                y2Scale(d[2]),
              ])}
              style={{
                stroke: colors8(7),
                strokeWidth: 1,
              }}
            />
            {data.map(d => (
              <circle
                key={d}
                r={3}
                cx={xScale(d[0]) + xScale.bandwidth() / 2}
                cy={y2Scale(d[2])}
                style={{
                  fill: colors8(7),
                }}
              />
            ))}
            <Voronoi
              points={data.map(d => {
                return [xScale(d[0]) + xScale.bandwidth() / 2, 0]
              })}
              onMouseMove={(e, point) => {
                const x = invertXScale(point.x)
                const d = data.find(datum => datum[0] === x)
                setHint({
                  x: xScale(x) + xScale.bandwidth() / 2,
                  data: d,
                })
              }}
              onMouseLeave={() => {
                setHint(null)
              }}
            />
            <Axis orientation="left" scale={yScale} title="Crashes" />
            <Axis
              orientation="right"
              scale={y2Scale}
              transform={`translate(${chartWidth}, 0)`}
              title="Avg. Fatalities"
            />
            <Axis
              orientation="bottom"
              scale={xScale}
              transform={`translate(0, ${chartHeight})`}
              title="Phase"
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
                  Phase: <strong>{hint.data[0]}</strong>
                  <br />
                  Crashes: <strong>{hint.data[1]}</strong>
                  <br />
                  Avg. Fatalities: <strong>{hint.data[2]}</strong>
                </div>
              </Hint>
            )}
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
  withState('hint', 'setHint'),
)(Phase)
