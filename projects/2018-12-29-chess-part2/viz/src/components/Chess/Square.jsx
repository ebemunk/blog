import React from 'react'
import { compose, pure } from 'recompose'

import { translateSq } from './util'

const Square = ({ width, square, ...other }) => (
  <rect
    width={width}
    height={width}
    transform={translateSq(square, width)}
    {...other}
  />
)

export default compose(pure)(Square)
