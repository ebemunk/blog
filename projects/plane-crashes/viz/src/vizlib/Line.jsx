import React from 'react'
import { line } from 'd3-shape'

export default function Line({ data, x, y, style, ...props }) {
  const lineGenerator = line()
  if (x) lineGenerator.x(x)
  if (y) lineGenerator.y(y)

  return (
    <path
      d={lineGenerator(data)}
      style={{
        fill: 'none',
        ...style,
      }}
      {...props}
    />
  )
}
