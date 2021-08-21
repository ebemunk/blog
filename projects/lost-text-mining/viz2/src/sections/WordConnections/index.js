import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import { getWordConnections } from 'store/wordConnections'
import fireActions from 'hoc/fireActions'
import WordConnections from './WordConnections'

const dom = document.querySelector('#radial-word-connections')
const domW = dom && dom.attributes['data-width'] && +dom.attributes["data-width"].value

export default compose(
  hot(module),
  connect(
    state => ({
      ...state.wordConnections,
      episodes: state.episodes,
      width: domW ? domW : undefined,
    }),
    {
      getWordConnections,
    },
  ),
  fireActions(['getWordConnections']),
)(WordConnections)
