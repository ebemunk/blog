import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as d3 from 'd3'
import debounce from 'lodash/debounce'

export default class Brush extends Component {
  static displayName = 'Brush'

  static propTypes = {
    extent: PropTypes.array.isRequired,
    selection: PropTypes.array.isRequired,
    handleSize: PropTypes.number,
    onBrush: PropTypes.func,
    onBrushEnd: PropTypes.func,
  }

  static defaultProps = {
    handleSize: 1,
    onBrush: () => {},
    onBrushEnd: () => {},
  }

  componentDidMount() {
    this.renderBrush()
  }

  componentDidUpdate() {
    this.renderBrush()
  }

  renderBrush() {
    const {
      selection,
      extent,
      handleSize,

      onBrush,
      onBrushEnd,
    } = this.props

    if (!selection) return

    const obd = debounce(onBrush, 150)
    const obed = debounce(onBrushEnd, 150)

    const brush = d3
      .brushX()
      .extent(extent)
      .handleSize(handleSize)
      .on('brush', () => {
        obd(d3.event)
      })
      .on('end', () => {
        obed(d3.event)
      })

    d3.select(this.node).call(brush)
    d3.select(this.node).call(brush.move, selection)
  }

  render() {
    const { className, transform } = this.props

    return (
      <g
        ref={el => {
          this.node = el
        }}
        className={className}
        transform={transform}
      />
    )
  }
}
