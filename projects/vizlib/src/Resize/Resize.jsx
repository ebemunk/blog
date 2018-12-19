import React from 'react'

class Resize extends React.PureComponent {
  state = {
    height: window.innerHeight,
    width: window.innerWidth,
  }

  componentDidMount() {}

  render() {
    const { children } = this.props
    const { height, width } = this.state
    return children({ height, width })
  }
}

export default Resize
