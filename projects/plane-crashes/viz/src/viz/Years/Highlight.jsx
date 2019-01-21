import React from 'react'
import { Transition, animated } from 'react-spring'

const Highlight = ({ start, end, chartHeight, title, show }) => (
  <Transition
    native
    items={show}
    from={{
      end: start,
      width: 0,
      opacity: 0,
    }}
    leave={{
      end: start,
      width: 0,
      opacity: 0,
    }}
    enter={{
      start,
      end,
      width: end - start,
      opacity: 1,
    }}
  >
    {show =>
      !show
        ? () => null
        : spring => (
            <animated.g style={{ opacity: spring.opacity }}>
              <animated.rect
                x={spring.start}
                y={0}
                width={spring.width}
                height={chartHeight}
                style={{ fill: 'rgba(255,255,255, 0.1)' }}
              />
              <animated.line
                x1={spring.start}
                y1={0}
                x2={spring.start}
                y2={chartHeight}
                style={{
                  stroke: 'red',
                  strokeWidth: 1,
                  strokeDasharray: '3 3',
                }}
              />
              <animated.line
                x1={spring.end}
                y1={0}
                x2={spring.end}
                y2={chartHeight}
                style={{
                  stroke: 'red',
                  strokeWidth: 1,
                  strokeDasharray: '3 3',
                }}
              />
              <animated.text
                x={spring.start}
                y={0}
                dx={'0.3rem'}
                dy={'1rem'}
                style={{
                  fill: 'white',
                  fontSize: '0.75rem',
                }}
              >
                {title}
              </animated.text>
            </animated.g>
          )
    }
  </Transition>
)

export default Highlight
