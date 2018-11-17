import React from 'react'
import { compose, pure, withState } from 'recompose'
import { range, extent } from 'd3-array'
import { scaleLinear, scalePow } from 'd3-scale'

import { whiteblack } from '../util'

const getFileRank = square => {
  const file = 'abcdefgh'.indexOf(square[0])
  const rank = +square[1]
  return { file, rank }
}

const getSqCoords = (square, width, midpoint = false) => {
  const { file, rank } = getFileRank(square)
  let x = file * width
  let y = (8 - rank) * width

  if (midpoint) {
    x += width / 2
    y += width / 2
  }

  return [x, y]
}

const translateSq = (square, width, midpoint = false) => {
  const [x, y] = getSqCoords(square, width, midpoint)
  return `translate(${x}, ${y})`
}

export const Square = compose(pure)(
  //
  ({ width, square, ...other }) => (
    <rect
      width={width}
      height={width}
      transform={translateSq(square, width)}
      {...other}
    />
  ),
)

export const Pawn = ({ square, width, black, style, ...other }) => (
  <path
    d="M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z "
    style={{
      fill: black ? '#000' : '#fff',
      fillRule: 'nonzero',
      stroke: '#000',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'miter',
      strokeMiterlimit: 4,
      transform: 'scale',
      ...style,
    }}
    transform={`${translateSq(square, width)} scale(${width / 45})`}
    {...other}
  />
)

// import { scaleSequential } from 'd3-scale'
// import { interpolateInferno } from 'd3-scale-chromatic'
import { interpolateHcl } from 'd3-interpolate'
import { scaleLog } from 'd3-scale'
export const Paths = compose(pure)(
  //
  ({ data, sqWidth }) => {
    const scale = scaleLinear()
      .domain(extent(Object.values(data)))
      .range([1, 20])

    // const color = scaleSequential(interpolateInferno).domain(
    //   extent(Object.values(data)),
    // )
    const color = scaleLog()
      // .exponent(0.1)
      .domain(extent(Object.values(data)))
      .range(['black', 'red'])
      .interpolate(interpolateHcl)

    return Object.keys(data).map(k => {
      const [from, to] = k.split('-')

      const [x1, y1] = getSqCoords(from, sqWidth, true)
      const [x2, y2] = getSqCoords(to, sqWidth, true)

      return (
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          // stroke="red"
          stroke={color(data[k])}
          // strokeWidth={scale(data[k])}
          strokeWidth={5}
          strokeLinecap="round"
          key={k}
        />
      )
    })
  },
)

const ChessBoard = ({ width, children }) => {
  return (
    <div style={{}}>
      <svg width={width} height={width}>
        {range(64).map(i => {
          const file = i % 8
          const rank = Math.floor(i / 8)
          const black = (file + rank) % 2 === 1
          const sqWidth = width / 8

          return (
            <Square
              key={i}
              square={`${'abcdefgh'[file]}${rank + 1}`}
              width={sqWidth}
              fill={black ? whiteblack(1) : whiteblack(0)}
            />
          )
        })}
        {children}
      </svg>
    </div>
  )
}

import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
)(ChessBoard)
