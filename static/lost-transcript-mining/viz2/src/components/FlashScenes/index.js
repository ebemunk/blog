import { connect } from 'react-redux'

import { getFlashes } from '../../actions'

import FlashScenes from './FlashScenes'

const mapStateToProps = state => ({
	episodes: state.flashes.slice(state.episodeSelection[0], state.episodeSelection[1] ? state.episodeSelection[0]+1 : null)
})

const mapDispatchToProps = {
	getFlashes
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FlashScenes)

