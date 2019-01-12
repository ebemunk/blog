import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { axisTop, axisRight, axisBottom, axisLeft } from 'd3-axis'
import { select } from 'd3-selection'
import 'd3-transition'

import style from './style.css'

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

  axisRef = React.createRef()

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
      tickPadding,
      tickFormat,
      tickValues,
      transitionDuration,
    } = this.props

    const axis = AXIS_TYPE[orientation]()
      .scale(scale)
      .ticks(ticks)
      .tickSize(tickSize)
      .tickPadding(tickPadding)
      .tickFormat(tickFormat)
      .tickValues(tickValues)

    select(this.axisRef.current)
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
        ref={this.axisRef}
        className={classnames(style.axis, className)}
        {...otherProps}
      />
    )
  }
}
