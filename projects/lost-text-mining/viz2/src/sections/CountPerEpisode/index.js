import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import CountPerEpisode from './CountPerEpisode'
import {
  countsPerEpisodeSelection,
  getCountsPerEpisode,
} from 'store/countsPerEpisode'
import fireActions from 'hoc/fireActions'

export default compose(
  hot(module),
  connect(
    state => ({
      data: countsPerEpisodeSelection(state),
    }),
    {
      getCountsPerEpisode,
    },
  ),
  fireActions(['getCountsPerEpisode']),
)(CountPerEpisode)
