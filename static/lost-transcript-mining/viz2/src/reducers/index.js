const episodes = (state = [], action) => {
	switch( action.type ) {
		case 'EPISODES':
			return action.payload
		default:
			return state
	}
}

const episodeSelection = (state = [null, null], action) => {
	switch( action.type ) {
		case 'SELECT_EPISODES':
			return action.payload
		default:
			return state
	}
}

const wordCount = (state = [], action) => {
	switch( action.type ) {
		case 'WORD_COUNT':
			return action.payload
		default:
			return state
	}
}

const flashes = (state = [], action) => {
	switch( action.type ) {
		case 'FLASHES':
			return action.payload
		default:
			return state
	}
}

const linesPerChar = (state = [], action) => {
	switch( action.type ) {
		case 'LINES_PER_CHAR':
			return action.payload
		default:
			return state
	}
}

const charWordFrequencies = (state = [], action) => {
	switch( action.type ) {
		case 'CHAR_WORD_FREQ':
			return action.payload
		default:
			return state
	}
}

const personalities = (state = [], action) => {
	switch( action.type ) {
		case 'PERSONALITIES':
			return action.payload
		default:
			return state
	}
}

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	episodes,
	episodeSelection,
	wordCount,
	flashes,
	linesPerChar,
	charWordFrequencies,
	personalities
})

export default rootReducer
