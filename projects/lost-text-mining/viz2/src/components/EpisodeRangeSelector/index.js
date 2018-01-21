import { connect } from 'react-redux'

import { getEpisodes, selectEpisodes } from '../../actions'
import EpisodeRangeSelector from './EpisodeRangeSelector'

const mapStateToProps = state => ({
	episodes: state.episodes,
	selection: state.episodeSelection
})

const mapDispatchToProps = {
	getEpisodes,
	selectEpisodes: selectEpisodes
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EpisodeRangeSelector)
