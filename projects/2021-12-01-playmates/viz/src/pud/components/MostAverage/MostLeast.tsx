import { range, scalePoint, scaleTime } from 'd3'
import React from 'react'
import { Axis, ResponsiveSvg, usePlotContext } from 'vizlib'
import { data } from '../../data/data'
import { useYearTickValues } from '../../hooks'
import Lollipop from './Lollipop'

const dates = {
  start: new Date(1953, 11, 1),
  mostStart: new Date(1970, 2, 1),
  mostEnd: new Date(1987, 6, 1),
  least: new Date(2003, 3, 1),
  end: new Date(2022, 0, 1),
}

const midPoint = (y1: Date, y2: Date) =>
  new Date((y1.getTime() + y2.getTime()) / 2)

function Viz() {
  const ordered = [...data].sort((a, b) => a.avgDist - b.avgDist)
  const most = ordered.slice(0, 5)
  const least = ordered.slice(-5)

  const { chartWidth, chartHeight } = usePlotContext()

  const x = scaleTime([dates.start, dates.end], [0, chartWidth])
  const xTickValues = useYearTickValues()

  const y = scalePoint(range(15), [0, chartHeight]).padding(1)

  return (
    <>
      <Axis
        scale={x}
        orientation="top"
        tickSizeOuter={0}
        tickValues={xTickValues.map(d => new Date(d, 0, 1))}
      />
      <Axis
        scale={y}
        orientation="right"
        transform={`translate(${chartWidth},0)`}
        tickFormat={d => {
          if (d === 0) return `#1 - Most Avg.`
          if (d < 5) return `#${d + 1}`
          if (d === 14) return `#806 - Least Avg.`
          if (d > 9) return `#${806 - 14 + d}`
          return ''
        }}
        tickSize={0}
        tickSizeInner={3}
        tickSizeOuter={0}
      />
      <g transform={`translate(${chartWidth},${y(7)})`}>
        <text
          transform={`rotate(-90)`}
          fill="white"
          fontSize={12}
          textAnchor="middle"
          dy={15}
        >
          ... 796 more Playmates ...
        </text>
      </g>
      <rect
        x={x(dates.mostEnd)}
        y={0}
        width={x(dates.least) - x(dates.mostEnd)}
        height={chartHeight}
        fill="rgba(255,255,255,0.2)"
      />
      <rect
        x={x(dates.start)}
        y={0}
        width={x(dates.mostStart) - x(dates.start)}
        height={chartHeight}
        fill="rgba(255,255,255,0.2)"
      />
      {[
        [midPoint(dates.start, dates.mostStart), 16],
        [midPoint(dates.mostEnd, dates.mostStart), 17],
        [midPoint(dates.mostEnd, dates.least), 16],
        [midPoint(dates.least, dates.end), 17],
      ].map(d => (
        <text
          key={d[0].valueOf()}
          x={x(new Date(d[0]))}
          y={y(8)}
          textAnchor="middle"
          fill="white"
          fontSize={12}
        >
          ~{d[1]} yrs.
        </text>
      ))}
      {most.map((d, i) => (
        <Lollipop x1={x(d.date)} y1={y(i)} y2={y(i)} key={i} data={d} />
      ))}
      {least.map((d, i) => (
        <Lollipop
          x1={x(d.date)}
          y1={y(i + 10)}
          y2={y(i + 10)}
          key={i}
          data={d}
        />
      ))}
    </>
  )
}

export default function MostLeast() {
  return (
    <div
      style={{ height: `${24 * 25}px`, maxWidth: '50rem', margin: '0 auto' }}
    >
      <ResponsiveSvg
        margin={{
          left: 20,
          bottom: 5,
          top: 30,
          right: 100,
        }}
      >
        <Viz />
      </ResponsiveSvg>
    </div>
  )
}
