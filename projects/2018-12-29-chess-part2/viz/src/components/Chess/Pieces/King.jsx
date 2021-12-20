import React from 'react'

const King = ({ black, ...other }) => {
  if (black) return <BlackKing {...other} />
  return <WhiteKing {...other} />
}

const WhiteKing = ({ style, ...other }) => (
  <g
    style={{
      fill: 'none',
      fillRule: 'evenodd',
      stroke: '#000',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeMiterlimit: 4,
      ...style,
    }}
    {...other}
  >
    <path
      d="M 22.5,11.63 L 22.5,6"
      style={{ fill: 'none', stroke: '#000', strokeLinejoin: 'miter' }}
    />
    <path
      d="M 20,8 L 25,8"
      style={{ fill: 'none', stroke: '#000', strokeLinejoin: 'miter' }}
    />
    <path
      d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
      style={{
        fill: '#fff',
        stroke: '#000',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
      }}
    />
    <path
      d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
      style={{ fill: '#fff', stroke: '#000' }}
    />
    <path
      d="M 11.5,30 C 17,27 27,27 32.5,30"
      style={{ fill: 'none', stroke: '#000' }}
    />
    <path
      d="M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5"
      style={{ fill: 'none', stroke: '#000' }}
    />
    <path
      d="M 11.5,37 C 17,34 27,34 32.5,37"
      style={{ fill: 'none', stroke: '#000' }}
    />
  </g>
)

const BlackKing = ({ style, ...other }) => (
  <g
    style={{
      fill: 'none',
      fillRule: 'evenodd',
      stroke: '#000',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeMiterlimit: 4,
      ...style,
    }}
    {...other}
  >
    <path
      d="M 22.5,11.63 L 22.5,6"
      style={{ fill: 'none', stroke: '#000', strokeLinejoin: 'miter' }}
    />
    <path
      d="M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25"
      style={{
        fill: '#000',
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
      }}
    />
    <path
      d="M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z "
      style={{ fill: '#000', stroke: '#000' }}
    />
    <path
      d="M 20,8 L 25,8"
      style={{ fill: 'none', stroke: '#000', strokeLinejoin: 'miter' }}
    />
    <path
      d="M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85"
      style={{ fill: 'none', stroke: '#fff' }}
    />
    <path
      d="M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37"
      style={{ fill: 'none', stroke: '#fff' }}
    />
  </g>
)

import { compose, pure } from 'recompose'

export default compose(pure)(King)
