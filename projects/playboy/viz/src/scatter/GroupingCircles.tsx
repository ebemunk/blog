import React from 'react'
import * as d3 from 'd3'
import { arcTween } from '../util'
import { drag, format } from 'd3'

interface CircleDatum {
  data: any[]
  cx: number
  cy: number
  r: number
  stroke: string
  children: {}[]
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
  const total = data.reduce((sum, cur) => sum + cur.children.length, 0)

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
      .startAngle(0)
      .endAngle(d => {
        const total = (d.data[0]?.length ?? 2) + 4
        const angl = (total * 10) / (d.r + Math.PI * 6)
        return angl
      })

    d3.select(ref.current)
      .selectAll('path')
      .data(data)
      .join(
        enter => {
          const s2 = enter
            .append('path')
            .attr('d', arc)
            .attr('fill', d => d.stroke)
            .attr('fill-opacity', 0.4)
            .attr('stroke', d => d.stroke)
            .attr('stroke-opacity', 0.4)
            .attr('transform', d => `translate(${d.cx},${d.cy})`)
            .attr('opacity', 0)
            .attr('id', d => `arc-${d.data[0]}`)
            .call(enter =>
              enter //
                .transition(t)
                .attr('opacity', 1),
            )
          return s2
        },
        update =>
          update.call(update =>
            update
              .attr('opacity', 0)
              .attr('d', arc)
              .attr('transform', d => `translate(${d.cx},${d.cy})`)
              .attr('stroke', d => d.stroke)
              .attr('fill', d => d.stroke)
              .attr('id', d => `arc-${d.data[0]}`)
              .transition()
              .attr('opacity', 1),
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
      .join(
        enter => {
          return (
            enter
              .append('text')
              .attr('dy', 0)
              .attr('dx', 4)
              .append('textPath')
              .attr('xlink:href', d => `#arc-${d.data[0]}`)
              .attr('alignment-baseline', 'hanging')
              .attr('font-size', 14)
              .attr('fill', 'white')
              .attr('letter-spacing', 2)
              // .attr('font-family', 'monospace')
              // .attr('letter-spacing', 4)
              .text(
                d =>
                  `${d.data[0] ?? '??'} ${format('.0%')(
                    d.children.length / total,
                  )}`,
              )
              .attr('id', d => `label-${d.data[0]?.replace('/', '')}`)
              .attr('data-length', function () {
                //@ts-ignore
                return this.getComputedTextLength()
              })
              .attr('spacing', 'auto')
          )
        },
        update => {
          update
            .select('textPath')
            .attr('xlink:href', d => {
              return `#arc-${d.data[0]}`
            })
            .text(
              d =>
                `${d.data[0] ?? '??'} ${format('.0%')(
                  d.children.length / total,
                )}`,
            )
            .attr('id', d => `label-${d.data[0]?.replace('/', '')}`)

          return update
        },
      )
  })

  return <g ref={ref} {...rest} />
}

export default GroupingCircles
