import { compose } from 'redux'
import { connect } from 'react-redux'

import { getWordCount } from '../../actions'
import { wordCountBySelection } from '../../selectors'
import WordCount from './WordCount'
import withEpSelector from '../../hoc/withEpSelector'

export default compose(
  connect(
    state => ({
      data: wordCountBySelection(state),
    }),
    {
      getWordCount,
    },
  ),
  withEpSelector(900),
)(WordCount)
