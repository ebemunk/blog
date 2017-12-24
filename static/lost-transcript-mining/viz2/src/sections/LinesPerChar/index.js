import { connect } from 'react-redux'

import LinesPerChar from './LinesPerChar'
import { linesPerCharBySelection } from '../../selectors';

export default connect(
  state => ({
    data: linesPerCharBySelection(state)
  }),
  null
)(LinesPerChar)
