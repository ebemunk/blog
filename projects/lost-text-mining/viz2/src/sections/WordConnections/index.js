import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import { getWordConnections } from 'store/wordConnections'
import fireActions from 'hoc/fireActions'
import WordConnections from './WordConnections'

export default compose(
  hot(module),
  connect(
    state => ({
      ...state.wordConnections,
      episodes: state.episodes,
    }),
    {
      getWordConnections,
    },
  ),
  fireActions(['getWordConnections']),
)(WordConnections)
