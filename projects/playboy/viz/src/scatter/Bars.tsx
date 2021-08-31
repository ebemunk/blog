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
  const plotCtx = usePlotContext()

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
    .keys(colorScale.domain())
    .value((d, key) => {
      const total = Object.keys(d)
        .filter(d => d !== 'year')
        .reduce((tot, v) => tot + d[v].length, 0)

      return (d[key]?.length ?? 0) / total
    })(years)

  console.log('datz', years, stack)

  const yScale = d3
    .scaleLinear()
    .domain([0, 1])
    .range([plotCtx.chartHeight - 10, 0])

  console.log('yscale', yScale.domain(), yScale.range())

  const xScale = d3
    .scaleBand()
    .domain(years.map(d => d.year.toString()))
    .range([0, plotCtx.chartWidth / 2])
    .padding(0.1)

  const barsRef = useRef(null)

  useEffect(() => {
    if (!barsRef.current) return

    d3.select(barsRef.current)
      .selectAll('g')
      .data(stack)
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
            if (isNaN(h)) {
              console.log('nan', d, yScale(d[0]), yScale(d[1]))
            }
            return h
          }),
      )
  }, [width, height, colorScale, accessor])

  return (
    <g {...rest}>
      <Axis scale={yScale} orientation="left" />
      <Axis
        scale={xScale}
        orientation="bottom"
        tickValues={d3.range(1955, 2021, 5).map(String)}
        transform={`translate(0,${plotCtx.chartHeight - 10})`}
      />
      <g ref={barsRef} />
    </g>
  )
}

export default Bars
