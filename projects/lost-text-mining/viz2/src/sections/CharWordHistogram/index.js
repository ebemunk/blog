import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import { getCharWordFrequencies } from 'store/charWordFrequencies'
import fireActions from 'hoc/fireActions'
import Legend from './Legend'

export default compose(
  hot(module),
  connect(
    state => ({
      data: state.charWordFrequencies,
    }),
    {
      getCharWordFrequencies,
    },
  ),
  fireActions(['getCharWordFrequencies']),
)(Legend)
