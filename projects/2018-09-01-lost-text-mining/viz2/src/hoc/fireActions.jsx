import React from 'react'

const fireActions = actions => Component =>
  class FireActions extends React.Component {
    componentWillMount() {
      actions.map(action => this.props[action]())
    }

    render() {
      return <Component {...this.props} />
    }
  }
export default fireActions
