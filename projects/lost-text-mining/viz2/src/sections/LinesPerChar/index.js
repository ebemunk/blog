import { compose } from 'redux'
import { connect } from 'react-redux'

import { linesPerCharBySelection } from '../../selectors'
import fireActions from 'hoc/fireActions'
import withEpSelector from 'hoc/withEpSelector'
import { getLinesPerChar } from '../../actions'
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
