import { compose } from 'redux'
import { connect } from 'react-redux'

import { linesPerCharBySelection } from '../../selectors'
import { fireActions } from '../../hoc'
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
)(LinesPerChar)
