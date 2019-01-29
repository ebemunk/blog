import React from 'react'
import { Spring, animated } from 'react-spring'

const Arcs = ({
  arcs = [],
  arcGenerator,
  style = {},
  onMouseEnter = () => {},
  onMouseMove = () => {},
  ...rest
}) => (
  <React.Fragment>
    {arcs.map((d, i) => (
      <Spring native to={{ t: 1 }} key={i}>
        {spring => (
          <animated.path
            d={arcGenerator(d)}
            style={style instanceof Function ? style(d) : style}
            onMouseEnter={e => onMouseEnter(e, d)}
            onMouseMove={e => onMouseMove(e, d)}
            {...rest}
          />
        )}
      </Spring>
    ))}
  </React.Fragment>
)

export default Arcs
