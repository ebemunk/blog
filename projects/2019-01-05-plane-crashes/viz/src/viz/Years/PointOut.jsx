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
  const [re, setRe] = useState(false)
  const textRef = useRef(null)

  const bbox = textRef.current
    ? textRef.current.getBBox()
    : { x, y, width: 0, height: 0 }

  const updater = () => {
    const tx = bbox.x + bbox.width / 2
    const ty = bbox.y - y > 0 ? bbox.y - 5 : bbox.y + bbox.height + 5
    const r = Math.sqrt((tx - x) * (tx - x) + (ty - y) * (ty - y)) / 2
    const mx = tx - x > 0 ? tx + (tx - x) / 2 - r : tx + (x - tx) / 2 - r
    const my = ty - y > 0 ? ty + (ty - y) / 2 - r : ty + (y - ty) / 2 + r

    return {
      opacity: 1,
      x,
      y,
      tx,
      ty,
      mx,
      my,
      d: `M${x} ${y} Q ${mx} ${my} ${tx} ${ty}`,
    }
  }

  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: updater,
    update: updater,
    leave: { opacity: 0 },
    onFrame: () => setRe(!re),
  })

  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <animated.g key={key} style={{ opacity: props.opacity }}>
          {textRef.current && (
            <>
              <animated.path
                d={props.d}
                style={{
                  fill: 'none',
                  stroke: 'white',
                  strokeWidth: 1,
                  strokeDasharray: '3 3',
                }}
                markerEnd="url(#end)"
              />

              {/* <animated.line
                x1={props.x}
                y1={props.y}
                x2={props.tx}
                y2={props.ty}
                style={{
                  fill: 'none',
                  stroke: 'red',
                }}
              /> */}
              {/* <animated.circle
                r={3}
                cx={props.mx}
                cy={props.my}
                style={{ fill: 'green', stroke: 'white' }}
              /> */}
            </>
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

export default React.memo(PointOut)
