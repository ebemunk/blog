import { connect } from 'react-redux'

import { getFlashes } from '../../actions'
import { selectedFlashes } from '../../selectors'

import FlashScenes from './FlashScenes'

const mapStateToProps = state => ({
	episodes: selectedFlashes(state)
})

const mapDispatchToProps = {
	getFlashes
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FlashScenes)

