import React from 'react'
import * as d3 from 'd3'

interface CircleDatum {
  cx: number
  cy: number
  fill: string
  datum: { [key: string]: any }
}

const PlaymateCircles = ({
  data,
  r,
  transitionDuration,
  ...rest
}: { data: CircleDatum[]; r: number; transitionDuration: number } & {
  [key: string]: any
}) => {
  const ref = React.useRef<SVGGElement>(null)

  const t = d3.transition().duration(transitionDuration)

  React.useEffect(() => {
    if (!ref.current) return

    d3.select(ref.current) //
      .selectAll('circle')
      .data(data)
      .join(
        enter => {
          const entered = enter
            .append('circle') //
            .attr('opacity', 0)
            .attr('fill', d => d.fill)
            .attr('cx', d => d.cx)
            .attr('cy', d => d?.cy ?? 0)
            .attr('r', 0)
            .call(enter =>
              enter
                // @ts-ignore
                .transition(t)
                .attr('r', r)
                .attr('opacity', 1),
            )

          return entered
        },
        update =>
          update.call(update =>
            update
              // @ts-ignore
              .transition(t)
              .attr('cx', d => d.cx)
              .attr('cy', d => d.cy)
              .attr('fill', d => d.fill),
          ),
        exit =>
          exit //
            .call(exit =>
              exit
                // @ts-ignore
                .transition(t) //
                .attr('opacity', 0)
                .remove(),
            ),
      )
  })

  return <g ref={ref} {...rest} />
}

export default PlaymateCircles
