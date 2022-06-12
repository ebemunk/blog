import { select } from 'd3'
import { useEffect, useRef } from 'react'

export function useOpacityTransition(
  condition,
  { delay = 0, duration = 750 } = {},
) {
  const ref = useRef()
  useEffect(() => {
    if (!condition) return

    select(ref.current)
      .transition()
      .delay(delay)
      .duration(duration)
      .attr('opacity', 1)
  }, [condition])
  return ref
}
