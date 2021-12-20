import React from 'react'
import { useSpring, animated, to } from 'react-spring'
import { interpolate } from 'd3-interpolate'

import usePrevious from './util/usePrevious'

export type PathProps = {
  generator: (data: any[]) => string
  data: any[]
  style?: React.CSSProperties
  spring?: any
  children?: React.ReactNode
  [key: string]: any
}

const Path = ({
  generator,
  data,
  style = {},
  spring = {},
  children = null,
  ...rest
}: PathProps) => {
  const { t } = useSpring({
    from: { t: 0 },
    to: { t: 1 },
    reset: true,
    ...spring,
  })

  const prevD = usePrevious(generator(data))
  const interpolator = React.useRef(interpolate('', prevD ?? ''))

  React.useEffect(() => {
    // @ts-ignore
    interpolator.current = interpolate(prevD, generator(data))
  }, [generator, data])

  return (
    <animated.path
      // d={t.interpolate((t: number) => interpolator.current(t))}
      // d={t.to((t: number) => interpolator.current(t))}
      // @ts-ignore
      d={to([t], (tt: number) => interpolator.current(tt))}
      style={style}
      {...rest}
    >
      {children}
    </animated.path>
  )
}

export default Path
