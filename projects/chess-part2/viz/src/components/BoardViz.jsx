import React from 'react'
import { VerticalBarSeries } from 'react-vis'
import { compose, pure, withState } from 'recompose'
import { get } from 'lodash'
import { format } from 'd3-format'

import Plot from './Plot'
import ChessBoard from './Chessboard'
import { whiteblack } from '../util'

import { hot } from 'react-hot-loader'

const BoardViz = compose(
  //
  pure,
  hot(module),
)(({ data, color, filter = 'AllPNBRQK' }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      flexShrink: '0',
      justifyContent: 'center',
      width: '750px',
    }}
  >
    <div style={{ flexBasis: '66%' }}>
      <h5
        style={{
          margin: 0,
          fontSize: '1.5rem',
        }}
      >
        by piece
      </h5>
      <Plot
        height={240}
        width={480}
        data={data.byPiece[0].filter(d => filter.includes(d.x)).map((d, i) => ({
          x: d.x,
          y: 0,
          white: d.y,
          black: data.byPiece[1].filter(d => filter.includes(d.x))[i].y,
        }))}
        xType="ordinal"
        margin={{}}
        xAxis={{
          title: 'Piece',
        }}
        yAxis={{
          title: 'Count',
          tickFormat: d => format('.2s')(d),
        }}
        crosshairProps={{
          titleFormat: d => ({
            title: 'Piece',
            value: {
              P: 'Pawn',
              N: 'Knight',
              B: 'Bishop',
              R: 'Rook',
              Q: 'Queen',
              K: 'King',
            }[d[0].x],
          }),
          itemsFormat: d => [
            {
              title: 'White',
              value: format(',')(d[0].white),
            },
            {
              title: 'Black',
              value: format(',')(d[0].black),
            },
          ],
        }}
      >
        {(color === 'All' || color === 'White') && (
          <VerticalBarSeries
            data={data.byPiece[0].filter(d => filter.includes(d.x))}
            color={whiteblack(0)}
          />
        )}
        {(color === 'All' || color === 'Black') && (
          <VerticalBarSeries
            data={data.byPiece[1].filter(d => filter.includes(d.x))}
            color={whiteblack(1)}
          />
        )}
      </Plot>
    </div>
    {['All', 'P', 'N', 'B', 'R', 'Q', 'K']
      .filter(p => filter.includes(p))
      .map(piece => (
        <div key={piece} style={{ flexBasis: '33%', flexShrink: '1' }}>
          <h5
            style={{
              margin: 0,
              fontSize: '1.5rem',
            }}
          >
            {
              {
                All: 'All Pieces',
                P: 'Pawn',
                N: 'Knight',
                B: 'Bishop',
                R: 'Rook',
                Q: 'Queen',
                K: 'King',
              }[piece]
            }
          </h5>
          <ChessBoard
            width={240}
            data={data.heatmap.map(d => {
              if (piece === 'All') {
                return Object.keys(d).reduce((sum, k) => sum + d[k], 0)
              }
              const w = get(d, piece, 0)
              const b = get(d, piece.toLowerCase(), 0)
              if (color === 'White') return w
              else if (color === 'Black') return b
              else return w + b
            })}
          />
        </div>
      ))}
  </div>
))

const Toggle = compose(
  //
  withState('color', 'setColor', 'All'),
  pure,
)(({ data, setColor, color, filter }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <div>
      {['All', 'White', 'Black'].map(k => (
        <button key={k} onClick={() => setColor(k)}>
          {k}
        </button>
      ))}
    </div>
    <BoardViz data={data} color={color} filter={filter} />
  </div>
))

export default Toggle
