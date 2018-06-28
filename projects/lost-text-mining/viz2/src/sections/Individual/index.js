import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import Individual from './Individual'

export default compose(
  hot(module),
  connect(state => ({
    personalities: state.personalities,
  })),
)(Individual)
