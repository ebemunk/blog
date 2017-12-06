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

export const getWordCount = () => async dispatch => {
	const wordCount = await import('../data/wordCount.json')

	dispatch({
		type: 'WORD_COUNT',
		payload: wordCount
	})
}

export const getFlashes = () => async dispatch => {
	const flashes = await import('../data/flashes.json')

	dispatch({
		type: 'FLASHES',
		payload: flashes
	})
}
