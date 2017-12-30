import { connect } from 'react-redux'

import CharWordHistogram from './CharWordHistogram'

export default connect(
  state => ({
    data: state.charWordFrequencies
  }),
  null
)(CharWordHistogram)
