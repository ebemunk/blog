import React from 'react'
import { Spring, animated } from 'react-spring'

const Path = ({ generator, data, style = {}, ...rest }) => (
  <Spring
    native
    to={{
      d: generator(data),
    }}
  >
    {spring => (
      <animated.path
        d={spring.d}
        style={{
          ...style,
        }}
        {...rest}
      />
    )}
  </Spring>
)

export default Path
