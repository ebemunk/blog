import React from 'react'
import * as d3 from 'd3'
import { arcTween } from '../util'

interface CircleDatum {
  cx: number
  cy: number
  r: string
  stroke: string
}

const GroupingCircles = ({
  data,
  transitionDuration,
  ...rest
}: {
  data: CircleDatum[]
  transitionDuration: number
} & { [key: string]: any }) => {
  const ref = React.useRef<SVGGElement>(null)

  console.log('what', data)

  React.useEffect(() => {
    if (!ref.current) return

    const t = d3.transition().duration(transitionDuration)

    d3.select(ref.current) //
      .selectAll('circle')
      .data(data)
      .join(
        enter => {
          const s1 = enter
            .append('circle')
            .attr('cx', d => d.cx)
            .attr('cy', d => d.cy)
            .attr('r', 0)
            .attr('opacity', 0.4)
            .attr('stroke', d => d.stroke)
            .attr('stroke-width', 3)
            .attr('fill', 'transparent')
            .call(enter =>
              enter //
                // @ts-ignore
                .transition(t)
                .attr('r', d => d.r),
            )
          return s1
        },
        update =>
          update.call(update =>
            update
              // @ts-ignore
              .transition(t)
              .attr('cx', d => d.cx)
              .attr('cy', d => d.cy)
              .attr('r', d => d.r)
              .attr('stroke', d => d.stroke),
          ),
        exit =>
          exit.call(exit =>
            exit
              // @ts-ignore
              .transition(t)
              .attr('opacity', 0)
              .remove(),
          ),
      )

    const arc = d3
      .arc<CircleDatum>()
      .innerRadius(d => +d.r - 2)
      .outerRadius(d => +d.r + 16)
      .startAngle(-Math.PI / 4)
      .endAngle(Math.PI / 4)

    d3.select(ref.current)
      .selectAll('path')
      .data(data)
      .join(
        enter => {
          const s2 = enter
            .append('path')
            .attr('d', arc)
            .attr('fill', d => d.stroke)
            .attr('stroke', d => d.stroke)
            .attr('transform', d => `translate(${d.cx},${d.cy})`)
            .attr('opacity', 0)
            .call(enter =>
              enter //
                // @ts-ignore
                .transition(t)
                .attr('opacity', 1),
            )
          return s2
        },
        update =>
          update.call(update =>
            update
              // @ts-ignore
              .transition(t)
              .attr('transform', d => `translate(${d.cx},${d.cy})`)
              .attr('stroke', d => d.stroke)
              .attr('fill', d => d.stroke)
              .attr('d', arc),
          ),
        exit =>
          exit.call(exit =>
            exit
              // @ts-ignore
              .transition(t)
              .attr('opacity', 0)
              .remove(),
          ),
      )

    d3.select(ref.current)
      .selectAll('text')
      .data(data)
      .join('text')
      // @ts-ignore
      .text(d => d.data[0])
      .attr('x', d => d.cx)
      .attr('y', d => d.cy)
  })

  return <g ref={ref} {...rest} />
}

export default GroupingCircles
