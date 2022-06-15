import React from 'react'
import { hot } from 'react-hot-loader'
import { Axis, ResponsiveSvg, usePlotContext } from 'vizlib'
import {
  mean,
  scaleLinear,
  extent,
  bin,
  max,
  area as d3area,
  curveBasis,
  schemeTableau10,
  format,
} from 'd3'
import { data } from '../pud/data/data'
import { PLAYMATE_PINK } from '../pud/util'

const kernelSize = 0.02

function epanechnikov(bandwidth) {
  return x =>
    Math.abs(x / bandwidth) <= 1 ? (0.75 * (1 - x * x)) / bandwidth : 0
}

function kde(kernel, thresholds, data) {
  return thresholds.map(t => [t, mean(data, d => kernel(t - d))])
}

const whr = data.map(d => d.waistCM / d.hipsCM)

const Viz = () => {
  const ctx = usePlotContext()

  const xScale = scaleLinear()
    .domain(extent(whr))
    .range([0, ctx.chartWidth])
    .nice()

  const bins = bin().domain(xScale.domain()).thresholds(xScale.ticks(26))(whr)
  const density = kde(epanechnikov(kernelSize), xScale.ticks(26), whr)

  const yScale = scaleLinear()
    .domain([0, max(bins, d => d.length) / whr.length])
    .range([ctx.chartHeight, 0])
    .nice()

  const y2 = scaleLinear()
    .domain([0, max(density, d => d[1])])
    .range([ctx.chartHeight, 0])

  const area = d3area()
    .curve(curveBasis)
    .x(d => xScale(d[0]))
    .y1(d => y2(d[1]))
    .y0(ctx.chartHeight)

  return (
    <>
      <path
        d={area(density)}
        fill={schemeTableau10[9]}
        fillOpacity={0.2}
        stroke={schemeTableau10[9]}
        strokeWidth={2}
      />
      <Axis
        scale={xScale}
        orientation="bottom"
        transform={`translate(0,${ctx.chartHeight})`}
        tickValues={xScale
          .ticks(26)
          .filter((t, i) => (ctx.chartWidth < 600 ? i % 3 === 0 : true))}
      >
        <text
          fontSize={12}
          textAnchor="end"
          x={ctx.chartWidth}
          fill="currentColor"
          dy={-12}
        >
          Waist-to-Hip Ratio
        </text>
      </Axis>
      <Axis scale={yScale} orientation="left" tickFormat={format('.2p')} />
      {bins.map(d => (
        <rect
          key={`${d.x0}-${d.x1}`}
          x={xScale(d.x0)}
          width={Math.max(0, xScale(d.x1) - xScale(d.x0) - 1)}
          y={yScale(d.length / whr.length)}
          height={ctx.chartHeight - yScale(d.length / whr.length)}
          fill={PLAYMATE_PINK}
        />
      ))}
      <g transform={`translate(${xScale(0.7)},0)`} stroke={schemeTableau10[1]}>
        <line y1={0} y2={ctx.chartHeight} strokeWidth={2} />
        <text fontSize={12} dx={4} alignmentBaseline="hanging">
          Indo-European cultures
        </text>
      </g>
      <g transform={`translate(${xScale(0.6)},0)`} stroke={schemeTableau10[2]}>
        <line y1={0} y2={ctx.chartHeight} strokeWidth={2} />
        <text fontSize={12} dx={4} alignmentBaseline="hanging">
          China
        </text>
      </g>
      <g transform={`translate(${xScale(0.8)},14)`} stroke={schemeTableau10[3]}>
        <line y1={0} y2={ctx.chartHeight - 14} strokeWidth={2} />
        <text fontSize={12} dx={4} alignmentBaseline="hanging">
          Cameroon & Hadza of Tanzania
        </text>
      </g>
    </>
  )
}

const WHR = () => {
  return (
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
      <ResponsiveSvg
        aspectRatio={1.68}
        margin={{ top: 10, left: 45, bottom: 40, right: 10 }}
      >
        <Viz />
      </ResponsiveSvg>
    </div>
  )
}

export default hot(module)(WHR)
