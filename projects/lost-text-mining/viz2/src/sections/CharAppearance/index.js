import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import { getCharAppearance } from 'store/charAppearance'
import fireActions from 'hoc/fireActions'
import CharAppearance from './CharAppearance'

export default compose(
  hot(module),
  connect(
    state => ({
      data: state.charAppearance,
      episodes: state.episodes,
    }),
    {
      getCharAppearance,
    },
  ),
  fireActions(['getCharAppearance']),
)(CharAppearance)
