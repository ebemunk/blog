import React from 'react'
import * as d3 from 'd3'

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

  const t = d3.transition().duration(transitionDuration)

  React.useEffect(() => {
    if (!ref.current) return

    d3.select(ref.current) //
      .selectAll('circle')
      .data(data)
      .join(
        enter =>
          enter
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
            ),
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
  })

  return <g ref={ref} {...rest} />
}

export default GroupingCircles
