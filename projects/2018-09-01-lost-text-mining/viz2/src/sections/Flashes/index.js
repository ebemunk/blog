import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import Flashes from './Flashes'
import { getFlashes, flashes } from 'store/flashes'
import fireActions from 'hoc/fireActions'

export default compose(
  hot(module),
  connect(
    state => ({
      data: flashes(state),
    }),
    {
      getFlashes,
    },
  ),
  fireActions(['getFlashes']),
)(Flashes)
