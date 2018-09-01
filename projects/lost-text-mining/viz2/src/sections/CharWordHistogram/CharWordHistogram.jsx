import React from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'

import Axis from 'components/Axis'
import Interaction from './Interaction'

import css from './CharWordHistogram.css'

export default function CharWordHistogram(props) {
  const { data, width, height, padding } = props

  if (!data.length) return null

  const chartHeight = height - padding.top - padding.bottom
  const chartWidth = width - padding.left - padding.right

  const x = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.words)])
    .range([0, chartWidth])

  const bins = d3
    .histogram()
    .value(d => d.words)
    .domain(x.domain())
    .thresholds(100)(data)

  const y1 = d3
    .scalePow()
    .exponent(0.5)
    .domain([0, d3.max(bins, d => d.length)])
    .range([chartHeight, 0])

  const y2 = d3
    .scaleLinear()
    .domain([0, 100])
    .range([chartHeight, 0])

  const line = d3
    .line()
    .x(d => x(d.x))
    .y(d => y2(d.y))
    .curve(d3.curveStepAfter)

  const halfway = d => d.x1 - (d.x1 - d.x0) / 2
  const addToLastY = (arr, val) => (R.last(arr) ? R.last(arr).y + val : val)

  const cumChars = bins.reduce(
    (r, c) => [
      ...r,
      {
        x: halfway(c),
        y: addToLastY(r, c.length / data.length * 100),
      },
    ],
    [],
  )

  const totalWords = d3.sum(data, d => d.words)
  const cumWords = bins.reduce(
    (r, c) => [
      ...r,
      {
        x: halfway(c),
        y: addToLastY(r, d3.sum(c, d => d.words) / totalWords * 100),
      },
    ],
    [],
  )

  const voronoi = d3
    .voronoi()
    .x(d => (x(d.x1) + x(d.x0)) / 2)
    .y(d => 0)
    .extent([[0, 0], [chartWidth, chartHeight]])

  return (
    <React.Fragment>
      <svg width={width} height={height}>
        <g transform={`translate(${padding.left}, ${padding.top})`}>
          <g>
            {bins.map(({ x0, x1, length }) => (
              <rect
                key={x0}
                x={x(x0)}
                y={y1(length)}
                width={x(x1) - x(x0)}
                height={chartHeight - y1(length)}
                fill="steelblue"
                stroke="#282c34"
              />
            ))}
          </g>
          <path d={line(cumChars)} className={css.cumChars} />
          <path d={line(cumWords)} className={css.cumWords} />
          <Axis
            scale={x}
            orientation="bottom"
            transform={`translate(0, ${chartHeight})`}
          />
          <Axis scale={y1} orientation="left" />
          <Axis
            scale={y2}
            orientation="right"
            transform={`translate(${chartWidth}, 0)`}
          />
          <Interaction
            polygons={voronoi.polygons(bins)}
            scales={{ x, y1, y2 }}
            derivedData={{ cumWords, cumChars }}
            width={chartWidth}
            height={chartHeight}
          />
        </g>
      </svg>
    </React.Fragment>
  )
}

CharWordHistogram.defaultProps = {
  padding: {
    top: 20,
    bottom: 25,
    left: 30,
    right: 30,
  },
  width: 700,
  height: 400,
}
