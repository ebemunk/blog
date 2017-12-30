import React from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'

import { Axis } from '../../components'

import style from './CharWordHistogram.css'

export default function CharWordHistogram(props) {
  const {
    data,
    width,
    height,
    padding,
  } = props

  if( !data.length ) return null

  const chartHeight = height - padding.top - padding.bottom
  const chartWidth = width - padding.left - padding.right

  const x = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.words)])
    .range([0, chartWidth])

  const bins = d3.histogram()
    .value(d => d.words)
    .domain(x.domain())
    .thresholds(100)
    (data)

  const y1 = d3.scaleLinear()
    .domain([0, d3.max(bins, d => d.length)])
    .range([chartHeight, 0])

  const y2 = d3.scaleLinear()
    .domain([0, 100])
    .range([chartHeight, 0])

  const line = d3.line()
    .x(d => x(d.x))
    .y(d => y2(d.y))

  const halfway = d => d.x1 - (d.x1 - d.x0) / 2
  const addToLastY = (arr, val) => R.last(arr) ? R.last(arr).y + val : val

  const cumChars = bins.reduce((r, c) => ([
    ...r,
    {
      x: halfway(c),
      y: addToLastY(r, c.length / data.length * 100)
    }
  ]), [])

  const totalWords = d3.sum(data, d => d.words)
  const cumWords = bins.reduce((r, c) => ([
    ...r,
    {
      x: halfway(c),
      y: addToLastY(r, d3.sum(c, d => d.words) / totalWords * 100)
    }
  ]), [])

  return (
    <React.Fragment>
      <svg
        width={width}
        height={height}
      >
        <g transform={`translate(${padding.left}, ${padding.top})`}>
          <Axis
            scale={x}
            orientation="bottom"
            transform={`translate(0, ${chartHeight})`}
          />
          <Axis
            scale={y1}
            orientation="left"
          />
          <Axis
            scale={y2}
            orientation="right"
            transform={`translate(${width - padding.left - padding.right}, 0)`}
          />
          <g>
            {bins.map(({ x0, x1, length }) => (
              <rect
                key={x0}
                x={x(x0)}
                y={y1(length)}
                width={x(x1) - x(x0) - 1}
                height={chartHeight - y1(length)}
                fill="steelblue"
              />
            ))}
          </g>
          <path
            d={line(cumChars)}
            fill="none"
            stroke="yellow"
          />
          <path
            d={line(cumWords)}
            fill="none"
            stroke="red"
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
