import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import withEpSelector from 'hoc/withEpSelector'
import fireActions from 'hoc/fireActions'
import {
  getReadingLevels,
  episodeReadingLevelSelection,
} from 'store/readingLevel'
import EpisodeReadingLevel from './EpisodeReadingLevel'

export default compose(
  hot(module),
  connect(
    state => ({
      data: episodeReadingLevelSelection(state),
    }),
    {
      getReadingLevels,
    },
  ),
  fireActions(['getReadingLevels']),
  withEpSelector(900),
)(EpisodeReadingLevel)
