import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

import FlexPlot from '../FlexPlot'
import Axis from '../Axis'
import GridLines from '../GridLines'
import Rects from '../Rects'
import Voronoi from '../Voronoi'
import Hint from '../Hint'

import { colors8 } from '../colors'
import { scaleBandInvert } from '../util'

const Bar = ({
  data = [],
  height = 400,
  width,
  margin = { left: 40, right: 15, top: 30, bottom: 30 },
  xTitle,
  yTitle,
  hint,
  setHint,
}) => (
  <FlexPlot height={height} width={width} margin={margin}>
    {({ chartHeight, chartWidth }) => {
      const xScale = scaleBand()
        .domain([...new Set(data.map(d => d[0]))])
        .range([0, chartWidth])
        .padding(0.2)

      const invertXScale = scaleBandInvert(xScale)

      const yScale = scaleLinear()
        .domain(extent(data.map(d => d[1])))
        .range([chartHeight, 0])

      return (
        <React.Fragment>
          <GridLines scale={yScale} orientation="horizontal" />
          <Rects
            data={data.map(d => [xScale(d[0]), yScale(d[1])])}
            width={xScale.bandwidth()}
            height={d => chartHeight - d[1]}
            style={{
              fill: colors8(0),
            }}
          />
          <Voronoi
            points={data.map(d => {
              return [xScale(d[0]) + xScale.bandwidth() / 2, 0]
            })}
            onMouseMove={(e, point) => {
              const x = invertXScale(point.x)
              const d = data.find(datum => datum[0] === x)
              setHint({
                x: xScale(x) + xScale.bandwidth() / 2,
                data: d[1],
              })
            }}
            onMouseLeave={() => {
              setHint(null)
            }}
          />
          <Axis orientation="left" scale={yScale} title={yTitle} />
          <Axis
            orientation="bottom"
            scale={xScale}
            transform={`translate(0, ${chartHeight})`}
            title={xTitle}
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
                {yScale.tickFormat()(hint.data)}
              </div>
            </Hint>
          )}
        </React.Fragment>
      )
    }}
  </FlexPlot>
)

import { hot } from 'react-hot-loader'
import { compose, withState } from 'recompose'

export default compose(
  hot(module),
  withState('hint', 'setHint'),
)(Bar)
