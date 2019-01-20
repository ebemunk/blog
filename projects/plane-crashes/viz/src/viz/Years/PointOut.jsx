import React from 'react'
import { Spring, animated } from 'react-spring'

const PointOut = ({ x, y, dx, dy, title, color }) => {
  const source = { x, y }
  const target = { x: x + dx - 5, y: y + dy }
  const r = Math.sqrt(dx * dx + dy * dy)

  return (
    <Spring
      native
      from={{
        opacity: 0,
      }}
      to={{
        x,
        y,
        d: `M${source.x},${source.y}A${r},${r} 0 0,1 ${target.x},${target.y}`,
        opacity: 1,
      }}
    >
      {spring => (
        <animated.g style={{ opacity: spring.opacity }}>
          <animated.path
            d={spring.d}
            style={{
              fill: 'none',
              stroke: 'white',
              strokeWidth: 1,
              strokeDasharray: '3 3',
            }}
            markerEnd="url(#end)"
          />
          <animated.circle
            r={5}
            cx={spring.x}
            cy={spring.y}
            style={{ fill: color, stroke: '#282c34', strokeWidth: 3 }}
          />
          <animated.text
            x={spring.x}
            y={spring.y}
            dx={dx}
            dy={dy}
            alignmentBaseline="middle"
            style={{ fill: 'white', fontSize: '0.75rem' }}
          >
            {title}
          </animated.text>
        </animated.g>
      )}
    </Spring>
  )
}

export default PointOut
