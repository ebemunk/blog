import k from './pieces/k.svg'
import q from './pieces/q.svg'
import r from './pieces/r.svg'
import b from './pieces/b.svg'
import n from './pieces/n.svg'
import p from './pieces/p.svg'
import K from './pieces/k-w.svg'
import Q from './pieces/q-w.svg'
import R from './pieces/r-w.svg'
import B from './pieces/b-w.svg'
import N from './pieces/n-w.svg'
import P from './pieces/p-w.svg'

import './style.css'
import { range } from 'd3'

export type BoardRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

export interface Square {
  x: BoardRange
  y: BoardRange
  file: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h'
  rank: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
}

const pieceToSrc = {
  k,
  q,
  r,
  b,
  n,
  p,
  K,
  Q,
  R,
  B,
  N,
  P,
}

function isLight(square: Square) {
  return (!(square.x % 2) && !(square.y % 2)) || (square.x % 2 && square.y % 2)
}

function xyToFileRank(x, y) {
  let file = String.fromCharCode(97 + x)
  let rank = 8 - y

  return [file, rank]
}

function boardSquares(): Square[] {
  var squares = []

  for (let i = 0; i < 64; i++) {
    const x = i % 8
    const y = Math.floor(i / 8)
    const [file, rank] = xyToFileRank(x, y)

    squares.push({
      x,
      y,
      file,
      rank,
    })
  }

  return squares
}

export interface Piece extends Square {
  piece: 'r' | 'b' | 'n' | 'q' | 'k' | 'p' | 'R' | 'B' | 'N' | 'Q' | 'K' | 'P'
}

const pieceSymbols = 'rbnqkpRBNQKP'.split('')

function piecesFromFen(fen: string): Piece[] {
  if (!fen) return []

  const pos = fen.replace(/ .+$/, '')
  const ranks = pos.split('/')
  const pieces = []

  for (let [y, rank] of ranks.entries()) {
    let x = 0

    for (let char of rank) {
      if (pieceSymbols.includes(char)) {
        const [file, rank] = xyToFileRank(x, y)
        pieces.push({
          x,
          y,
          file,
          rank,
          piece: char,
        })
        x++
      } else {
        x += +char
      }
    }
  }

  return pieces
}

const board = ({
  width,
  height,
  size = width,
  fen = '',
  showLabels = false,
}: {
  width?: number
  height?: number
  size: number
  fen?: string
  showLabels?: boolean
}) => selection => {
  const squareSize = size / 8

  selection
    .selectAll('.bg')
    .data([true])
    .join('rect')
    .attr('class', 'bg')
    .attr('width', size)
    .attr('height', size)
    .attr('stroke', 'black')

  selection
    .selectAll('.square')
    .data(boardSquares())
    .join('rect')
    .attr('class', d => (isLight(d) ? 'square light' : 'square dark'))
    .attr(
      'transform',
      d => `translate(${d.x * squareSize},${d.y * squareSize})`
    )
    .attr('width', squareSize)
    .attr('height', squareSize)
    .attr('fill', 'currentColor')

  selection
    .selectAll('.piece')
    .data(piecesFromFen(fen), d => d.piece)
    .join('image')
    .attr('class', 'piece')
    .attr(
      'transform',
      d => `translate(${d.x * squareSize},${d.y * squareSize})`
    )
    .attr('width', squareSize)
    .attr('height', squareSize)
    .attr('href', d => pieceToSrc[d.piece])

  if (showLabels) {
    selection
      .selectAll('.rank')
      .data(range(8))
      .join('text')
      .attr('class', 'rank label')
      .attr('transform', d => `translate(0,${(7 - d) * squareSize})`)
      .attr('dominant-baseline', 'hanging')
      .attr('dy', '0.25em')
      .attr('dx', '0.25em')
      .attr('fill', 'currentColor')
      .text(d => d + 1)

    selection
      .selectAll('.file')
      .data(range(8))
      .join('text')
      .attr('class', 'file label')
      .attr(
        'transform',
        d => `translate(${(7 - d) * squareSize + squareSize},${size})`
      )
      .attr('text-anchor', 'end')
      .attr('dy', '-0.25em')
      .attr('dx', '-0.25em')
      .attr('fill', 'currentColor')
      .text(d => String.fromCharCode(97 + (7 - d)))
  }
}

export default board
