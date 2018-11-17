import React from 'react'

import { colorScale } from '../util'
import Chessboard from '../components/CB'
import data from '../data'

import { Paths, Pawn, Square } from '../components/CB'

const PawnPaths = ({ show, setShow, width = 500 }) => (
  <div>
    <Chessboard width={width} data={data.Trax[show]}>
      {'abcdefgh'.split('').map(file => (
        <React.Fragment key={file}>
          <g onClick={() => setShow(file + '2')}>
            <Pawn
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
            <Pawn
              square={file + '7'}
              width={width / 8}
              style={{
                opacity: show === file + '7' ? 1 : 0.3,
              }}
              black
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
    </Chessboard>
  </div>
)

import { compose, pure, withState } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
  withState('show', 'setShow', 'e2'),
)(PawnPaths)
