import React from 'react'
import * as d3 from 'd3'
import classnames from 'classnames'

import dimensions from './dimensions'
import labels from './labels'
import Dimension from './Dimension'

import style from './Personalities.css'

export default function Personalities(props) {
  const {
    width,
    padding,
    data
  } = props

  const x = d3.scaleLinear()
  .domain([0, 1])
  .range([0, width - padding.left - padding.right])

  const barWidth = width - padding.left - padding.right
  const barHeight = 30

  return (
    <div className={style.dimensions}>
      {dimensions.map((dimension) => (
        <div key={dimension.key} className={style.dimension}>
          <div className={style.label}>{labels[dimension.key].label}</div>
          <svg
            width={width}
            height={6 * barHeight + padding.top + padding.bottom}
          >
            <g transform={`translate(${padding.left}, ${padding.top})`}>
              <Dimension
                x={x}
                barWidth={barWidth}
                barHeight={barHeight}
                dimension={dimension}
                data={data}
              />
            </g>
          </svg>
        </div>
      ))}
    </div>
  )
}

Personalities.defaultProps = {
  width: 450,
  padding: {
    top: 0,
    left: 150,
    right: 150,
    bottom: 0
  }
}
