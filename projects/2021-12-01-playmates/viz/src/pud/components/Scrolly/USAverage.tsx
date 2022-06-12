import React from 'react'
import { usePlotContext } from 'vizlib'
import { useOpacityTransition } from './hooks'

export default function USAverage({ value }: { value: number }) {
  const ref = useOpacityTransition(true)
  const { chartWidth } = usePlotContext()

  return (
    <g
      transform={`translate(0,${value})`}
      // @ts-ignore attr exists
      color="var(--yellow)"
      ref={ref}
      opacity={0}
    >
      <line
        x1={0}
        x2={chartWidth}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeOpacity={0.7}
        strokeDasharray="5 5"
      />
      <text
        fill="currentColor"
        fontSize={12}
        dy={4}
        dominantBaseline="hanging"
        textAnchor="end"
        x={chartWidth}
      >
        Average for US Women 20-29 between 2015-2018
      </text>
    </g>
  )
}
