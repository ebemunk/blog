import React from 'react'
import { line } from 'd3-shape'
import { Spring, animated } from 'react-spring'

export default class Line extends React.Component {
  ref = React.createRef()

  state = {
    totalLength: 0,
  }

  componentDidMount() {
    this.setState({
      totalLength: this.ref.current.getTotalLength(),
    })
  }

  render() {
    const { totalLength } = this.state
    const { data, x, y, style, ...props } = this.props
    const lineGenerator = line()
    if (x) lineGenerator.x(x)
    if (y) lineGenerator.y(y)

    return (
      <Spring
        native
        to={{
          strokeDasharray: `${totalLength} ${totalLength}`,
          d: lineGenerator(data),
        }}
      >
        {spring => (
          <animated.path
            ref={this.ref}
            // d={lineGenerator(data)}
            d={spring.d}
            style={{
              fill: 'none',
              // strokeDasharray: spring.strokeDasharray,
              // strokeDashoffset: spring.strokeDashoffset,
              ...style,
            }}
            {...props}
          />
        )}
      </Spring>
    )
  }
}
