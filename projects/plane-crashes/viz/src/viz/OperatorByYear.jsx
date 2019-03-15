import React from 'react'
import ReactDOM from 'react-dom'
import { Popper } from 'react-popper'
import { scaleLinear, scalePow } from 'd3-scale'
import { curveMonotoneX } from 'd3-shape'
import { line } from 'd3-shape'

import data from '../data/operator-by-year.json'
const allData = [...data.military, ...data.nonmilitary]

import FlexPlot from '../vizlib/FlexPlot'
import Path from '../vizlib/Path'
import Axis from '../vizlib/Axis'
import GridLines from '../vizlib/GridLines'
import Voronoi from '../vizlib/Voronoi'
import Legend from '../vizlib/Legend'
import Tooltip from '../vizlib/Tooltip'
import getVirtualReference from '../vizlib/virtualReference'
import { colors8 } from '../vizlib/colors'

const curve = curveMonotoneX

const Perfz = compose(withState('hl', 'setHl', {}))(
  ({ hl, setHl, xScale, yScale, hint }) => {
    const hlIndex = hint ? allData.findIndex(([key]) => key === hl.key) : false
    const hlIsMil = hint ? hlIndex < 20 : false
    const highlighted = hint ? allData[hlIndex] : false

    return (
      <React.Fragment>
        {hint && highlighted && (
          <Path
            key={highlighted[0]}
            generator={line().curve(curve)}
            data={highlighted[1].map(d => [xScale(d.year), yScale(+d.count)])}
            style={{
              stroke: hlIsMil ? 'red' : colors8(0),
              strokeWidth: 3,
              fill: 'none',
            }}
          />
        )}

        {hint &&
          hl.key &&
          ReactDOM.createPortal(
            <Popper
              placement="top"
              referenceElement={getVirtualReference({
                x: hl.mouse.x,
                y: hl.mouse.y,
              })}
            >
              {({ ref, style, placement }) => (
                <Tooltip ref={ref} style={style} placement={placement}>
                  Operator: <strong>{hl.key}</strong>
                </Tooltip>
              )}
            </Popper>,
            document.querySelector('body'),
          )}

        <Voronoi
          points={allData.reduce(
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
            setHl({
              key: polygon.data.key,
              mouse: { x: e.clientX, y: e.clientY },
            })
          }}
        />
      </React.Fragment>
    )
  },
)

const OperatorByYear = ({ hint, setHint }) => (
  <div style={{ position: 'relative' }}>
    <Legend
      style={{
        position: 'absolute',
        right: '1rem',
        top: '1rem',
      }}
      data={[
        { color: 'red', title: 'Military' },
        { color: colors8(0), title: 'Non-Military' },
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

            <g>
              {data.military.map(([key, arr]) => (
                <Path
                  key={key}
                  generator={line().curve(curve)}
                  data={arr.map(d => [xScale(d.year), yScale(+d.count)])}
                  style={{
                    stroke: !hint ? 'red' : 'gray',
                    strokeWidth: 2,
                    mixBlendMode: !hint ? 'screen' : '',
                    opacity: !hint ? 1 : 0.2,
                    fill: 'none',
                  }}
                />
              ))}
            </g>

            <g>
              {data.nonmilitary.map(([key, arr]) => (
                <Path
                  key={key}
                  generator={line().curve(curve)}
                  data={arr.map(d => [xScale(d.year), yScale(+d.count)])}
                  style={{
                    stroke: !hint ? colors8(0) : 'gray',
                    strokeWidth: 2,
                    mixBlendMode: !hint ? 'screen' : '',
                    opacity: !hint ? 1 : 0.2,
                    fill: 'none',
                  }}
                />
              ))}
            </g>

            <Perfz xScale={xScale} yScale={yScale} hint={hint} />
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
  withState('hint', 'setHint', false),
)(OperatorByYear)
