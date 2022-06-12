import { area, line, select } from 'd3'
import React, { useLayoutEffect, useRef } from 'react'

import { data } from '../../data/data'
import loessData from '../../data/loess.json'
import { useStore } from '../../store'
import { cm2in, kg2lb } from '../../util'
import { Step } from './types'

export const transformUnits = (step: Step, units: string) => {
  return value => {
    switch (step) {
      case Step.Age:
        return value
      case Step.Weight:
        return units === 'metric' ? value : kg2lb(value)
      case Step.Height:
      case Step.Bust:
      case Step.Waist:
      case Step.Hips:
        return units === 'metric' ? value : cm2in(value)
    }
  }
}

export default function LOESS({
  step,
  sX,
  sY,
}: {
  step: Step
  sX: (d: any) => number
  sY: (d: any) => number
}) {
  const units = useStore(state => state.units)
  const ld = loessData.find(
    d =>
      d.key ===
      {
        [Step.Age]: 'mateAge',
        [Step.Height]: 'heightCM',
        [Step.Weight]: 'weightKG',
        [Step.Bust]: 'bustCM',
        [Step.Waist]: 'waistCM',
        [Step.Hips]: 'hipsCM',
      }[step],
  )

  const fitted = ld.loess.fitted.map(transformUnits(step, units))
  const halfwidth = ld.loess.halfwidth.map(transformUnits(step, units))

  const dd = data.map(d => d.date)

  const avgRef = useRef()
  const errRef = useRef()

  useLayoutEffect(() => {
    if (!avgRef.current) return

    select(avgRef.current)
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

    select(errRef.current)
      .interrupt()
      .attr('opacity', 0)
      .transition()
      .delay(750 * 2)
      .duration(750)
      .attr('opacity', 0.2)
  })

  return (
    <>
      <path
        ref={errRef}
        style={{
          fill: 'gray',
        }}
        d={area<[number, number, number]>()
          .x(d => d[0])
          .y0(d => d[1])
          .y1(d => d[2])(
          dd.map((d, i) => [
            sX(d),
            sY(fitted[i] - halfwidth[i]),
            sY(fitted[i] + halfwidth[i]),
          ]),
        )}
      />
      <path
        ref={avgRef}
        style={{
          opacity: 0.9,
          stroke: 'cyan',
          strokeWidth: 4,
          fill: 'none',
        }}
        d={line()(dd.map((d, i) => [sX(d), sY(fitted[i])]))}
      />
    </>
  )
}
