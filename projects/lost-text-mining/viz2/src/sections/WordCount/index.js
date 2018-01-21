import { connect } from 'react-redux'

import { getWordCount } from '../../actions'
import { wordCountBySelection } from '../../selectors'
import WordCount from './WordCount'

export default connect(
  state => ({
    data: wordCountBySelection(state),
  }),
  {
    getWordCount,
  },
)(WordCount)
