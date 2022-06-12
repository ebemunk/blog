import { select } from 'd3'
import React, { useLayoutEffect, useRef } from 'react'
import { usePlotContext } from 'vizlib'

import { Step } from './types'

export default function HefnerDeath({ sX, step }: { sX: any; step: Step }) {
  const { chartHeight } = usePlotContext()
  const ref = useRef()
  useLayoutEffect(() => {
    select(ref.current).transition().delay(0).duration(750).attr('opacity', 1)
  }, [step])

  const lineRef = useRef()
  useLayoutEffect(() => {
    select(lineRef.current)
      .transition()
      .delay(0)
      .duration(1500)
      .attr('y2', chartHeight)
  }, [step])

  return (
    <>
      <g
        ref={ref}
        opacity={0}
        transform={`translate(${sX(
          step === Step.Hefner ? new Date(2017, 0, 1) : new Date(2017, 8, 27),
        )},0)`}
      >
        <line ref={lineRef} x1={0} y1={0} x2={0} y2={0} stroke="white" />
        <text fill="white" fontSize={11} transform="rotate(90)" dx={6} dy={-4}>
          Hugh Hefner dies Sept 27, 2017
        </text>
      </g>
    </>
  )
}
