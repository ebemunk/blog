import React from 'react'
import { Spring, animated } from 'react-spring'

const Rects = ({
  data = [],
  style = {},
  x = d => d[0],
  y = d => d[1],
  width = d => d,
  height = d => d,
  className = '',
  keys,
  ...props
}) => (
  <g className={className}>
    {data.map((d, i) => (
      <Spring
        key={keys ? keys(d) : i}
        native
        to={{
          x: x instanceof Function ? x(d) : x,
          width: width instanceof Function ? width(d) : width,
          y: y instanceof Function ? y(d) : y,
          height: height instanceof Function ? height(d) : height,
        }}
      >
        {spring => (
          <animated.rect
            x={spring.x}
            width={spring.width}
            y={spring.y}
            height={spring.height}
            {...props}
            style={{
              ...(style instanceof Function ? style(d) : style),
            }}
          />
        )}
      </Spring>
    ))}
  </g>
)

import PropTypes from 'prop-types'

Rects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  style: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  x: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  y: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  className: PropTypes.string,
  keys: PropTypes.func,
}

export default Rects
