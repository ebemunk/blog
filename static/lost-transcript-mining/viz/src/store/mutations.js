import { isEqual } from 'lodash'

export const selectEpisodes = (state, selection) => {
	const newSelection = state.seasonEpisodes.slice(...selection)
	if( !isEqual(newSelection, state.episodeSelection) )
	state.episodeSelection = newSelection
	// state.episodeSelectionRaw = selection
}
