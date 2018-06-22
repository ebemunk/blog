import React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference, Popper } from 'react-popper'
import classnames from 'classnames'

import images from '../CharSelector/images'
import css from './Circle.css'

export default class Circle extends React.Component {
  state = { show: false }

  render() {
    const { cx, cy, fill, r, tooltip, className, onClick } = this.props
    const { show } = this.state

    const clipId = `clip-${tooltip.replace(' ', '-')}`

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <g
              ref={ref}
              onMouseOver={() => this.setState({ show: true })}
              onMouseOut={() => this.setState({ show: false })}
              onClick={onClick}
              className={classnames(css.circle, className)}
            >
              <clipPath id={clipId}>
                <circle cx={cx} cy={cy} r={r} />
              </clipPath>
              <circle cx={cx} cy={cy} fill={fill} r={r} />
              {images[tooltip] && (
                <image
                  xlinkHref={images[tooltip]}
                  height={r * 2}
                  width={r * 2}
                  x={cx - r}
                  y={cy - r}
                  clipPath={`url(#${clipId})`}
                />
              )}
            </g>
          )}
        </Reference>
        {show &&
          ReactDOM.createPortal(
            <Popper placement="top">
              {({ ref, style, placement, arrowProps }) => (
                <div
                  ref={ref}
                  style={style}
                  data-placement={placement}
                  className={css.wrap}
                >
                  <div className={css.tooltip}>{tooltip}</div>
                  <div
                    // ref={arrowProps.ref}
                    // style={arrowProps.style}
                    className={classnames(css.arrow, css[placement])}
                  />
                </div>
              )}
            </Popper>,
            document.querySelector('body'),
          )}
      </Manager>
    )
  }
}
