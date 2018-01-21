import { connect } from 'react-redux'
import * as R from 'ramda'

import { combinedProfileSelection } from '../../selectors'

import Personalities from './Personalities'

export default connect(
  state => ({
    data: combinedProfileSelection(state)
  })
)(Personalities)
