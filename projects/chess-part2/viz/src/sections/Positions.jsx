import React from 'react'
import ReactDOM from 'react-dom'
import { range, max } from 'd3-array'
import { scaleLinear } from 'd3-scale'
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
                  {fenToArr(d.x).map(
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

const Positions = ({}) => {
  const datz = data.Positions.slice()
    .filter(d => +d.x[d.x.length - 1] > 5)
    .sort((a, b) => b.y - a.y)
    .slice(0, 30)

  const scale = scaleLinear()
    .domain([0, max(datz, d => d.y)])
    .range([0, 100])

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <table
        style={{
          maxWidth: '40rem',
          margin: '0 0.625rem',
        }}
      >
        <tbody>
          {datz.map(d => (
            <tr key={d.x}>
              <td
                style={{
                  maxWidth: '25rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textAlign: 'right',
                }}
                title={d.x}
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
                  {d.y}&nbsp;
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
)(Positions)
