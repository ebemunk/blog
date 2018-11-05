import React from 'react'
import { VerticalBarSeries } from 'react-vis'
import { compose, pure, withState } from 'recompose'
import { get } from 'lodash'

import Plot from './Bar'
import ChessBoard from './ChessBoard'

const BoardViz = compose(
  //
  pure,
)(({ data, color }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '950px',
    }}
  >
    <div style={{ flexBasis: '66%' }}>
      <h5>by piece</h5>
      <Plot
        height={300}
        width={600}
        data={data.byPiece[0]}
        xType="ordinal"
        margin={{}}
      >
        {(color === 'All' || color === 'White') && (
          <VerticalBarSeries data={data.byPiece[0]} />
        )}
        {(color === 'All' || color === 'Black') && (
          <VerticalBarSeries data={data.byPiece[1]} />
        )}
      </Plot>
    </div>
    {['All', 'P', 'N', 'B', 'R', 'Q', 'K'].map(piece => (
      <div key={piece} style={{ flexBasis: '33%', flexShrink: '1' }}>
        <h5>{piece}</h5>
        <ChessBoard
          width={280}
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
)(({ data, setColor, color }) => (
  <div>
    <div>
      {['White', 'Black', 'All'].map(k => (
        <button key={k} onClick={() => setColor(k)}>
          {k}
        </button>
      ))}
    </div>
    <BoardViz data={data} color={color} />
  </div>
))

export default Toggle
