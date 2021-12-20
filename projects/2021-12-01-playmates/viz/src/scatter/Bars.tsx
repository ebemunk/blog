import React, { SVGProps, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { range } from 'remeda'

import { data } from '../data'
import { Playmate } from '../types'
import { Axis, usePlotContext } from 'vizlib'

const Bars = ({
  width,
  height,
  colorScale,
  accessor,
  ...rest
}: {
  width: number
  height: number
  colorScale: d3.ScaleOrdinal<string, unknown, never>
  accessor: (p: Playmate) => unknown
} & SVGProps<SVGGElement>) => {
  const years = range(1953, 2021).map(year => {
    const cols = Object.fromEntries(
      d3.group(
        data.filter(d => d.year === year),
        d => accessor(d) ?? null,
      ),
    )
    return {
      year,
      ...cols,
    }
  })

  const stack = d3
    .stack()
    .order(d3.stackOrderDescending)
    .keys(colorScale.domain())
    .value((d, key) => {
      const total = Object.keys(d)
        .filter(d => d !== 'year')
        .reduce((tot, v) => tot + d[v].length, 0)

      return (d[key]?.length ?? 0) / total
    })(years)

  const yScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([height - 10, 0])

  const xScale = d3
    .scaleBand()
    .domain(years.map(d => d.year.toString()))
    .range([0, width])
    .padding(0.1)

  const barsRef = useRef(null)

  useEffect(() => {
    if (!barsRef.current) return

    d3.select(barsRef.current)
      .selectAll('g')
      .data(stack, d => d.key)
      .join('g')
      .attr('fill', d => colorScale(d.key))
      .selectAll('rect')
      .data(
        d => d,
        d => d.key,
      )
      .join(enter =>
        enter
          .append('rect')
          .attr('x', d => xScale(d.data.year.toString()))
          .attr('width', d => xScale.bandwidth())
          .attr('y', yScale(yScale.domain()[0]))
          .attr('height', 0)
          .transition()
          .duration(750)
          .delay((d, i) => i * 25)
          .attr('y', d => yScale(d[1]))
          .attr('height', d => {
            const h = yScale(d[0]) - yScale(d[1])
            return h
          }),
      )
  }, [width, height, colorScale, accessor])

  return (
    <g {...rest}>
      <Axis
        scale={yScale}
        orientation="left"
        tickFormat={d3.format('.0%')}
        transitionDuration={300}
      />
      <Axis
        scale={xScale}
        orientation="bottom"
        tickValues={d3.range(1955, 2021, 5).map(String)}
        transform={`translate(0,${height - 10})`}
        transitionDuration={300}
      />
      <g ref={barsRef} />
    </g>
  )
}

export default Bars