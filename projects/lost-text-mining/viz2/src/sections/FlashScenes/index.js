import { connect } from 'react-redux'
import { compose } from 'redux'

import { getFlashes } from '../../actions'
import { selectedFlashes } from '../../selectors'
import withEpSelector from 'hoc/withEpSelector'
import FlashScenes from './FlashScenes'

const mapStateToProps = state => ({
  episodes: selectedFlashes(state),
})

const mapDispatchToProps = {
  getFlashes,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withEpSelector(700),
)(FlashScenes)
