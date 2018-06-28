import { compose } from 'redux'
import { connect } from 'react-redux'

import { getCharWordFrequencies } from '../../actions'
import fireActions from 'hoc/fireActions'
import Labels from './Labels'

export default compose(
  connect(
    state => ({
      data: state.charWordFrequencies,
    }),
    {
      getCharWordFrequencies,
    },
  ),
  fireActions(['getCharWordFrequencies']),
)(Labels)
