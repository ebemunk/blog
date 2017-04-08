import { isEqual } from 'lodash'

export const selectEpisodes = ({commit, state}, selection) => {
  // console.log('agaga', state.episodeSelectionRaw, selection)
  // if( isEqual(state.episodeSelection, selection) )
    commit('selectEpisodes', selection)
}
