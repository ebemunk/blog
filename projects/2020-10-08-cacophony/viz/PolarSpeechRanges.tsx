import { select, selectAll } from 'd3-selection'
import * as React from 'react'

import { ChartOptions } from './types'
import useChart from './useChart'
import data from '../data/speechLen.json'
import { scaleBand, scaleLinear, scaleOrdinal, scaleTime } from 'd3-scale'
import { max } from 'd3-array'
import { colorScaleById, colorScaleByName, msToString } from '../util'
import { arc } from 'd3-shape'
import { axisRadialInner, axisRadialOuter } from 'd3-radial-axis'

import secData from '../data/per-second-speech.json'
import { equals } from 'remeda'

const usePolarSpeechChart = (options: ChartOptions) => {
  const chart = useChart(options)
  const { ref, chartHeight } = chart

  const innerRadius = chartHeight / 3
  const outerRadius = chartHeight / 2

  React.useLayoutEffect(() => {
    const chart = select(ref.current)

    const angle = scaleTime()
      .domain([
        0,
        max(Object.keys(data).flatMap(key => data[key].flatMap(d => d))),
      ])
      .range([0, Math.PI * 2])

    const radius = scaleBand()
      .domain(['All', ...Object.keys(data)])
      .range([innerRadius, outerRadius])

    const arcGen = arc()

    chart
      .append('g')
      .attr('class', 'lanes')
      .selectAll('path')
      .data(['Trump', 'Wallace', 'Biden', 'All'])
      .join(enter => {
        const paths = enter
          .append('path')
          .attr('id', d => `lane-${d}`)
          .attr('d', d =>
            arcGen({
              startAngle: 0,
              endAngle: Math.PI * 2,
              innerRadius: radius(d),
              outerRadius: radius(d) + radius.bandwidth(),
            }),
          )
          .style('fill', d =>
            d === 'All' ? 'transparent' : colorScaleByName(d),
          )
          .style('opacity', 0.2)

        return paths
      })

    chart
      .selectAll('.speaker')
      .data(Object.keys(data))
      .join('g')
      .attr('class', d => 'speaker ' + d)
      .selectAll('.rect')
      .data((name: 'Wallace' | 'Trump' | 'Biden'): (number[] & {
        name: string
      })[] =>
        data[name].map(d => {
          d.name = name
          return d
        }),
      )
      .join('path')
      .attr('class', 'rect')
      .style('stroke-width', 1)
      .style('stroke', d => colorScaleByName(d.name))
      .style('fill', d => colorScaleByName(d.name))
      .attr('d', d =>
        arcGen({
          innerRadius: radius(d.name),
          outerRadius: radius.bandwidth() + radius(d.name),
          startAngle: angle(d[0]),
          endAngle: angle(d[1]),
        }),
      )

    const xScale = scaleBand()
      .domain(Object.keys(secData))
      .range([0, Math.PI * 2])

    const tb = scaleBand()
      .domain(['0', '1'])
      .range([radius('All') + radius.bandwidth(), radius('All')])
    const tw = scaleBand()
      .domain(['0', '2'])
      .range([radius('All') + radius.bandwidth(), radius('All')])
    const bw = scaleBand()
      .domain(['2', '1'])
      .range([radius('All') + radius.bandwidth(), radius('All')])
    const tbw = scaleBand()
      .domain(['0', '1', '2'])
      .range([radius('All') + radius.bandwidth(), radius('All')])

    const allRadiusBand = (name, names) => {
      if (equals(names, [0, 1])) return tb(name)
      if (equals(names, [0, 2])) return tw(name)
      if (equals(names, [1, 2])) return bw(name)

      return tbw(name)
    }

    const dataContainer = chart.append('g')
    dataContainer.attr('class', 'secs')

    dataContainer
      .selectAll('.second')
      .data(
        Object.entries(secData).filter(([sec, names]) => names.length === 2),
      )
      .join('g')
      .attr('class', 'second')
      .selectAll('path')
      .data(d => [d])
      .join(enter => {
        const path = enter
          .selectAll('path')
          .data(d => {
            // console.log(
            //   'what',
            //   d,
            //   d[1].map(dd => [d[0], dd]),
            // )

            return d[1].map(dd => [...d, dd])
          })
          .join('path')
          .attr('d', ([sec, names, name]) => {
            return arcGen({
              innerRadius: allRadiusBand(name, names) + tb.bandwidth(),
              outerRadius: allRadiusBand(name, names),
              startAngle: xScale(sec),
              endAngle: xScale(+sec + 2),
            })
          })
          .attr('fill', d => colorScaleById(d[2]))

        return path
      })

    const axis = axisRadialInner(angle, innerRadius)
      .tickFormat(d => {
        // console.log(d)

        return d.getUTCHours() === 0 && d.getUTCMinutes() === 0
          ? 'Start -->'
          : msToString(d)
      })
      .ticks(30)
      .tickPadding(20)
    chart.append('g').attr('class', 'axis').call(axis)

    const ticks = axisRadialInner(angle, innerRadius)
      .ticks(30)
      .tickSizeInner(-(outerRadius - innerRadius))
      .tickFormat('')
    chart.append('g').attr('class', 'ticks').call(ticks)

    chart
      .selectAll('.lanetext')
      .data(['Trump', 'Biden', 'Wallace', 'All'])
      .join(enter =>
        enter
          .append('text')
          .attr('dy', radius.bandwidth() / 2)
          .attr('class', 'lanetext')
          .append('textPath')
          .attr('startOffset', 16)
          .attr('href', d => `#lane-${d}`)
          .text(d => (d === 'All' ? 'SAME TIME' : d.toUpperCase())),
      )
  }, [])

  return chart
}

const PolarSpeechRanges = (props: ChartOptions) => {
  const { Chart } = usePolarSpeechChart(props)

  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox={[
        -props.width / 2,
        -props.height / 2,
        props.width,
        props.height,
      ].join()}
      style={{
        shapeRendering: 'geometricPrecision',
      }}
      className={props.className}
    >
      <Chart />
    </svg>
  )
}

export default PolarSpeechRanges
