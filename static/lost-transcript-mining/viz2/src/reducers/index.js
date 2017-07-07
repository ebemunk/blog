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

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	episodes,
	episodeSelection
})

export default rootReducer
