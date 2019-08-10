import React, { useContext } from 'react'
import { useSprings, animated } from 'react-spring'

import { PlotContext } from './Plot'

const GridLines = ({ scale, ticks, orientation, style, ...props }) => {
  const vertical = orientation === 'vertical'
  const tickArr = scale.ticks(ticks)

  const { chartHeight, chartWidth } = useContext(PlotContext)
  const springs = useSprings(
    tickArr.length,
    tickArr.map(tick => ({
      x1: vertical ? scale(tick) + 0.5 : 0,
      y1: vertical ? 0 : scale(tick) + 0.5,
      x2: vertical ? scale(tick) + 0.5 : chartWidth,
      y2: vertical ? chartHeight : scale(tick) + 0.5,
    })),
  )

  return (
    <g>
      {tickArr.map((tick, i) => (
        <animated.line
          key={tick}
          x1={springs[i].x1}
          y1={springs[i].y1}
          x2={springs[i].x2}
          y2={springs[i].y2}
          {...props}
          style={{
            stroke: 'rgba(255,255,255,0.3)',
            ...style,
          }}
        />
      ))}
    </g>
  )
}

export default React.memo(GridLines)
