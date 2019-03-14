import React from 'react'
import { select } from 'd3-selection'
import { transition } from 'd3-transition'

export default class Axis extends React.PureComponent {
  ref = React.createRef()

  componentDidMount() {
    this.renderAxis()
  }

  componentDidUpdate() {
    this.renderAxis()
  }

  renderAxis = () => {
    // transition()
    //   .selection()
    select(this.ref.current)
      // .transition()
      // .duration(3000)
      .call(this.props.axis)
  }

  render() {
    const { axis, ...rest } = this.props

    return <g ref={this.ref} {...rest} />
  }
}
