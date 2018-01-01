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

export const getLinesPerChar = () => async dispatch => {
	const linesPerChar = await import('../data/linesPerChar.json')

	dispatch({
		type: 'LINES_PER_CHAR',
		payload: linesPerChar
	})
}

export const getCharWordFrequencies = () => async dispatch => {
	const charWordFreq = await import('../data/charWordFrequencies.json')

	dispatch({
		type: 'CHAR_WORD_FREQ',
		payload: charWordFreq
	})
}

export const getPersonalities = () => async dispatch => {
	const personalities = await import('../data/personalities.json')

	dispatch({
		type: 'PERSONALITIES',
		payload: personalities
	})
}
