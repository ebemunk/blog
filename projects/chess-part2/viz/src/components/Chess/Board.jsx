import React from 'react'
import { range } from 'd3-array'

import Square from './Square'
import { whiteblack } from '../../util'
import { squareFromIndex } from './util'

const Board = ({ width, children }) => {
  return (
    <div style={{}}>
      <svg width={width} height={width}>
        <g>
          {range(64).map(i => {
            const { square, black } = squareFromIndex(i)
            const sqWidth = width / 8

            return (
              <Square
                key={square}
                square={square}
                width={sqWidth}
                fill={black ? whiteblack(1) : whiteblack(0)}
              />
            )
          })}
        </g>
        {children}
      </svg>
    </div>
  )
}

import { compose, pure } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
)(Board)
