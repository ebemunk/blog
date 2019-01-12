import React from 'react'
import { line } from 'd3-shape'
import { Spring } from 'react-spring'

export default function Line({ data, x, y, style, ...props }) {
  const lineGenerator = line()
  if (x) lineGenerator.x(x)
  if (y) lineGenerator.y(y)

  return (
    <Spring to={{ d: lineGenerator(data) }}>
      {spring => (
        <path
          d={spring.d}
          style={{
            fill: 'none',
            ...style,
          }}
          {...props}
        />
      )}
    </Spring>
  )
}
