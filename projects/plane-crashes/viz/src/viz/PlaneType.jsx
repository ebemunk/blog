import React from 'react'
import { groupBy, pipe, map, filter, values, reduce, max } from 'ramda'

import data from '../data/plane-types.csv'

console.log('fa', data.length)

const dd = pipe(
  map(d => ({ ...d, count: +d.count })),
  groupBy(d => d.type.split(' ')[0]),
  map(arr => {
    arr.total = arr.reduce((tot, v) => tot + v.count, 0)
    return arr
  }),
  // filter(d => d.total > 150),
)(data)

console.log('aaa', dd, Object.keys(dd).length)

const maxx = pipe(
  map(map(d => d.count)),
  map(reduce(max, -Infinity)),
  values,
  reduce(max, -Infinity),
)(dd)

console.log('maxx', maxx)

import { scaleLinear, scaleLog } from 'd3-scale'
import { extent } from 'd3-array'

import FlexPlot from '../vizlib/FlexPlot'
import Axis from '../vizlib/Axis'
import { colors8 } from '../vizlib/colors'

import { forceSimulation, forceX, forceY, forceCollide } from 'd3-force'

const dodge = (data, radius, x) => {
  const radius2 = radius ** 2
  const circles = data
    .map(d => ({ x: x(d.x), data: d }))
    .sort((a, b) => a.x - b.x)
  const epsilon = 1e-3
  let head = null,
    tail = null

  // Returns true if circle ⟨x,y⟩ intersects with any circle in the queue.
  function intersects(x, y) {
    let a = head
    while (a) {
      if (radius2 - epsilon > (a.x - x) ** 2 + (a.y - y) ** 2) {
        return true
      }
      a = a.next
    }
    return false
  }

  // Place each circle sequentially.
  for (const b of circles) {
    // Remove circles from the queue that can’t intersect the new circle b.
    while (head && head.x < b.x - radius2) head = head.next

    // Choose the minimum non-intersecting tangent.
    if (intersects(b.x, (b.y = 0))) {
      let a = head
      b.y = Infinity
      do {
        // let y = a.y + Math.sqrt(radius2 - (a.x - b.x) ** 2)
        // if (y < b.y && !intersects(b.x, y)) b.y = y
        // a = a.next
        let y1 = a.y + Math.sqrt(radius2 - (a.x - b.x) ** 2)
        let y2 = a.y - Math.sqrt(radius2 - (a.x - b.x) ** 2)
        if (Math.abs(y1) < Math.abs(b.y) && !intersects(b.x, y1)) b.y = y1
        if (Math.abs(y2) < Math.abs(b.y) && !intersects(b.x, y2)) b.y = y2
        a = a.next
      } while (a)
    }

    // Add b to the queue.
    b.next = null
    if (head === null) head = tail = b
    else tail = tail.next = b
  }

  return circles
}

const PlaneType = ({}) => (
  <React.Fragment>
    <FlexPlot height={400} margin={{ left: 50, right: 50, top: 0, bottom: 20 }}>
      {({ chartHeight, chartWidth }) => {
        let dots = Object.keys(dd)
          .reduce((acc, key) => {
            return acc.concat(
              dd[key].map(d => ({
                x: +d.count,
                y: d.type,
                group: key,
              })),
            )
          }, [])
          .filter(d => d.x > 1)

        // const xScale = scaleLog()
        const xScale = scaleLinear()
          .domain(extent(dots, d => d.x))
          .range([0, chartWidth])
        // .nice()

        // const simul = forceSimulation(dots)
        //   .force('x', forceX(d => xScale(d.x)).strength(1))
        //   .force('y', forceY(chartHeight / 2))
        //   .force('collide', forceCollide(2))
        //   .stop()

        // for (let i = 0; i < 3000; i++) simul.tick()

        dots = dodge(dots, 5, xScale)

        console.log('after', dots)

        return (
          <g>
            <Axis
              orientation="bottom"
              scale={xScale}
              transform={`translate(0, ${chartHeight})`}
            />
            <g>
              {dots.map(d => (
                <circle
                  cx={d.x}
                  // cy={chartHeight - 2 - d.y}
                  cy={chartHeight / 2 + d.y}
                  r={2}
                  key={d.data.y}
                  style={{
                    fill: colors8(d.data.y),
                    stroke: 'black',
                    strokeWidth: 1,
                  }}
                >
                  <title>{d.data.y}</title>
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

export default compose(hot(module))(PlaneType)
