import React from 'react'
import { useSprings, animated } from 'react-spring'

import usePlotContext from './usePlotContext'

export interface Props {
  scale: any
  ticks?: number[]
  vertical?: boolean
  style?: React.CSSProperties
  [key: string]: any
}

const GridLines: React.FC<Props> = ({
  scale,
  ticks = scale.ticks ? scale.ticks() : scale.domain(),
  vertical = false,
  style = {},
  ...props
}) => {
  const { chartHeight, chartWidth } = usePlotContext()
  // @ts-ignore
  const [springs, setSprings, stopSprings] = useSprings(
    ticks.length,
    (index: number) => ({
      x1: vertical ? scale(ticks[index]) : 0,
      y1: vertical ? 0 : scale(ticks[index]),
      x2: vertical ? scale(ticks[index]) : chartWidth,
      y2: vertical ? chartHeight : scale(ticks[index]),
    }),
  )

  React.useEffect(() => {
    // @ts-ignore
    setSprings(index => ({
      x1: vertical ? scale(ticks[index]) : 0,
      y1: vertical ? 0 : scale(ticks[index]),
      x2: vertical ? scale(ticks[index]) : chartWidth,
      y2: vertical ? chartHeight : scale(ticks[index]),
    }))

    // @ts-ignore
    return () => stopSprings()
  }, [scale, ticks])

  return (
    <g>
      {ticks.map((tick: number, i: number) => (
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
