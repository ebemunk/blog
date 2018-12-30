import React from 'react'

const Queen = ({ black, ...other }) => {
  if (black) return <BlackQueen {...other} />
  return <WhiteQueen {...other} />
}

const WhiteQueen = ({ style, ...other }) => (
  <g
    style={{
      fill: '#fff',
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
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(-1,-1)"
    />
    <path
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(15.5,-5.5)"
    />
    <path
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(32,-1)"
    />
    <path
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(7,-4.5)"
    />
    <path
      d="M 9 13 A 2 2 0 1 1  5,13 A 2 2 0 1 1  9 13 z"
      transform="translate(24,-4)"
    />
    <path
      d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38,14 L 31,25 L 31,11 L 25.5,24.5 L 22.5,9.5 L 19.5,24.5 L 14,10.5 L 14,25 L 7,14 L 9,26 z "
      style={{ strokeLinecap: 'butt' }}
    />
    <path
      d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z "
      style={{ strokeLinecap: 'butt' }}
    />
    <path d="M 11.5,30 C 15,29 30,29 33.5,30" style={{ fill: 'none' }} />
    <path d="M 12,33.5 C 18,32.5 27,32.5 33,33.5" style={{ fill: 'none' }} />
  </g>
)

const BlackQueen = ({ style, ...other }) => (
  <g
    style={{
      fill: '#000',
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
    <g style={{ fill: '#000', stroke: 'none' }}>
      <circle cx="6" cy="12" r="2.75" />
      <circle cx="14" cy="9" r="2.75" />
      <circle cx="22.5" cy="8" r="2.75" />
      <circle cx="31" cy="9" r="2.75" />
      <circle cx="39" cy="12" r="2.75" />
    </g>
    <path
      d="M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z"
      style={{ strokeLinecap: 'butt', stroke: '#000' }}
    />
    <path
      d="M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z"
      style={{ strokeLinecap: 'butt' }}
    />
    <path
      d="M 11,38.5 A 35,35 1 0 0 34,38.5"
      style={{ strokeLinecap: 'butt', stroke: '#000', fill: 'none' }}
    />
    <path
      d="M 11,29 A 35,35 1 0 1 34,29"
      style={{ fill: 'none', stroke: '#fff' }}
    />
    <path
      d="M 12.5,31.5 L 32.5,31.5"
      style={{ fill: 'none', stroke: '#fff' }}
    />
    <path
      d="M 11.5,34.5 A 35,35 1 0 0 33.5,34.5"
      style={{ fill: 'none', stroke: '#fff' }}
    />
    <path
      d="M 10.5,37.5 A 35,35 1 0 0 34.5,37.5"
      style={{ fill: 'none', stroke: '#fff' }}
    />
  </g>
)

import { compose, pure } from 'recompose'

export default compose(pure)(Queen)
