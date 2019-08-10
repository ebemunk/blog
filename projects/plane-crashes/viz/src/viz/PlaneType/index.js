import React from 'react'
import { groupBy, pipe, map, filter, values, reduce, max } from 'ramda'

import data from '../../data/plane-types.csv'

const dd = pipe(
  map(d => ({ ...d, count: +d.count })),
  groupBy(d => d.type.split(' ')[0]),
  map(arr => {
    arr.total = arr.reduce((tot, v) => tot + v.count, 0)
    return arr
  }),
)(data)

console.log('aaa', dd, Object.keys(dd).length)

const maxx = pipe(
  map(map(d => d.count)),
  map(reduce(max, -Infinity)),
  values,
  reduce(max, -Infinity),
)(dd)

console.log('maxx', maxx)

import { scaleLinear, scaleBand, scalePow } from 'd3-scale'
import { extent } from 'd3-array'
import { randomUniform } from 'd3-random'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import GridLines from '../../vizlib/GridLines'
import { colors8 } from '../../vizlib/colors'

const fak = Object.keys(dd)
  .map(d => ({ key: d, len: dd[d].length }))
  .filter(d => d.len > 5)
  .sort((a, b) => b.len - a.len)

console.log('fafa', fak)

const Fok = ({}) => (
  <React.Fragment>
    <FlexPlot
      height={400}
      margin={{ left: 50, right: 50, top: 10, bottom: 20 }}
    >
      {({ chartHeight, chartWidth }) => {
        console.log('AFAFAAFA')

        const x = scaleBand()
          .domain(fak.map(d => d.key))
          .range([0, chartWidth])
          .padding(0.1)

        const y = scalePow()
          .exponent(0.5)
          .domain([1, maxx])
          .range([chartHeight, 0])

        // const rand = randomUniform(4)
        const rand = randomUniform(x.bandwidth() / 2 + 1)

        return (
          <React.Fragment>
            <Axis orientation="left" scale={y} />
            {fak
              .map(d => d.key)
              .map(manufacturer => (
                <g
                  transform={`translate(${x(manufacturer) +
                    x.bandwidth() / 2}, 0)`}
                  key={manufacturer}
                >
                  {dd[manufacturer].map(d => (
                    <circle
                      key={d.type}
                      cx={rand()}
                      cy={y(d.count)}
                      r={3}
                      style={{
                        fill: 'red',
                        stroke: 'black',
                        strokeWidth: 1,
                        opacity: 0.3,
                      }}
                    />
                  ))}
                </g>
              ))}
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </React.Fragment>
)

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(hot(module))(Fok)
