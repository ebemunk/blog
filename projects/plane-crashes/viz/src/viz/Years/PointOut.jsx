import React, { useRef, useState } from 'react'
import { useTransition, animated } from 'react-spring'

const PointOut = ({
  x,
  y,
  dx,
  dy,
  title,
  color,
  show,
  textAnchor,
  style = {},
}) => {
  const textRef = useRef(null)
  const source = { x, y }
  const r = Math.sqrt(dx * dx + dy * dy)

  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: () => {
      const bbox = textRef.current
        ? textRef.current.getBBox()
        : { x: 0, y: 0, width: 0, height: 0 }

      return {
        opacity: 1,
        x,
        y,
        tx: bbox.x + bbox.width / 2,
        ty: bbox.y + bbox.height / 2,
        // d: target
        //   ? `M${source.x},${source.y}A${r},${r} 0 0,1 ${target.x},${target.y}`
        //   : '',
      }
    },
    update: () => {
      const bbox = textRef.current
        ? textRef.current.getBBox()
        : { x: 0, y: 0, width: 0, height: 0 }

      console.log('update', bbox.x + bbox.width / 2, bbox.y + bbox.height / 2)

      return {
        x,
        y,
        tx: bbox.x + bbox.width / 2,
        ty: bbox.y + bbox.height / 2,
        // d: target
        //   ? `M${source.x},${source.y}A${r},${r} 0 0,1 ${target.x},${target.y}`
        //   : '',
      }
    },
    leave: { opacity: 0 },
  })

  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <animated.g key={key} style={{ opacity: props.opacity }}>
          {/* <animated.path
            d={props.d}
            style={{
              fill: 'none',
              stroke: 'white',
              strokeWidth: 1,
              strokeDasharray: '3 3',
            }}
            markerEnd="url(#end)"
          /> */}
          {textRef.current && (
            <animated.line
              x1={source.x}
              y1={source.y}
              x2={props.tx}
              y2={props.ty}
              style={{
                fill: 'none',
                stroke: 'white',
              }}
            />
          )}
          <animated.circle
            r={5}
            cx={props.x}
            cy={props.y}
            style={{ fill: color, stroke: '#282c34', strokeWidth: 3, ...style }}
          />
          <animated.text
            ref={textRef}
            x={props.x}
            y={props.y}
            dx={dx}
            dy={dy}
            alignmentBaseline="middle"
            style={{ fill: 'white', fontSize: '0.75rem', textAnchor }}
          >
            {title}
          </animated.text>
        </animated.g>
      ),
  )
}

export default PointOut
