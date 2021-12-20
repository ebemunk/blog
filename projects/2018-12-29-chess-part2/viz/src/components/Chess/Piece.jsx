import React from 'react'

import Pieces from './Pieces'
import { translateSq } from './util'

const Piece = ({ type, square, width, ...other }) => {
  const Component = Pieces[type.toUpperCase()]
  if (!Component) return null

  return (
    <Component
      transform={`${translateSq(square, width)} scale(${width / 45})`}
      black={type.toLowerCase() === type}
      {...other}
    />
  )
}

export default Piece
