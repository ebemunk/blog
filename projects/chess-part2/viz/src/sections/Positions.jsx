import React from 'react'
import { range } from 'd3-array'

import data from '../data'

import Board from '../components/Chess/Board'
import Piece from '../components/Chess/Piece'
import { squareFromIndex } from '../components/Chess/util'

const fenToArr = fen => {
  const squares = fen
    .match(/(([PpNnBbRrQqKk1-8]+(\/?))+) [bw] .+/)[1]
    .split('/')
    .reduce((acc, val) => acc.concat(val.split('')), [])
    .reduce((acc, val) => {
      const empty = val.match(/[1-8]/)
      if (empty) {
        return acc.concat(range(empty).map(i => ''))
      } else {
        return acc.concat(val)
      }
    }, [])

  console.log('a', squares)
  return squares
}

const Positions = ({}) => {
  const datz = data.Positions.slice().sort((a, b) => b.y - a.y)

  return (
    <div>
      {datz.slice(0, 10).map(d => (
        <div key={d.x}>
          {d.y}: {d.x}
          <Board width={200}>
            {fenToArr(d.x).map(
              (piece, i) =>
                !!piece && (
                  <Piece
                    type={piece}
                    square={squareFromIndex(i).square}
                    width={200 / 8}
                  />
                ),
            )}
          </Board>
        </div>
      ))}
    </div>
  )
}

import { compose, pure, withState } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
)(Positions)
