import _ from 'lodash'

export const selectEpisodes = (state, selection) => {
	state.episodeSelection = state.seasonEpisodes.slice(...selection)
}
