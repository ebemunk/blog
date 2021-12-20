import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import fireActions from 'hoc/fireActions'
import { getReadingLevels, readingLevel } from 'store/readingLevel'
import CharReadingLevel from './CharReadingLevel'

export default compose(
  hot(module),
  connect(
    state => ({
      data: readingLevel(state).char,
    }),
    {
      getReadingLevels,
    },
  ),
  // fireActions(['getReadingLevels']),
)(CharReadingLevel)
