import { compose } from 'redux'
import { connect } from 'react-redux'

import fireActions from 'hoc/fireActions'
import withEpSelector from 'hoc/withEpSelector'
import { getLinesPerChar, linesPerCharBySelection } from 'store/linesPerChar'
import LinesPerChar from './LinesPerChar'

export default compose(
  connect(
    state => ({
      data: linesPerCharBySelection(state),
    }),
    {
      getLinesPerChar,
    },
  ),
  fireActions(['getLinesPerChar']),
  withEpSelector(700),
)(LinesPerChar)
