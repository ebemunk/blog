import { isEqual } from 'lodash'

export const selectEpisodes = ({commit, state}, selection) => {
	if( ! isEqual(selection, state.episodeSelection) )
	commit('selectEpisodes', selection)
}
