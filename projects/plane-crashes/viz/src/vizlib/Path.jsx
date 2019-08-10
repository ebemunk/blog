import React, { useRef } from 'react'
// import { useSpring, animated } from 'react-spring'
import { Spring, animated as a } from 'react-spring/renderprops'
import { interpolate } from 'd3-interpolate'

function Path({ generator, data, style = {}, ...rest }) {
  // const { t } = useSpring({
  //   from: { t: 0 },
  //   to: { t: 1 },
  //   reset: true,
  // })
  const ref = useRef(null)
  const interp = interpolate(
    ref.current ? ref.current.getAttribute('d') : '',
    generator(data),
  )

  return (
    <React.Fragment>
      {/* <animated.path
        ref={ref}
        d={t.interpolate(interp)}
        style={style}
        {...rest}
      /> */}
      <Spring native reset to={{ t: 1 }} from={{ t: 0 }}>
        {({ t }) => (
          <a.path ref={ref} d={t.interpolate(interp)} style={style} {...rest} />
        )}
      </Spring>
    </React.Fragment>
  )
}

export default React.memo(Path)
