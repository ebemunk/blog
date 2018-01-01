import React from 'react'
import * as d3 from 'd3'

import Dimension from './Dimension'

export default function Personalities(props) {
  const {
    width,
    padding,
    dat
  } = props

  if (!dat) return null

  const odat = dat.profile.personality.find(d => d.trait_id === 'big5_openness')

  const x = d3.scaleLinear()
  .domain([0, 1])
  .range([0, width - padding.left - padding.right])

  const big5x = d3.scaleLinear()
  .domain([0, 1])
  .range([0, width - padding.left - padding.right + 100])

  const barWidth = width - padding.left - padding.right
  const barHeight = 20

  const data = dat.profile.personality

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      <div style={{ width: '33%' }}>
        <div>Big 5</div>
        <svg
          width={width}
          height={6 * barHeight + padding.top + padding.bottom}
        >
          <g transform={`translate(${padding.left - 50}, ${padding.top})`}>
            <Dimension
              x={big5x}
              barWidth={barWidth + 100}
              barHeight={barHeight}
              dimension={{
                children: dat.profile.personality.map(d => ({
                  trait_id: d.trait_id,
                  percentile: d.percentile,
                }))
              }}
            />
          </g>
        </svg>
      </div>
      {data.map((d, i) => (
        <div style={{ width: '33%' }} key={d.name}>
          <div>{d.name}</div>
          <svg
            width={width}
            height={6 * barHeight + padding.top + padding.bottom}
          >
            <g transform={`translate(${padding.left}, ${padding.top})`}>
              <Dimension
                x={x}
                barWidth={barWidth}
                barHeight={barHeight}
                dimension={d}
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
