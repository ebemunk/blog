import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { axisTop, axisRight, axisBottom, axisLeft, select } from 'd3'

import style from './Axis.css'

const AXIS_TYPE = {
  top: axisTop,
  right: axisRight,
  bottom: axisBottom,
  left: axisLeft,
}

export default class Axis extends React.PureComponent {
  static propTypes = {
    orientation: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
    scale: PropTypes.func.isRequired,
    ticks: PropTypes.any,
    tickArguments: PropTypes.any,
    tickValues: PropTypes.array,
    tickFormat: PropTypes.func,
    tickSize: PropTypes.number,
    tickSizeInner: PropTypes.number,
    tickSizeOuter: PropTypes.number,
    tickPadding: PropTypes.number,
    transitionDuration: PropTypes.number,
  }

  static defaultProps = {
    ticks: null,
    tickArguments: null,
    tickValues: null,
    tickFormat: null,
    tickSize: 6,
    tickSizeInner: 6,
    tickSizeOuter: 6,
    tickPadding: 3,
    transitionDuration: 250,
  }

  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis() {
    const {
      orientation,
      scale,
      ticks,
      tickSize,
      tickFormat,
      tickValues,
      transitionDuration,
    } = this.props

    const axis = AXIS_TYPE[orientation]()
      .scale(scale)
      .ticks(ticks)
      .tickSize(tickSize)
      .tickFormat(tickFormat)
      .tickValues(tickValues)

    select(this.axisElement)
      .transition()
      .duration(transitionDuration)
      .call(axis)
  }

  render() {
    const {
      orientation,
      scale,
      ticks,
      tickArguments,
      tickValues,
      tickFormat,
      tickSize,
      tickSizeInner,
      tickSizeOuter,
      tickPadding,
      transitionDuration,
      className,
      ...otherProps
    } = this.props

    return (
      <g
        key={orientation}
        ref={el => (this.axisElement = el)}
        className={classnames(style.axis, className)}
        {...otherProps}
      />
    )
  }
}
