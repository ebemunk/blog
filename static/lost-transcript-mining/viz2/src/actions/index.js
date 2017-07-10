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

export const getEpisodeLengths = () => async dispatch => {
	const episodeLengths = await import('../data/episodeLengths.json')

	dispatch({
		type: 'EPISODE_LENGTHS',
		payload: episodeLengths
	})
}

export const getFlashes = () => async dispatch => {
	const flashes = await import('../data/flashes.json')

	dispatch({
		type: 'FLASHES',
		payload: flashes
	})
}
