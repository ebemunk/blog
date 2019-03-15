import React from 'react'
import { useSpring, animated } from 'react-spring'

function Path({ generator, data, style = {}, ...rest }) {
  const { d } = useSpring({ to: { d: generator(data) } })

  return <animated.path d={d} style={style} {...rest} />
}

export default React.memo(Path)
