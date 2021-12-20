import * as React from 'react'
import { scaleBand } from 'd3-scale'

import {
  colorScaleById,
  colorScaleByName,
  defaultMargins,
  msToString,
} from '../util'
import { Margin } from './types'
import useChart from './useChart'

import data from '../data/per-second-speech.json'
import { extent, range } from 'd3-array'
import { axisBottom } from 'd3-axis'
import { select } from 'd3-selection'
import { equals } from 'remeda'

const PerSecondSpeech = ({
  width,
  height,
  margin = defaultMargins,
}: {
  width: number
  height: number
  margin?: Partial<Margin>
}) => {
  const { ref, Chart, chartHeight, chartWidth } = useChart({
    width,
    height,
    margin,
  })

  const tb = scaleBand().domain(['0', '1']).range([0, chartHeight])
  const tw = scaleBand().domain(['0', '2']).range([0, chartHeight])
  const bw = scaleBand().domain(['2', '1']).range([0, chartHeight])
  const tbw = scaleBand().domain(['0', '1', '2']).range([0, chartHeight])

  const rectScale = (name, names) => {
    const ndata = names.map(n => n.__data__)

    if (equals(ndata, [0, 1])) return tb(name)
    if (equals(ndata, [0, 2])) return tw(name)
    if (equals(ndata, [1, 2])) return bw(name)

    return tbw(name)
  }

  const rectScaleForReact = (name, names) => {
    if (equals(names, [0, 1])) return tb(name)
    if (equals(names, [0, 2])) return tw(name)
    if (equals(names, [1, 2])) return bw(name)

    return tbw(name)
  }

  React.useLayoutEffect(() => {
    const xScale = scaleBand().domain(Object.keys(data)).range([0, chartWidth])

    const xExtent = extent(Object.keys(data).map(Number))
    const xTicks = range(0, xExtent[1], 300)

    const chart = select(ref.current)

    chart
      .append('g')
      .attr('transform', `translate(0,${chartHeight})`)
      .attr('class', 'xAxis')
      .call(
        axisBottom(xScale)
          .tickValues(xTicks)
          .tickFormat(d => msToString(d * 1000)),
      )

    const dataContainer = chart.append('g')
    dataContainer.attr('class', 'data')

    dataContainer
      .selectAll('rect')
      .data(Object.entries(data).filter(([sec, names]) => names.length > 1))
      .join('g')
      .attr('transform', ([sec]) => `translate(${xScale(sec)}, 0)`)
      .selectAll('rect')
      .data(d => d[1])
      .join('rect')
      .attr('y', (name, i, names) => {
        return rectScale(name, names)

        let multiplier = i
        return multiplier * (chartHeight / names.length)
      })
      .attr('width', Math.max(xScale.bandwidth(), 2))
      .attr('height', (name, i, names) =>
        names.length === 2 ? tb.bandwidth() : tbw.bandwidth(),
      )
      .attr('fill', name => (colorScaleById(String(name)) as string) ?? 'none')
  }, [])

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '1rem', marginTop: '4rem' }}>
        <div style={{ marginRight: '2rem' }}>
          <span className="chartTitle">Speaking at the same time</span>
          <span className="chartDesc">
            Periods when multiple people were speaking at the same time,
            subdivided by seconds.
          </span>
        </div>
        <div style={{ display: 'flex' }}>
          {[
            { names: [0, 1], label: 'T+B' },
            { names: [0, 2], label: 'T+W' },
            { names: [1, 2], label: 'B+W' },
            { names: [0, 1, 2], label: 'T+B+W' },
          ].map(({ names, label }) => (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: '1rem',
              }}
              key={label}
            >
              <span className="sans-serif">{label}</span>
              <svg height={chartHeight} width={5} key={label}>
                {names.map(name => (
                  <rect
                    key={name}
                    x={0}
                    width={5}
                    y={rectScaleForReact(name, names)}
                    height={
                      names.length === 2 ? tb.bandwidth() : tbw.bandwidth()
                    }
                    fill={colorScaleById(String(name))}
                  />
                ))}
              </svg>
            </div>
          ))}
        </div>
      </div>
      <svg width={width} height={height} id="PerSecondSpeech">
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            {/* <feMergeNode in="SourceGraphic" /> */}
          </feMerge>
        </filter>
        <Chart />
      </svg>
      <span className="axisLabel">Time elapsed in the debate (hh:mm)</span>
    </>
  )
}

export default PerSecondSpeech
