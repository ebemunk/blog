import React from 'react'
import { Spring, animated } from 'react-spring'

import { PlotContext } from './Plot'

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2 // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset)
  return function(d) {
    return +scale(d) + offset
  }
}

export default function GridLines({
  scale,
  ticks,
  orientation,
  style,
  ...props
}) {
  const vertical = orientation === 'vertical'

  return (
    <PlotContext.Consumer>
      {({ chartHeight, chartWidth }) => (
        <g>
          {scale.ticks(ticks).map(tick => (
            <Spring
              key={tick}
              native
              to={{
                x1: vertical ? scale(tick) + 0.5 : 0,
                y1: vertical ? 0 : scale(tick) + 0.5,
                x2: vertical ? scale(tick) + 0.5 : chartWidth,
                y2: vertical ? chartHeight : scale(tick) + 0.5,
              }}
            >
              {spring => (
                <animated.line
                  x1={spring.x1}
                  y1={spring.y1}
                  x2={spring.x2}
                  y2={spring.y2}
                  {...props}
                  style={{
                    stroke: 'rgba(255,255,255,0.3)',
                    ...style,
                  }}
                />
              )}
            </Spring>
          ))}
        </g>
      )}
    </PlotContext.Consumer>
  )
}