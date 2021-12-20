import React, { useContext } from 'react'
import { useTransition, animated } from 'react-spring'

import { PlotContext } from '../../vizlib/Plot'

const Highlight = ({ start, end, title, show }) => {
  const { chartHeight } = useContext(PlotContext)
  const transitions = useTransition(show, null, {
    from: {
      end: start,
      width: 0,
      opacity: 0,
    },
    enter: {
      start,
      end,
      width: end - start,
      opacity: 1,
    },
    leave: {
      end: start,
      width: 0,
      opacity: 0,
    },
  })

  return transitions.map(
    ({ item, props, key }) =>
      item && (
        <animated.g style={{ opacity: props.opacity }} key={key}>
          <animated.rect
            x={props.start}
            y={0}
            width={props.width}
            height={chartHeight}
            style={{ fill: 'rgba(255, 255, 255, 0.1)' }}
          />
          <animated.line
            x1={props.start}
            y1={0}
            x2={props.start}
            y2={chartHeight}
            style={{
              stroke: 'white',
              strokeWidth: 1,
              strokeDasharray: '3 3',
            }}
          />
          <animated.line
            x1={props.end}
            y1={0}
            x2={props.end}
            y2={chartHeight}
            style={{
              stroke: 'white',
              strokeWidth: 1,
              strokeDasharray: '3 3',
            }}
          />
          <animated.text
            x={props.start}
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
      ),
  )
}

export default React.memo(Highlight)
