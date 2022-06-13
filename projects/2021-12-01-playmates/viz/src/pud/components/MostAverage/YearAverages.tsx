import { groups, mean, scaleBand, scaleLinear } from 'd3'
import React from 'react'
import { Axis, ResponsiveSvg, usePlotContext } from 'vizlib'
import { data } from '../../data/data'
import { useYearTickValues } from '../../hooks'
import { PLAYMATE_PINK } from '../../util'

const yearAvgs = groups(data, d => d.year).map(([year, arr]) => [
  year,
  mean(arr, d => d.avgDist),
])

function Viz() {
  const ctx = usePlotContext()
  const x = scaleBand()
    .domain(
      yearAvgs
        .map(d => d[0])
        .sort((a, b) => a - b)
        .map(String),
    )
    .range([0, ctx.chartWidth])
    .padding(0.2)
  const y = scaleLinear().domain([0, 1]).range([ctx.chartHeight, 0]).nice()

  const xTickValues = useYearTickValues()

  return (
    <>
      <Axis
        scale={y}
        orientation="left"
        tickFormat={() => ''}
        tickValues={[]}
        tickSizeOuter={0}
      >
        <text
          fill="white"
          fontSize={12}
          x={3}
          textAnchor="start"
          alignmentBaseline="hanging"
        >
          Difference from Average
        </text>
      </Axis>
      <Axis
        scale={x}
        orientation="bottom"
        transform={`translate(0,${ctx.chartHeight})`}
        tickValues={xTickValues.map(String)}
      />
      {yearAvgs.map(([year, avg]) => (
        <rect
          key={year}
          x={x(year.toString())}
          y={y(avg)}
          width={x.bandwidth()}
          height={ctx.chartHeight - y(avg)}
          fill={PLAYMATE_PINK}
        />
      ))}
      <text
        fill="white"
        fontSize={12}
        x={x('2020') + x.bandwidth()}
        y={y(yearAvgs[yearAvgs.length - 1][1]) - 6}
        textAnchor="end"
      >
        Least Average Year: 2020
      </text>
      <text
        fill="white"
        fontSize={12}
        x={x('1970')}
        y={y(0.5)}
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        Most Average Year: 1970
      </text>
      <line
        x1={x('1970') + x.bandwidth() / 2}
        y1={y(0.5) + 6}
        x2={x('1970') + x.bandwidth() / 2}
        y2={y(yearAvgs.find(d => d[0] === 1970)[1]) - 3}
        stroke="white"
      />
      <text
        fill="white"
        fontSize={12}
        transform="rotate(-90)"
        dy={-6}
        dx={-ctx.chartHeight + 6}
        textAnchor="start"
      >
        ← Most Average Playmate
      </text>
      <line
        x1={-10}
        y1={ctx.chartHeight}
        x2={ctx.chartWidth}
        y2={ctx.chartHeight}
        stroke="white"
        strokeWidth={3}
      />
    </>
  )
}

export default function YearAverages() {
  return (
    <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
      <ResponsiveSvg
        aspectRatio={2}
        margin={{ top: 0, left: 40, right: 30, bottom: 20 }}
      >
        <Viz />
      </ResponsiveSvg>
    </div>
  )
}
