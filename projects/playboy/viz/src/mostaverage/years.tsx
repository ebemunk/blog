import React from 'react'
import { hot } from 'react-hot-loader'
import { Axis, ResponsiveSvg, usePlotContext } from 'vizlib'
import * as d3 from 'd3'

import { euclidian } from '.'
import { data } from '../data'

const yearAvgs = d3
  .groups(euclidian, d => d.year)
  .map(([year, arr]) => [year, d3.mean(arr, d => d.distance)])

console.log('ya', yearAvgs)

const Viz = () => {
  const ctx = usePlotContext()
  const x = d3
    .scaleBand()
    .domain(
      yearAvgs
        .map(d => d[0])
        .sort((a, b) => a - b)
        .map(String),
    )
    .range([0, ctx.chartWidth])
    .padding(0.2)
  const y = d3
    .scaleLinear()
    .domain(d3.extent(yearAvgs, d => d[1]))
    .range([ctx.chartHeight, 0])
    .nice()

  return (
    <>
      <Axis
        scale={x}
        orientation="bottom"
        transform={`translate(0,${ctx.chartHeight})`}
        tickValues={d3.range(1955, 2021, 5).map(String)}
      />
      <Axis scale={y} orientation="left">
        <text
          x={0}
          y={0}
          textAnchor="start"
          dominantBaseline="hanging"
          fill="currentColor"
          dx={4}
        >
          Average difference from "Average"
        </text>
      </Axis>
      <Axis
        scale={y}
        orientation="left"
        tickFormat={d => ''}
        tickSizeInner={-ctx.chartWidth}
        opacity={0.2}
      />
      {yearAvgs.map(([year, avg]) => (
        <rect
          key={year}
          x={x(year.toString())}
          y={y(avg)}
          width={x.bandwidth()}
          height={ctx.chartHeight - y(avg)}
          fill={d3.schemeTableau10[0]}
        />
      ))}
    </>
  )
}

const Years = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          alignItems: 'center',
          width: '100vw',
          maxWidth: '960px',
          margin: 'auto',
          marginBottom: '1rem',
        }}
      >
        <ResponsiveSvg aspectRatio={2.5} margin={30}>
          <Viz />
        </ResponsiveSvg>
      </div>
    </>
  )
}

export default hot(module)(Years)
