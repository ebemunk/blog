import { compose } from 'redux'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { hot } from 'react-hot-loader'

import { combinedProfileSelection } from '../../selectors'
import { getPersonalities } from '../../actions'
import fireActions from 'hoc/fireActions'

import Personalities from './Personalities'

export default compose(
  hot(module),
  connect(
    state => ({
      data: combinedProfileSelection(state),
    }),
    {
      getPersonalities,
    },
  ),
  fireActions(['getPersonalities']),
)(Personalities)
