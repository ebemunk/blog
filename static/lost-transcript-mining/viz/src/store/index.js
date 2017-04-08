import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

import { seasonEpisodes } from '../data/index.js'

Vue.use(Vuex)

const state = {
	seasonEpisodes,
	episodeSelection: seasonEpisodes.slice(),
}

const store = new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

if (module.hot) {
	module.hot.accept([
		'./getters',
		'./actions',
		'./mutations'
	], () => {
		store.hotUpdate({
			getters: require('./getters'),
			actions: require('./actions'),
			mutations: require('./mutations')
		})
	})
}

export default store
