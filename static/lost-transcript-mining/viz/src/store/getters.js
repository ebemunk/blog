export const seasonEpisodes = state => state.seasonEpisodes
export const episodeSelection = state => state.episodeSelection
export const selectedEpisodes = state => state.seasonEpisodes.slice(...state.episodeSelection)
