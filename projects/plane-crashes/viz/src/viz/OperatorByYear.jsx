import React from 'react'
import { scaleLinear, scalePow } from 'd3-scale'
import { extent, bisectLeft } from 'd3-array'
import { format } from 'd3-format'
import { groupBy, pipe, toPairs, filter, range } from 'ramda'

import data from '../data/operator-by-year.csv'
const ops = pipe(
  groupBy(d => d.operator),
  toPairs,
  filter(([key, arr]) => arr.reduce((tot, v) => tot + +v.count, 0) > 30),
)(data)

console.log('tat', ops)

import FlexPlot from '../vizlib/FlexPlot'
import Line from '../vizlib/Line'
import Axis from '../vizlib/Axis'
import GridLines from '../vizlib/GridLines'
import Voronoi from '../vizlib/Voronoi'
import { colors8 } from '../vizlib/colors'

const OperatorByYear = ({ highlight, setHl }) => (
  <div>
    <FlexPlot
      height={500}
      margin={{ left: 40, right: 15, top: 30, bottom: 30 }}
    >
      {({ chartHeight, chartWidth }) => {
        const xScale = scaleLinear()
          .domain(extent(data.map(d => d.year)))
          .range([0, chartWidth])

        const yScale = scaleLinear()
          .domain(
            extent(
              ops.reduce((ar, v) => ar.concat(v[1].map(d => +d.count)), []),
            ),
          )
          .domain([0, 75])
          .range([chartHeight, 0])
          .nice()

        console.log('renderin')

        return (
          <React.Fragment>
            <Axis
              scale={xScale}
              orientation="bottom"
              transform={`translate(0, ${chartHeight})`}
            />
            <Axis scale={yScale} orientation="left" />
            {ops.map(([key, arr]) => (
              <Line
                key={key}
                data={arr.map(d => [xScale(d.year), yScale(+d.count)])}
                style={{
                  stroke:
                    highlight === key || highlight === null
                      ? colors8(0)
                      : 'gray',
                  strokeWidth: 1.5,
                  // opacity:
                  //   highlight === key || highlight === null ? '1' : '0.2',
                  mixBlendMode: highlight === null ? 'multiply' : '',
                }}
                title={key}
              />
            ))}

            <Voronoi
              points={ops.reduce(
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
                // console.log('move', point, polygon)
                const s = polygon.data.key
                // const dates = range(...xScale.domain())
                // const ym = yScale.invert(point.y)
                // const xm = xScale.invert(point.x)
                // const i1 = bisectLeft(dates, xm, 1)
                // const i0 = i1 - 1
                // const i = xm - dates[i0] > dates[i1] - xm ? i1 : i0
                // const s = ops.reduce((a, b) => {
                //   if (a[1].length <= i) {
                //     return b
                //   }
                //   if (b[1].length <= i) {
                //     return a
                //   }
                //   const da = Math.abs([a[1][i].count - ym])
                //   const db = Math.abs([b[1][i].count - ym])
                //   // console.log('dif', i, da, db, a[1][i], b[1][i], ym)
                //   return da < db ? a : b
                // })
                // console.log('seroes', s)
                setHl(s)
              }}
              onMouseLeave={() => {
                setHl(null)
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
  withState('highlight', 'setHl', ''),
)(OperatorByYear)
