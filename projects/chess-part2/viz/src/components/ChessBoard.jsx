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
  ({
    name,
    x,
    y,
    width,
    data,
    opacity,
    black,
    tooltip,
    setTooltip,
    toggle,
    setToggle,
  }) => (
    <Manager tag={false}>
      <Reference>
        {({ ref }) => (
          <g
            ref={ref}
            onMouseEnter={() => !toggle && setTooltip(true)}
            onMouseOut={() => !toggle && setTooltip(false)}
            // onClick={() => setToggle(!toggle)}
          >
            <rect
              x={x}
              y={y}
              width={width}
              height={width}
              fill="white"
              style={{
                mask: black ? 'url(#mask-stripe)' : '',
              }}
            />
            <rect
              x={x}
              y={y}
              width={width}
              height={width}
              fill="steelblue"
              opacity={opacity}
            />
          </g>
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
                className={`${css.popper} rv-crosshair__inner__content`}
              >
                <div>
                  <div>
                    <strong>Square: {name}</strong>
                  </div>
                  <div>Count: {format(',')(data)}</div>
                </div>
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
  const scale = scaleLinear()
    .range([0, 1])
    .domain(extent(data))

  return (
    <div style={{}}>
      <svg width={width} height={width}>
        <defs>
          <pattern
            id="pattern-stripe"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect
              width="3"
              height="4"
              transform="translate(0,0)"
              fill="white"
            />
          </pattern>
          <mask id="mask-stripe">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#pattern-stripe)"
            />
          </mask>
        </defs>

        {data.map((d, i) => {
          const file = i % 8
          const rank = Math.floor(i / 8)
          const black = (file + rank) % 2 === 1
          const sqWidth = width / 8

          return (
            <Square
              name={'abcdefgh'[file] + '12345678'[7 - rank]}
              x={file * sqWidth}
              y={rank * sqWidth}
              width={sqWidth}
              black={black}
              key={i}
              opacity={scale(d)}
              data={d}
            />
          )
        })}
      </svg>
    </div>
  )
}

import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  pure,
)(ChessBoard)
