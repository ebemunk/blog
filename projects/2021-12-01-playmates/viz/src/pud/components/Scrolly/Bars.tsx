import {
  format,
  group,
  range,
  scaleBand,
  scaleLinear,
  ScaleOrdinal,
  select,
  Series,
  stack as d3stack,
  stackOrderDescending,
} from 'd3'
import React, { SVGProps, useEffect, useRef } from 'react'
import { Axis } from 'vizlib'
import { data, Playmate } from '../../data/data'
import { useWindowSize, useYearTickValues } from '../../hooks'
import { CAccessor, XAccessor, YAccessor } from './accessors'

export default function Bars({
  width,
  height,
  colorScale,
  accessor,
  ...rest
}: {
  width: number
  height: number
  colorScale: ScaleOrdinal<string, any, never>
  accessor: XAccessor | YAccessor | CAccessor
} & SVGProps<SVGGElement>) {
  const years = range(1954, 2021).map(year => {
    const cols = Object.fromEntries(
      group(
        data.filter(d => d.year === year),
        d => accessor(d) ?? null,
      ),
    )
    return {
      year,
      ...cols,
    }
  })

  const stack = d3stack<Playmate>()
    .order(stackOrderDescending)
    .keys(colorScale.domain())
    .value((d, key) => {
      const total = Object.keys(d)
        .filter(d => d !== 'year')
        .reduce((tot, v) => tot + d[v].length, 0)

      return (d[key]?.length ?? 0) / total
    })(years)

  const yScale = scaleLinear()
    .domain([0, 1])
    .range([height - 10, 0])

  const xScale = scaleBand()
    .domain(years.map(d => d.year.toString()))
    .range([0, width])
    .padding(0.1)

  const barsRef = useRef(null)

  useEffect(() => {
    if (!barsRef.current) return

    const sel = select(barsRef.current)
      .selectAll('g')
      .interrupt()
      .data(stack, (d: Series<Playmate, string>) => d.key)
      .join('g')
      .attr('fill', (d: Series<Playmate, string>) => colorScale(d.key))
      .selectAll('rect')
      .data(
        d => d,
        (d: Series<Playmate, string>) => d.key,
      )

    //@ts-ignore
    sel.join(
      enter =>
        enter
          .append('rect')
          .attr('x', d => xScale(d.data.year.toString()))
          .attr('width', () => xScale.bandwidth())
          .attr('y', yScale(yScale.domain()[0]))
          .attr('height', 0)
          .transition()
          .duration(750)
          .delay((d, i) => i * 25)
          .attr('y', d => yScale(d[1]))
          .attr('height', (d, i) => {
            const h = yScale(d[0]) - yScale(d[1])
            return h
          }),
      update =>
        update
          .attr('x', d => xScale(d.data.year.toString()))
          .attr('width', () => xScale.bandwidth())
          .attr('y', yScale(yScale.domain()[0]))
          .attr('y', d => yScale(d[1]))
          .attr('height', (d, i) => {
            const h = yScale(d[0]) - yScale(d[1])
            return h
          }),
    )
  }, [width, height, colorScale, accessor, stack])

  const ws = useWindowSize()
  const wWidth = ws.width ?? 0
  let xTickValues = useYearTickValues()
  if (wWidth < 424) {
    xTickValues = range(1960, 2021, 20)
  } else if (wWidth <= 1024) {
    xTickValues = range(1960, 2021, 10)
  }

  return (
    // @ts-ignore
    <g {...rest}>
      <Axis
        scale={yScale}
        orientation="left"
        tickFormat={format('.0%')}
        transitionDuration={300}
      />
      <Axis
        scale={xScale}
        orientation="bottom"
        tickValues={xTickValues.map(String)}
        transform={`translate(0,${height - 10})`}
        transitionDuration={300}
      />
      <g ref={barsRef} />
    </g>
  )
}
