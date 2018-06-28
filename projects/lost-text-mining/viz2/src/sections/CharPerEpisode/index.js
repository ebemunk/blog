import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import CharPerEpisode from './CharPerEpisode'
import {
  countsPerEpisodeSelection,
  getCountsPerEpisode,
} from 'store/countsPerEpisode'
import withEpSelector from 'hoc/withEpSelector'
import { fireActions } from 'hoc'

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
  withEpSelector(900),
)(CharPerEpisode)
