import * as d3 from 'd3'
import board from '../board'

import { Piece } from '../board'

import './style.css'

const movepaths = (domEl, data) => {
  const container = d3.select(domEl)

  const width = 700
  const height = 550

  const svg = container
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const boardG = svg
    .append('g')
    .attr('class', 'paths-board')
    .call(
      board({
        size: width - 150 - 10,
        showLabels: true,
      })
    )

  const pieceBoardG = svg
    .append('g')
    .attr('class', 'piece-board')
    .attr('transform', `translate(${width - 150},${width / 2 - 150})`)
    .call(
      board({
        size: 150,
        fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
      })
    )

  let accessor = 'Nb1'

  const pieceBoardSquareSize = 150 / 8
  pieceBoardG
    .insert('rect', '.piece')
    .attr('class', 'highlight')
    .attr('x', pieceBoardSquareSize)
    .attr('y', pieceBoardSquareSize * 7)
    .attr('width', pieceBoardSquareSize)
    .attr('height', pieceBoardSquareSize)
    .attr('fill', 'currentColor')

  pieceBoardG.selectAll('.piece').on('click', (evt, d: Piece) => {
    if (['P', 'p'].includes(d.piece)) {
      accessor = d.file + d.rank
    } else {
      accessor = d.piece.toUpperCase() + d.file + d.rank
    }
    drawPaths()
    const x = d.file.charCodeAt(0) - 97
    const y = 8 - d.rank

    pieceBoardG
      .select('.highlight')
      .attr('x', x * pieceBoardSquareSize)
      .attr('y', y * pieceBoardSquareSize)
  })

  drawPaths()

  function drawPaths() {
    svg.selectAll('path').remove()

    svg
      .append('g')
      .attr('class', 'paths')
      .selectAll('path')
      .data(
        Object.entries(data[accessor]).flatMap(([squares, count]) => {
          const [start, end] = getSquareCoords(squares, (width - 150 - 10) / 8)

          //the orthogonal vector for vector [s, e]
          //used for the bezier control point
          let orthogonal = {
            x: -(end.y - start.y),
            y: end.x - start.x,
          }

          //get norm (magnitude) of orthogonal
          let norm = Math.sqrt(
            Math.pow(orthogonal.x, 2) + Math.pow(orthogonal.y, 2)
          )
          //scale factor to determine distance of control point from the end point
          let scaleFactor =
            Math.sqrt(
              Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
            ) / 2

          //transform the orthogonal vector
          orthogonal.x /= norm
          orthogonal.y /= norm

          orthogonal.x *= scaleFactor
          orthogonal.y *= scaleFactor

          let controlPoint

          //determine which side the control point should be
          //with respect to the orthogonal vector
          if (end.x < start.x) {
            controlPoint = {
              x: end.x + orthogonal.x,
              y: end.y + orthogonal.y,
            }
          } else {
            controlPoint = {
              x: end.x - orthogonal.x,
              y: end.y - orthogonal.y,
            }
          }

          controlPoint.x = clamp(controlPoint.x, 0, width - 150 - 10)
          controlPoint.y = clamp(controlPoint.y, 0, width - 150 - 10)

          const pointRandomizer = d3.randomNormal(3, 1)
          const bezierRandomizer = d3.randomNormal(12, 4)

          const numCurves = Math.floor(count / 1000)

          return d3.range(numCurves).map(() => {
            const s = {}
            s.x = start.x + pointRandomizer()
            s.y = start.y + pointRandomizer()
            const e = {}
            e.x = end.x + pointRandomizer()
            e.y = end.y + pointRandomizer()
            const c = {}
            c.x = controlPoint.x + bezierRandomizer()
            c.y = controlPoint.y + bezierRandomizer()

            return [s, c, e]
          })
        })
      )
      .join('path')
      .attr('stroke', 'white')
      .attr('opacity', 0.1)
      .attr(
        'd',
        d => `M${d[0].x},${d[0].y} Q${d[1].x},${d[1].y} ${d[2].x},${d[2].y}`
      )
      .attr('fill', 'none')
  }
}

//get coordinates of squares from keys such as "e2-e4"
function getSquareCoords(d, squareWidth) {
  let squares = []

  for (let i = 0; i < 2; i++) {
    let square = d.split('-')[i].toLowerCase()

    let file = square.charCodeAt(0) - 97
    let rank = 8 - square[1]

    let x = file * squareWidth + squareWidth / 2
    let y = rank * squareWidth + squareWidth / 2

    squares.push({
      x,
      y,
    })
  }

  return squares
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num
}

export default movepaths
