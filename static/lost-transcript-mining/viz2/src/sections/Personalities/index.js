import { connect } from 'react-redux'

import Personalities from './Personalities'

export default connect(
  state => ({
    dat: state.personalities.find(d => d.char_name === 'JACK')
  })
)(Personalities)
