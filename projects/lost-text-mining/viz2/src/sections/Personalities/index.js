import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import fireActions from 'hoc/fireActions'
import { getPersonalities, combinedSelectedChars } from 'store/personalities'

import Personalities from './Personalities'

export default compose(
  hot(module),
  connect(
    state => ({
      data: combinedSelectedChars(state),
    }),
    {
      getPersonalities,
    },
  ),
  fireActions(['getPersonalities']),
)(Personalities)
