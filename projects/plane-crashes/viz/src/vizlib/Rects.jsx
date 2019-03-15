import React from 'react'
import { useSprings, animated } from 'react-spring'

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
}) => {
  const springs = useSprings(
    data.length,
    data.map(d => ({
      x: x instanceof Function ? x(d) : x,
      width: width instanceof Function ? width(d) : width,
      y: y instanceof Function ? y(d) : y,
      height: height instanceof Function ? height(d) : height,
    })),
  )

  return (
    <g className={className}>
      {data.map((d, i) => (
        <animated.rect
          key={keys ? keys(d) : i}
          x={springs[i].x}
          width={springs[i].width}
          y={springs[i].y}
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

export default React.memo(Rects)
