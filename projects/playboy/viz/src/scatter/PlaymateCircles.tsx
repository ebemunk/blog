import React from 'react'
import * as d3 from 'd3'
import { PlaymateCircle } from '../types'

const PlaymateCircles = ({
  data,
  r,
  transitionDuration,
  ...rest
}: { data: PlaymateCircle[]; r: number; transitionDuration: number } & {
  [key: string]: any
}) => {
  const ref = React.useRef<SVGGElement>(null)

  let multiplePlaymates = data.reduce((obj, d) => {
    const key = `${d.datum.year}-${d.datum.month}`
    return {
      ...obj,
      [key]: obj[key] ? obj[key] + 1 : 1,
    }
  }, {})
  multiplePlaymates = Object.entries(multiplePlaymates).filter(d => d[1] > 1)

  console.log('multiple', multiplePlaymates)

  React.useEffect(() => {
    if (!ref.current) return

    const t = d3.transition().duration(transitionDuration)

    d3.select(ref.current)
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
            .attr('data-playmate', d => d.datum.name)
            .call(enter =>
              enter
                .transition(t) //
                .attr('opacity', 1),
            )

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

    d3.select(ref.current)
      .selectAll<SVGCircleElement, PlaymateCircle>('circle')
      .filter(d => {
        const key = `${d.datum.year}-${d.datum.month}`
        if (multiplePlaymates.map(mp => mp[0]).includes(key)) {
          return true
        }
        return false
      })
      .attr('cx', d => d.cx + d3.randomUniform(-4, 4)())
      .attr('cy', d => d.cy + d3.randomUniform(-4, 4)())
  })

  return <g ref={ref} {...rest} />
}

export default PlaymateCircles
