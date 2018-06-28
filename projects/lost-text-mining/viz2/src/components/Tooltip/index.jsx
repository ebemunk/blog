import React from 'react'
import { Popper } from 'react-popper'
import classnames from 'classnames'

import css from './Tooltip.css'

export const Tooltip = ({ placement, children, className }) => (
  <Popper placement={placement || 'top'}>
    {({ ref, style, placement: dataPlacement, arrowProps }) => (
      <div
        ref={ref}
        style={style}
        data-placement={dataPlacement}
        className={classnames(css.wrap, className)}
      >
        <div className={css.tooltip}>{children}</div>
        <div
          // ref={arrowProps.ref}
          // style={arrowProps.style}
          className={classnames(css.arrow, css[dataPlacement])}
        />
      </div>
    )}
  </Popper>
)

export default Tooltip
