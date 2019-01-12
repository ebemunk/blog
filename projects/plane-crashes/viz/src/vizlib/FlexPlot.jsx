import React from 'react'
import debounce from 'lodash/debounce'

import Plot from './Plot'

export default class FlexPlot extends React.Component {
  ref = React.createRef()

  state = {
    width: 0,
    height: 0,
  }

  componentDidMount() {
    this.resize()
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize = debounce(() => {
    this.setState({
      width: this.ref.current.offsetWidth,
      height: this.ref.current.offsetHeight,
    })
  }, 300)

  render() {
    return (
      <div ref={this.ref}>
        <Plot width={this.state.width} {...this.props} />
      </div>
    )
  }
}
