import React from 'react'
import ReactDOM from 'react-dom'
import { range, max } from 'd3-array'
import { scaleLinear } from 'd3-scale'
import { format } from 'd3-format'
import { Manager, Reference, Popper } from 'react-popper'

import data from '../data'

import Board from '../components/Chess/Board'
import Piece from '../components/Chess/Piece'
import { squareFromIndex } from '../components/Chess/util'

import tooltipCss from '../components/Tooltip.css'

const fenToArr = fen =>
  fen
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

import { compose, pure, withState } from 'recompose'

const PositionName = compose(
  //
  withState('tooltip', 'setTooltip', false),
)(({ d, tooltip, setTooltip }) => (
  <Manager tag={false}>
    <Reference>
      {({ ref }) => (
        <a
          href=""
          ref={ref}
          onMouseEnter={() => setTooltip(true)}
          onMouseOut={() => setTooltip(false)}
          onClick={e => {
            e.preventDefault()
          }}
        >
          {d.x}
        </a>
      )}
    </Reference>
    {tooltip &&
      ReactDOM.createPortal(
        <Popper placement="bottom">
          {({ ref, placement, style, arrowProps }) => (
            <div
              ref={ref}
              data-placement={placement}
              style={{ ...style, pointerEvents: 'none' }}
              className={`${tooltipCss.popper} rv-crosshair__inner__content`}
            >
              <div>
                <Board width={150}>
                  {fenToArr(d.fen).map(
                    (piece, i) =>
                      !!piece && (
                        <Piece
                          type={piece}
                          square={squareFromIndex(i).square}
                          width={150 / 8}
                          key={squareFromIndex(i).square}
                        />
                      ),
                  )}
                </Board>
              </div>
              <div
                ref={arrowProps.ref}
                style={arrowProps.style}
                className={tooltipCss.popper__arrow}
              />
            </div>
          )}
        </Popper>,
        document.querySelector('body'),
      )}
  </Manager>
))

const Positions = ({ datz, caption }) => {
  const scale = scaleLinear()
    .domain([0, max(datz, d => d.y)])
    .range([0, 100])

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        flexBasis: '33%',
        marginBottom: '1.5rem',
      }}
    >
      <table
        style={{
          maxWidth: '40rem',
          margin: '0 0.625rem',
        }}
      >
        <caption
          style={{
            fontWeight: 'bold',
          }}
        >
          {caption}
        </caption>
        <tbody>
          {datz.map(d => (
            <tr key={d.fen}>
              <td
                style={{
                  maxWidth: '25rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textAlign: 'right',
                }}
              >
                <PositionName d={d} />
              </td>
              <td style={{ width: '15rem' }}>
                <div
                  style={{
                    backgroundColor: '#0081bd',
                    width: scale(d.y) + '%',
                    height: '1rem',
                    color: 'white',
                    fontSize: '0.75rem',
                    lineHeight: '1rem',
                    textAlign: 'right',
                  }}
                >
                  {format('.3s')(d.y)}&nbsp;
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Pos = ({}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {data.Positions.map((datz, i) => (
      <div key={i}>
        <Positions
          datz={datz}
          caption={
            { 0: 'All Positions', 1: '6+ Full Moves', 2: '12+ Full Moves' }[i]
          }
        />
      </div>
    ))}
  </div>
)

import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
)(Pos)
