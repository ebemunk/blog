import React from 'react'
import ReactDOM from 'react-dom'
import { extent, scaleLinear, scaleSqrt, format } from 'd3'
import { Manager, Reference, Popper } from 'react-popper'
import { compose, pure, withState } from 'recompose'

import css from './Tooltip.css'

const Square = compose(
  pure,
  withState('tooltip', 'setTooltip', false),
  withState('toggle', 'setToggle', false),
)(
  //
  ({ width, data, length, black, tooltip, setTooltip, toggle, setToggle }) => (
    <Manager tag={false}>
      <Reference>
        {({ ref }) => (
          <div
            ref={ref}
            style={{
              width,
              height: width,
              // backgroundColor: black ? 'black' : 'white',
              // backgroundColor: 'black',
              background: black
                ? `repeating-linear-gradient(45deg, #888, #888 1px, white 1px, white 4px)`
                : 'white',
              // position: 'relative',
              // display: 'flex',
              // alignItems: 'center',
              // justifyContent: 'center',
            }}
            onMouseEnter={() => !toggle && setTooltip(true)}
            onMouseOut={() => !toggle && setTooltip(false)}
            onClick={() => setToggle(!toggle)}
          >
            <div
              style={{
                pointerEvents: 'none',
                // width: length,
                // height: length,
                width: width,
                height: width,
                opacity: length,
                backgroundColor: 'steelblue',
                // position: 'absolute',
                // left: '50%',
                // top: '50%',
                // transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        )}
      </Reference>
      {tooltip &&
        ReactDOM.createPortal(
          <Popper placement="top">
            {({ ref, placement, style, arrowProps }) => (
              <div
                ref={ref}
                data-placement={placement}
                style={{ ...style, pointerEvents: 'none' }}
                className={css.popper}
              >
                <div>{format(',')(data)}</div>
                <div
                  ref={arrowProps.ref}
                  style={arrowProps.style}
                  className={css.popper__arrow}
                />
              </div>
            )}
          </Popper>,
          document.querySelector('body'),
        )}
    </Manager>
  ),
)

const ChessBoard = ({ width, data }) => {
  // const scale = scaleSqrt()
  const scale = scaleLinear()
    .range([0, 1])
    // .range([0, width / 8])
    .domain(extent(data))

  return (
    <div
      style={{
        width,
        height: width,
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid black',
      }}
    >
      {data.map((d, i) => {
        const x = i % 8
        const y = Math.floor(i / 8)
        const black = (x + y) % 2 === 1
        return (
          <Square
            key={i}
            length={scale(d)}
            data={d}
            black={black}
            width={width / 8}
          />
        )
      })}
    </div>
  )
}
export default ChessBoard
