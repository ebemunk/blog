import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import SceneTone from './SceneTone'
import { getSceneTone, sceneTone } from 'store/sceneTone'
import fireActions from 'hoc/fireActions'

export default compose(
  hot(module),
  connect(
    state => ({
      data: sceneTone(state),
    }),
    {
      getSceneTone,
    },
  ),
  fireActions(['getSceneTone']),
)(SceneTone)
