import React from 'react'

import { colorScale } from '../util'
import Board from '../components/Chess/Board'
import data from '../data'

import { Paths } from '../components/Chess/CB'
import Square from '../components/Chess/Square'
import Piece from '../components/Chess/Piece'

const PawnPaths = ({ show, setShow, width = 500 }) => (
  <div>
    <Board width={width} data={data.Trax[show]}>
      {'abcdefgh'.split('').map(file => (
        <React.Fragment key={file}>
          <g onClick={() => setShow(file + '2')}>
            <Piece
              type="P"
              square={file + '2'}
              width={width / 8}
              style={{
                opacity: show === file + '2' ? 1 : 0.3,
              }}
            />
            <Square
              square={file + '2'}
              width={width / 8}
              style={{ opacity: 0 }}
            />
          </g>
          <g onClick={() => setShow(file + '7')}>
            <Piece
              type="p"
              square={file + '7'}
              width={width / 8}
              style={{
                opacity: show === file + '7' ? 1 : 0.3,
              }}
            />
            <Square
              square={file + '7'}
              width={width / 8}
              style={{ opacity: 0 }}
            />
          </g>
        </React.Fragment>
      ))}
      <Paths data={data.Trax[show] || {}} sqWidth={width / 8} />
    </Board>
  </div>
)

import { compose, pure, withState } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
  withState('show', 'setShow', 'e2'),
)(PawnPaths)
