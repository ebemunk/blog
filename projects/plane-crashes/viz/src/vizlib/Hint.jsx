import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Manager, Reference, Popper } from 'react-popper'

const Hint = ({
  x1,
  y1,
  x2,
  y2,
  placement = 'right-start',
  children = null,
  refStyle = {},
  hintStyle = {},
}) => (
  <Manager>
    <Reference>
      {({ ref }) => (
        <line
          ref={ref}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          style={{ stroke: 'white', pointerEvents: 'none', ...refStyle }}
        />
      )}
    </Reference>
    {ReactDOM.createPortal(
      <Popper placement={placement}>
        {({ ref, style, placement }) => (
          <div
            ref={ref}
            style={{ ...style, pointerEvents: 'none', ...hintStyle }}
            data-placement={placement}
            key={x1}
          >
            {children}
          </div>
        )}
      </Popper>,
      document.querySelector('body'),
    )}
  </Manager>
)

Hint.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  x2: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  placement: PropTypes.string,
  children: PropTypes.node,
}

export default Hint
