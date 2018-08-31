import { compose } from 'redux'
import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'

import fireActions from 'hoc/fireActions'
import { getLinesPerChar, linesPerCharBySelection } from 'store/linesPerChar'
import LinesPerChar from './LinesPerChar'

export default compose(
  hot(module),
  connect(
    state => ({
      data: linesPerCharBySelection(state),
    }),
    {
      getLinesPerChar,
    },
  ),
  fireActions(['getLinesPerChar']),
)(LinesPerChar)
