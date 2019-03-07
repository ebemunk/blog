import React from 'react'
import ReactDOM from 'react-dom'
import { scaleLinear, scalePow } from 'd3-scale'
import { extent, bisectLeft, max } from 'd3-array'
import { groupBy, pipe, toPairs, filter } from 'ramda'
import { Popper } from 'react-popper'

import data from '../data/operator-by-year.csv'
const ops = pipe(
  groupBy(d => d.operator),
  toPairs,
  filter(([key, arr]) => arr.reduce((tot, v) => tot + +v.count, 0) > 30),
)(data)

import FlexPlot from '../vizlib/FlexPlot'
import Line from '../vizlib/Line'
import Axis from '../vizlib/Axis'
import GridLines from '../vizlib/GridLines'
import Voronoi from '../vizlib/Voronoi'
import Tooltip from '../vizlib/Tooltip'
import getVirtualReference from '../vizlib/virtualReference'
import { colors8 } from '../vizlib/colors'

const OperatorByYear = ({ hint, setHint, low, setLow }) => (
  <div>
    <div style={{ textAlign: 'center' }}>
      <label>
        <input type="checkbox" value={low} onChange={() => setLow(!low)} /> Show
        All
      </label>
    </div>
    <FlexPlot
      height={500}
      margin={{ left: 40, right: 15, top: 10, bottom: 30 }}
    >
      {({ chartHeight, chartWidth }) => {
        const theData = ops.filter(([key, arr]) => {
          return low ? max(arr, d => +d.count) < 30 : true
        })

        const xScale = scaleLinear()
          .domain(extent(data.map(d => d.year)))
          .range([0, chartWidth])

        // const yScale = scaleLinear()
        //   .domain(
        //     extent(
        //       theData.reduce((ar, v) => ar.concat(v[1].map(d => +d.count)), []),
        //     ),
        //   )
        //   .range([chartHeight, 0])

        const yScale = scalePow()
          .exponent(0.1)
          .domain(
            extent(
              theData.reduce((ar, v) => ar.concat(v[1].map(d => +d.count)), []),
            ),
          )
          .range([chartHeight, 0])

        const highlighted = theData.find(([key]) => key === hint.key)

        return (
          <React.Fragment>
            <GridLines scale={yScale} orientation="horizontal" />
            <Axis
              scale={xScale}
              orientation="bottom"
              transform={`translate(0, ${chartHeight})`}
              title="Year"
              tickFormat={d => d}
            />
            <Axis scale={yScale} orientation="left" title="Crashes" />
            {theData
              .filter(([key]) => key !== hint.key)
              .map(([key, arr]) => (
                <Line
                  key={key}
                  data={arr.map(d => [xScale(d.year), yScale(+d.count)])}
                  style={{
                    stroke: hint.key === key || !hint.key ? colors8(0) : 'gray',
                    strokeWidth: 2,
                    mixBlendMode: !hint.key ? 'color-dodge' : '',
                    opacity: !hint.key ? 1 : 0.2,
                  }}
                  title={key}
                />
              ))}
            {highlighted && (
              <Line
                key={highlighted[0]}
                data={highlighted[1].map(d => [
                  xScale(d.year),
                  yScale(+d.count),
                ])}
                style={{
                  stroke: colors8(0),
                  strokeWidth: 3,
                }}
                title={highlighted[0]}
              />
            )}

            {hint.key &&
              ReactDOM.createPortal(
                <Popper
                  placement="top"
                  referenceElement={getVirtualReference({
                    x: hint.mouse.x,
                    y: hint.mouse.y,
                  })}
                >
                  {({ ref, style, placement }) => (
                    <Tooltip ref={ref} style={style} placement={placement}>
                      Operator: <strong>{hint.key}</strong>
                    </Tooltip>
                  )}
                </Popper>,
                document.querySelector('body'),
              )}

            <Voronoi
              points={theData.reduce(
                (ac, [k, arr]) =>
                  ac.concat(
                    arr.map(d => {
                      const ar = [xScale(d.year), yScale(+d.count)]
                      ar.key = k
                      return ar
                    }),
                  ),
                [],
              )}
              onMouseMove={(e, point, polygon) => {
                setHint({
                  key: polygon.data.key,
                  mouse: { x: e.clientX, y: e.clientY },
                })
              }}
              onMouseLeave={() => {
                setHint({})
              }}
            />
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </div>
)

import { compose, withState } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  withState('hint', 'setHint', {}),
  withState('low', 'setLow', true),
)(OperatorByYear)
