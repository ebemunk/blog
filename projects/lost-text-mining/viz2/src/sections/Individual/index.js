import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import Individual from './Individual'

import * as R from 'ramda'
const sortByNameCaseInsensitive = R.sortBy(
  R.compose(R.toLower, R.prop('char_name')),
)

export default compose(
  hot(module),
  connect(state => ({
    personalities: sortByNameCaseInsensitive(state.personalities),
  })),
)(Individual)