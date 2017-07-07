export const getEpisodes = () => async dispatch => {
	const episodes = await import('../data/episodes.json')

	dispatch({
		type: 'EPISODES',
		payload: episodes
	})
}

export const selectEpisodes = selection => ({
	type: 'SELECT_EPISODES',
	payload: selection
})
