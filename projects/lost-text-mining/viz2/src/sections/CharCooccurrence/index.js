import { compose } from 'redux'
import { connect } from 'react-redux'
import * as R from 'ramda'
import { hot } from 'react-hot-loader'

import { selectedCharCooccurrence } from '../../selectors'
import { getCharCooccurrence } from '../../actions'
import { fireActions, withEpSelector } from '../../hoc'

import CharCooccurrence from './CharCooccurrence'

export default compose(
  hot(module),
  connect(
    state => ({
      data: selectedCharCooccurrence(state),
    }),
    {
      getCharCooccurrence,
    },
  ),
  fireActions(['getCharCooccurrence']),
  withEpSelector(700),
)(CharCooccurrence)
