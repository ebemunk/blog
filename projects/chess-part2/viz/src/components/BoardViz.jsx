import React from 'react'
import { VerticalBarSeries } from 'react-vis'
import { compose, pure, withState } from 'recompose'
import get from 'lodash/get'
import { format } from 'd3-format'

import Plot from './Plot'
import ChessBoard from './Chessboard'
import { whiteblack } from '../util'

import { hot } from 'react-hot-loader'
import ButtonGroup from './ButtonGroup'

import sectioncss from '../sections/Section.css'

const BoardViz = compose(
  //
  pure,
  hot(module),
)(({ data, color, filter = 'AllPNBRQK' }) => (
  <div className={sectioncss.viz}>
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
            marginBottom: '0.5rem',
          }}
        >
          by piece
        </h5>
        <Plot
          height={240}
          width={480}
          data={data.byPiece[0]
            .filter(d => filter.includes(d.x))
            .map((d, i) => ({
              x: d.x,
              y: 0,
              white: d.y,
              black: data.byPiece[1].filter(d => filter.includes(d.x))[i].y,
            }))}
          margin={{ bottom: 25 }}
          xType="ordinal"
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
              barWidth={filter.length < 2 ? 0.2 : 0.8}
            />
          )}
          {(color === 'All' || color === 'Black') && (
            <VerticalBarSeries
              data={data.byPiece[1].filter(d => filter.includes(d.x))}
              color={whiteblack(1)}
              barWidth={filter.length < 2 ? 0.2 : 0.8}
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
                marginBottom: '0.5rem',
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
              style={{
                marginBottom: '0.5rem',
              }}
              data={data.heatmap.map(d => {
                if (piece === 'All') {
                  return Object.keys(d).reduce((sum, k) => {
                    if (color === 'All') {
                      return sum + d[k]
                    }

                    if (color === 'White' && k.toUpperCase() === k) {
                      return sum + d[k]
                    }

                    if (color === 'Black' && k.toLowerCase() === k) {
                      return sum + d[k]
                    }

                    return sum
                  }, 0)
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
      <ButtonGroup
        options={[
          { name: 'All', value: 'All' },
          { name: 'White', value: 'White' },
          { name: 'Black', value: 'Black' },
        ]}
        onChange={v => setColor(v)}
        selected={color}
      />
    </div>
    <BoardViz data={data} color={color} filter={filter} />
  </div>
))

export default Toggle
