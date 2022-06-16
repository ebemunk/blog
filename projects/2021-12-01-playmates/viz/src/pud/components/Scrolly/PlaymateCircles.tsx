import { select, transition } from 'd3'
import React, { useEffect, useRef } from 'react'
import { PlaymateCircle } from './types'

export default function PlaymateCircles({
  data,
  r,
  transitionDuration,
  ...rest
}: { data: PlaymateCircle[]; r: number; transitionDuration: number } & {
  [key: string]: any
}) {
  const ref = useRef<SVGGElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const t = transition().duration(transitionDuration)

    select(ref.current)
      .selectAll<SVGCircleElement, PlaymateCircle>('circle')
      .data(data, d => d.datum.name)
      .join(
        enter => {
          const entered = enter
            .append('circle')
            .attr('opacity', 0)
            .attr('fill', d => d.fill)
            .attr('cx', d => d.cx)
            .attr('cy', d => d?.cy ?? 0)
            .attr('r', r)
            .attr(
              'data-playmate',
              d => `${d.datum.name}-${d.datum.year}-${d.datum.month}`,
            )
            .attr('stroke-width', 4)
            .attr('stroke', 'none')
            .call(enter =>
              enter
                .transition(t) //
                .attr('opacity', 1),
            )
            .attr('tabindex', 0)

          return entered
        },
        update =>
          update.call(update =>
            update
              .transition(t)
              .attr('cx', d => d.cx)
              .attr('cy', d => d.cy)
              .attr('fill', d => d.fill)
              .attr('opacity', 1),
          ),
        exit =>
          exit //
            .call(exit =>
              exit
                .transition(t) //
                .attr('opacity', 0)
                .remove(),
            ),
      )
  })

  useEffect(() => {
    const hoverListener = evt => {
      select(ref.current)
        .selectAll('circle')
        .select(function (this: SVGCircleElement) {
          //@ts-ignore stroke exists i promise
          return this.attributes.stroke.value !== 'none' ? this : null
        })
        .attr('stroke', 'none')

      if (!evt.detail) return

      const key = `${evt.detail.name}-${evt.detail.year}-${evt.detail.month}`
      select(ref.current)
        .select(`[data-playmate="${key}"]`)
        .attr('stroke', 'white')
    }

    window?.addEventListener('playmateCircleHover', hoverListener)

    return () => {
      window?.removeEventListener('playmateCircleHover', hoverListener)
    }
  }, [])

  return <g ref={ref} {...rest} />
}
