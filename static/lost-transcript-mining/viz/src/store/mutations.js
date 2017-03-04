import _ from 'lodash'

export const selectEpisodes = (state, selection) => {
	const findIndex = _.partial(_.findIndex, state.seasonEpisodes)
	const slice = selection.map(key => findIndex({ key }))
	if( slice[0] === slice[1] ) {
		slice[1]++
	}
	state.episodeSelection = state.seasonEpisodes.slice(...slice)
}
