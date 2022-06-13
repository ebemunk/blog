import { select } from 'd3'
import React, { useEffect, useRef } from 'react'

export default function Silhouette({
  data,
  line,
  stroke,
  strokeWidth = 3,
  strokeDasharray = null,
  opacity = 1,
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    select(ref.current)
      //
      .transition()
      .duration(750)
      .attr('opacity', opacity)
  }, [opacity])

  return (
    <g ref={ref}>
      <path
        style={{
          stroke,
          strokeWidth,
          strokeDasharray,
          fill: 'none',
          opacity: 0.7,
        }}
        d={line(data.left)}
      />
      <path
        style={{
          stroke,
          strokeWidth,
          strokeDasharray,
          fill: 'none',
          opacity: 0.7,
        }}
        d={line(data.right)}
      />
    </g>
  )
}
