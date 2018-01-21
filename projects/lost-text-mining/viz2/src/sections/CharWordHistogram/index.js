import { connect } from 'react-redux'

import { getCharWordFrequencies } from '../../actions'
import CharWordHistogram from './Labels'

export default connect(
  state => ({
    data: state.charWordFrequencies,
  }),
  {
    getCharWordFrequencies,
  },
)(CharWordHistogram)
