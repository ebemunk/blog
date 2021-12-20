import React, { useLayoutEffect } from 'react'
import { useRef } from 'react'
import * as d3 from 'd3'

import loessData from '../../loess.json'
import { get } from '../data'
import accessors from './accessors'
import { Store } from '../store'
import { loessKey } from './util'

const LOESS = ({ stage, sX, sY }) => {
  const units = Store.useState(s => s.units)
  const ld = loessData.find(d => d.key === loessKey(stage, units))

  const {
    loess: { fitted, halfwidth },
  } = ld

  const dd = get(accessors(stage, units)[1])

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
      .attr('opacity', 0.2)
  })

  if (!ld) return null

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
        style={{
          opacity: 0.9,
          stroke: 'red',
          strokeWidth: 4,
          fill: 'none',
        }}
        d={d3.line()(dd.map((d, i) => [sX(d[0]), sY(fitted[i])]))}
      />
    </>
  )
}

export default LOESS
