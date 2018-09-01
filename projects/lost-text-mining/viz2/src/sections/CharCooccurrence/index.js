import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import {
  selectedCharCooccurrence,
  getCharCooccurrence,
} from 'store/charCooccurrence'
import fireActions from 'hoc/fireActions'

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
)(CharCooccurrence)
