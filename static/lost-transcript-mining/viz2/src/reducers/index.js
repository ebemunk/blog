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
		case 'EPISODES':
			return [0, action.payload.length-1]
		case 'SELECT_EPISODES':
			return action.payload
		default:
			return state
	}
}

const episodeLengths = (state = [], action) => {
	switch( action.type ) {
		case 'EPISODE_LENGTHS':
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

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	episodes,
	episodeSelection,
	episodeLengths,
	flashes
})

export default rootReducer
