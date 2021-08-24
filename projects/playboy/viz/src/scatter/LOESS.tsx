import React, { useLayoutEffect } from 'react'
import { useRef } from 'react'
import * as d3 from 'd3'
import { animated, useSpring } from '@react-spring/web'

import loessData from '../../loess.json'
import { get } from '../data'
import accessors from './accessors'

import Path from '../letgo/Path'
import { useEffect } from 'react'

const LOESS = ({ stage, sX, sY }) => {
  const ld = loessData.find(d => d.key === stage)

  if (!ld) return null

  const {
    loess: { fitted, halfwidth },
  } = ld

  const dd = get(accessors(stage)[1])

  const avgRef = useRef()
  const errRef = useRef()

  // const [avg, api] = useSpring({})

  useLayoutEffect(() => {
    if (!avgRef.current) return

    const sel = d3
      .select(avgRef.current)
      .interrupt()
      .attr('stroke-dasharray', function (this: SVGPathElement) {
        return `0 ${this.getTotalLength()}`
      })
      .transition()
      .delay(750)
      .duration(750)
      .attr('stroke-dasharray', function (this: SVGPathElement) {
        return `${this.getTotalLength()} ${this.getTotalLength()}`
      })
  })

  useLayoutEffect(() => {
    if (!errRef.current) return

    d3.select(errRef.current)
      .interrupt()
      .attr('opacity', 0)
      .transition()
      .delay(750 * 2)
      .duration(750)
      .attr('opacity', 0.3)
  })

  return (
    <>
      <path
        ref={errRef}
        style={{
          fill: 'gray',
        }}
        d={d3
          .area<[number, number, number]>()
          .x(d => d[0])
          .y0(d => d[1])
          .y1(d => d[2])(
          dd.map((d, i) => [
            sX(d[0]),
            sY(fitted[i] - halfwidth[i]),
            sY(fitted[i] + halfwidth[i]),
          ]),
        )}
      />
      <path
        ref={avgRef}
        style={{ opacity: 0.6, stroke: 'red', strokeWidth: 4, fill: 'none' }}
        d={d3.line()(dd.map((d, i) => [sX(d[0]), sY(fitted[i])]))}
      />
    </>
  )
  return (
    <>
      <Path
        data={dd.map((d, i) => [
          sX(d[0]),
          sY(fitted[i] - halfwidth[i]),
          sY(fitted[i] + halfwidth[i]),
        ])}
        generator={d3
          .area<[number, number, number]>()
          .x(d => d[0])
          .y0(d => d[1])
          .y1(d => d[2])}
        style={{
          opacity: 0.4,
          fill: 'gray',
        }}
        transitionDuration={750}
      />
      <Path
        data={dd.map((d, i) => [sX(d[0]), sY(fitted[i])])}
        generator={d3.line()}
        style={{
          stroke: 'red',
          strokeWidth: 4,
          fill: 'none',
          opacity: 0.6,
        }}
        transitionDuration={750}
      />
    </>
  )
}

export default LOESS
