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

import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

import FlexPlot from '../../vizlib/FlexPlot'
import Axis from '../../vizlib/Axis'
import { colors8 } from '../../vizlib/colors'

import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force'
import { randomUniform } from 'd3-random'

const rand = randomUniform(30)

import dodge from './dodge'

const fak = Object.keys(dd)
  .map(d => ({ key: d, len: dd[d].length }))
  .sort((a, b) => b.len - a.len)

console.log('fafa', fak)

const Fok = ({}) => (
  <React.Fragment>
    {fak
      .slice(0, 15)
      .map(d => d.key)
      .map(manufacturer => (
        <PlaneType
          data={dd[manufacturer]}
          key={manufacturer}
          manufacturer={manufacturer}
        />
      ))}
  </React.Fragment>
)

const PlaneType = ({ data, manufacturer }) => (
  <React.Fragment>
    <div>{manufacturer}</div>
    <FlexPlot
      height={200}
      width={300}
      margin={{ left: 50, right: 50, top: 0, bottom: 20 }}
    >
      {({ chartHeight, chartWidth }) => {
        const xScale = scaleLinear()
          .domain(extent(data, d => d.count))
          .range([0, chartWidth])
          .nice()

        {
          /* const simul = forceSimulation(data, d => d.count)
          .force('x', forceX(d => xScale(d.count)).strength(1))
          .force('y', forceY(chartHeight / 2))
          .force('collide', forceCollide(4))
          .stop()

        for (let i = 0; i < 120; i++) simul.tick() */
        }

        {
          /* const circles = dodge(data, 4, xScale) */
        }

        const circles = data.map(d => ({
          x: xScale(d.count),
          y: rand(),
          type: d.type,
          group: d.group,
        }))

        return (
          <g>
            <Axis
              orientation="bottom"
              scale={xScale}
              transform={`translate(0, ${chartHeight})`}
            />
            <g>
              {circles.map(d => (
                <circle
                  cx={d.x}
                  // cy={chartHeight - 2 - d.y}
                  cy={chartHeight / 2 + d.y}
                  // cy={d.y}
                  r={5}
                  key={d.type}
                  style={{
                    fill: colors8(d.group),
                    stroke: 'black',
                    strokeWidth: 1,
                    opacity: 0.3,
                  }}
                >
                  <title>{d.type}</title>
                </circle>
              ))}
            </g>
          </g>
        )
      }}
    </FlexPlot>
  </React.Fragment>
)

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(hot(module))(Fok)
