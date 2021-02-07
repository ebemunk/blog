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

type BoardRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

interface Square {
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

interface Piece extends Square {
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
  fen = '',
}: {
  width: number
  height: number
  fen?: string
}) => selection => {
  selection
    .selectAll('.bg')
    .data([true])
    .join('rect')
    .attr('class', 'bg')
    .attr('width', width)
    .attr('height', height)
    .attr('stroke', 'black')

  selection
    .selectAll('.square')
    .data(boardSquares())
    .join('rect')
    .attr('class', d => (isLight(d) ? 'square light' : 'square dark'))
    .attr(
      'transform',
      d => `translate(${d.x * (width / 8)},${d.y * (height / 8)})`
    )
    .attr('width', width / 8)
    .attr('height', height / 8)
    .attr('fill', 'currentColor')

  selection
    .selectAll('.piece')
    .data(piecesFromFen(fen), d => d.piece)
    .join('image')
    .attr('class', 'piece')
    .attr(
      'transform',
      d => `translate(${d.x * (width / 8)},${d.y * (height / 8)})`
    )
    .attr('width', width / 8)
    .attr('height', height / 8)
    .attr('href', d => pieceToSrc[d.piece])
}

export default board
