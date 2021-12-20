import React from 'react'
import { compose, pure, withState } from 'recompose'
import { range, extent } from 'd3-array'
import { scaleLinear, scaleLog } from 'd3-scale'
import { interpolateHcl } from 'd3-interpolate'

import { getSqCoords } from './util'

export const Paths = compose(pure)(
  //
  ({ data, sqWidth }) => {
    const scale = scaleLinear()
      .domain(extent(Object.values(data)))
      .range([1, 20])

    // const color = scaleSequential(interpolateInferno).domain(
    //   extent(Object.values(data)),
    // )
    const color = scaleLog()
      // .exponent(0.1)
      .domain(extent(Object.values(data)))
      .range(['black', 'red'])
      .interpolate(interpolateHcl)

    return Object.keys(data).map(k => {
      const [from, to] = k.split('-')

      const [x1, y1] = getSqCoords(from, sqWidth, true)
      const [x2, y2] = getSqCoords(to, sqWidth, true)

      return (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          // stroke="red"
          stroke={color(data[k])}
          // strokeWidth={scale(data[k])}
          strokeWidth={5}
          strokeLinecap="round"
          pointerEvents="none"
          key={k}
        />
      )
    })
  },
)

export default Paths
