import { max } from 'd3-array'
import { scaleBand, scaleTime } from 'd3-scale'
import * as React from 'react'

import { colorScaleByName, defaultMargins, msToString } from '../util'
import { Margin } from './types'

import data from '../data/speechLen.json'
import { axisBottom, axisLeft } from 'd3-axis'
import { BaseType, select, Selection } from 'd3-selection'
import useChart from './useChart'

const Range = ({
  width,
  height,
  margin = defaultMargins,
}: {
  width: number
  height: number
  margin?: Margin
}) => {
  const { Chart, ref } = useChart({ margin })

  React.useLayoutEffect(() => {
    const chartWidth = width - (margin.left + margin.right)
    const chartHeight = height - (margin.top + margin.bottom)

    const xScale = scaleTime()
      .domain([
        0,
        max(Object.keys(data).flatMap(key => data[key].flatMap(d => d))),
      ])
      .range([0, chartWidth])

    const xAxis = () => axisBottom(xScale).tickFormat(msToString).ticks(30)

    const chart = select(ref.current)

    chart
      .append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .attr('class', 'xAxis')
      .call(xAxis())

    const yScale = scaleBand()
      .domain(['Trump', 'Biden', 'Wallace'].reverse())
      .range([chartHeight, 0])

    chart.append('g').attr('class', 'yAxis').call(axisLeft(yScale))

    const lanes: Selection<BaseType, any, SVGGElement, any> = chart
      .append('g')
      .attr('class', 'lanes')
      .selectAll('g')
      .data(Object.keys(data))
      .join('g')
      .attr('class', d => `lane ${d}`)

    lanes
      .selectAll('rect')
      .data(key =>
        data[key].map(d => {
          d.key = key
          return d
        }),
      )
      .join('rect')
      .attr('x', d => xScale(d[0]))
      .attr('y', d => yScale(d.key))
      .attr('height', yScale.bandwidth())
      .attr('width', d => Math.max(xScale(d[1]) - xScale(d[0]), 1))
      .attr('fill', d => colorScaleByName(d.key))

    chart
      .append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .attr('class', 'xGrid')
      .call(xAxis().tickSize(-chartHeight).tickFormat(''))
    console.log(
      chartWidth,
      max(Object.keys(data).flatMap(key => data[key].flatMap(d => d))),
    )
  }, [])

  return (
    <svg width={width} height={height} id="SpeechRanges">
      <Chart />
    </svg>
  )
}

const SpeechRanges = () => {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <span className="chartTitle">Speech Lanes</span>
      <span className="chartDesc">
        The actual speaking time for each participant is highlighted with their
        respective color.
      </span>
      <Range
        width={2000}
        height={360}
        margin={{ top: 0, bottom: 30, left: 75, right: 25 }}
      />
      <span className="axisLabel">Time elapsed in the debate (hh:mm)</span>
    </div>
  )
}

export default SpeechRanges
