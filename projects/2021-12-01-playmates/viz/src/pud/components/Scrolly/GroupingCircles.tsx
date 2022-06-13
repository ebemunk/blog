import {
  arc as d3arc,
  format,
  HierarchyCircularNode,
  select,
  transition,
} from 'd3'
import React, { useEffect, useRef } from 'react'
import { Playmate } from '../../data/data'

type Data = (HierarchyCircularNode<Playmate> & {
  cx: number
  cy: number
  stroke: string
})[]

export default function GroupingCircles({
  data,
  transitionDuration,
  ...rest
}: {
  data: Data
  transitionDuration: number
} & { [key: string]: any }) {
  const ref = useRef<SVGGElement>(null)

  const total = data.reduce((sum, cur) => sum + cur.children.length, 0)

  useEffect(() => {
    if (!ref.current) return

    const t = transition().duration(transitionDuration)

    select(ref.current)
      .selectAll('circle')
      .data(data)
      .join(
        enter =>
          enter
            .append('circle')
            .attr('cx', d => d.cx)
            .attr('cy', d => d.cy)
            .attr('r', 0)
            .attr('opacity', 1)
            .attr('stroke', d => d.stroke)
            .attr('stroke-width', 3)
            .attr('fill', 'transparent')
            .call(enter =>
              enter //
                .transition(t)
                .attr('r', d => d.r),
            ),
        update =>
          update.call(update =>
            update
              .transition(t)
              .attr('cx', d => d.cx)
              .attr('cy', d => d.cy)
              .attr('r', d => d.r)
              .attr('stroke', d => d.stroke),
          ),
        exit =>
          exit.call(exit =>
            exit //
              .transition(t)
              .attr('opacity', 0)
              .remove(),
          ),
      )

    const arc = d3arc<Data[number]>()
      .innerRadius(d => +d.r - 2)
      .outerRadius(d => +d.r + 16)
      .startAngle(0)
      .endAngle(d => {
        const total = d.data[0].length + 4
        const angl = (total * 10) / (d.r + Math.PI * 5.6)
        return angl
      })

    select(ref.current)
      .selectAll('path')
      .data(data)
      .join(
        enter =>
          enter
            .append('path')
            .attr('d', arc)
            .attr('fill', d => d.stroke)
            .attr('fill-opacity', 0.4)
            .attr('stroke', d => d.stroke)
            .attr('stroke-opacity', 0.4)
            .attr('transform', d => `translate(${d.cx},${d.cy})`)
            .attr('opacity', 0)
            .attr('id', d => `arc-${d.data[0]}-${d.data[1].length}`)
            .call(enter =>
              enter //
                .transition()
                .delay(transitionDuration)
                .duration(transitionDuration)
                .attr('opacity', 1),
            ),
        update =>
          update.call(update =>
            update
              .attr('opacity', 0)
              .attr('d', arc)
              .attr('transform', d => `translate(${d.cx},${d.cy})`)
              .attr('stroke', d => d.stroke)
              .attr('fill', d => d.stroke)
              .attr('id', d => `arc-${d.data[0]}-${d.data[1].length}`)
              .transition()
              .delay(transitionDuration)
              .duration(transitionDuration)
              .attr('opacity', 1),
          ),
        exit =>
          exit.call(exit => exit.transition(t).attr('opacity', 0).remove()),
      )

    select(ref.current)
      .selectAll('text')
      .data(data)
      .join(
        enter => {
          return enter
            .append('text')
            .attr('dy', 0)
            .attr('dx', 4)
            .attr('opacity', 0)
            .call(enter =>
              enter //
                .transition()
                .delay(transitionDuration)
                .duration(transitionDuration)
                .attr('opacity', 1),
            )
            .append('textPath')
            .attr('xlink:href', d => `#arc-${d.data[0]}-${d.data[1].length}`)
            .attr('dominant-baseline', 'hanging')
            .attr('font-size', 14)
            .attr('fill', 'white')
            .attr('letter-spacing', 2)
            .text(
              d => `${d.data[0]} ${format('.0%')(d.children.length / total)}`,
            )
            .attr('id', d => `label-${d.data[0]}-${d.data[1].length}`)
            .attr('data-length', function () {
              return this.getComputedTextLength()
            })
            .attr('spacing', 'auto')
        },
        update => {
          update
            .attr('opacity', 0)
            .transition()
            .delay(transitionDuration)
            .duration(transitionDuration)
            .attr('opacity', 1)

          update
            .select('textPath')
            .attr('xlink:href', d => {
              return `#arc-${d.data[0]}-${d.data[1].length}`
            })
            .text(
              d => `${d.data[0]} ${format('.0%')(d.children.length / total)}`,
            )
            .attr('id', d => `label-${d.data[0]}-${d.data[1].length}`)

          return update
        },
      )
  })

  return <g ref={ref} {...rest} />
}
