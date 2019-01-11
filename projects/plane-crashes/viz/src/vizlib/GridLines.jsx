import React from 'react'

import { PlotContext } from './Plot'

export default function GridLines({ scale, ticks, orientation, ...props }) {
  const vertical = orientation === 'vertical'

  return (
    <PlotContext.Consumer>
      {({ chartHeight, chartWidth }) => (
        <g>
          {scale.ticks(ticks).map(tick => (
            <line
              key={tick}
              x1={vertical ? scale(tick) : 0}
              y1={vertical ? 0 : scale(tick)}
              x2={vertical ? scale(tick) : chartWidth}
              y2={vertical ? chartHeight : scale(tick)}
              {...props}
            />
          ))}
        </g>
      )}
    </PlotContext.Consumer>
  )
}
