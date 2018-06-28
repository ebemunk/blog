import React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference } from 'react-popper'
import { color as d3Color } from 'd3'

import Tooltips from './Tooltips'
import labels from './labels'

import css from './Facet.css'

export class Facet extends React.Component {
  state = {
    hoverTimeout: null,
    show: false,
  }

  mouseEnter = () => {
    const hoverTimeout = setTimeout(() => {
      this.setState({ show: true })
    }, 300)
    this.setState({ hoverTimeout })
  }

  mouseLeave = () => {
    const { hoverTimeout } = this.state
    if (hoverTimeout) clearTimeout(hoverTimeout)
    this.setState({ show: false, hoverTimeout: null })
  }

  render() {
    const {
      trait_id,
      height,
      width,
      color,
      fullWidth,
      paddingLeft,
      points,
      tooltips,
    } = this.props

    const { show } = this.state

    const { low, high, label, lowDesc, highDesc, desc } = labels[trait_id]

    return (
      <React.Fragment>
        <Manager>
          {low && (
            <text dx={-5} dy={height / 2} className={css.low} children={low} />
          )}
          {high && (
            <text
              x={width}
              dx={5}
              dy={height / 2}
              className={css.high}
              children={high}
            />
          )}
          <Reference>
            {({ ref }) => (
              <rect
                ref={ref}
                width={width}
                height={height}
                className={css.rect}
                fill={show && tooltips ? d3Color(color).brighter(2) : color}
              />
            )}
          </Reference>
          <text
            x={width / 2}
            dy={height / 2}
            className={css.label}
            children={label.toUpperCase()}
          />
          <rect
            width={fullWidth}
            height={height}
            x={-paddingLeft}
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
            className={css.tooltipTrigger}
          />
          {show &&
            tooltips &&
            ReactDOM.createPortal(
              <Tooltips
                {...{
                  low,
                  lowDesc,
                  high,
                  highDesc,
                  label,
                  desc,
                  points,
                  trait_id,
                }}
              />,
              document.querySelector('body'),
            )}
        </Manager>
      </React.Fragment>
    )
  }
}

export default Facet
