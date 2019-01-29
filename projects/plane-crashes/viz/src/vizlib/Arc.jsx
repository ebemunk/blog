import React from 'react'
import { Spring, animated } from 'react-spring'

const Arc = ({ ...rest }, ref) => (
  <Spring native to={{ t: 1 }}>
    {spring => <animated.path ref={ref} {...rest} />}
  </Spring>
)

export default React.forwardRef(Arc)
