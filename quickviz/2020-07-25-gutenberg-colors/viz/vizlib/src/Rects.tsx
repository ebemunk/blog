import React, { CSSProperties } from 'react'
import { useSprings, animated } from 'react-spring'

type StyleFunction = (d: any) => CSSProperties

export interface Props {
  data: any
  style?: CSSProperties | StyleFunction
  x?: (d: any) => number
  y?: (d: any) => number
  width?: (d: any) => number
  height?: (d: any) => number
  className?: string
  keys?: (d: any) => string
  [key: string]: any
}

const Rects: React.FC<Props> = ({
  data = [],
  style = {},
  x = d => d[0],
  y = d => d[1],
  width = d => d,
  height = d => d,
  className = '',
  keys,
  ...props
}) => {
  const springs = useSprings(
    data.length,
    data.map((d: any) => ({
      x: x(d),
      width: width(d),
      y: y(d),
      height: height(d),
    })),
  )

  return (
    <g className={className}>
      {data.map((d: any, i: number) => (
        <animated.rect
          key={keys ? keys(d) : i}
          // @ts-ignore
          x={springs[i].x}
          // @ts-ignore
          width={springs[i].width}
          // @ts-ignore
          y={springs[i].y}
          // @ts-ignore
          height={springs[i].height}
          {...props}
          style={{
            ...(style instanceof Function ? style(d) : style),
          }}
        />
      ))}
    </g>
  )
}

export default Rects
