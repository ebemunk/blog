import React from 'react'
import * as d3 from 'd3'
import * as R from 'ramda'

import dimensions from './dimensions'
import labels from './labels'
import Dimension from './Dimension'

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
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {dimensions.map((dimension) => (
        <div style={{ width: '450px', flexShrink: 0 }} key={dimension.key}>
          <div style={{ textAlign: 'center' }}>{labels[dimension.key].label}</div>
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
