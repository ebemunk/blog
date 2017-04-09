<template>
<div :class="$style.app">
	<EpisodeSelector
		:selection="episodeSelection"
	/>
	<div>{{ selected[0] }} - {{ selected[1] }}</div>
	<div><button @click="epx">Select some shit</button></div>
	<ForceGraph
		:nodesProp="charOccNodes"
		:linksProp="charCooccurrence"
	/>
	<BarChart
		:data="totalLines"
		:class="$style.totalLines"
	/>
</div>
</template>

<style module>
.app {
	display: flex;
	flex-direction: column;
}

.totalLines {
	flex: 0 0 50%;
}

.forceGraph {
	border: 1px solid black
}
</style>

<script>
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'
import * as d3 from 'd3'

import * as data from './data'

import {
	BarChart,
	EpisodeSelector,
	ForceGraph
} from './components'

const pad2 = _.partialRight(_.padStart, 2, 0)
const getKey = _.partialRight(_.get, 'key')

export default {
	name: 'app',
	components: {
		BarChart,
		EpisodeSelector,
		ForceGraph
	},
	data: function () {
		return {}
	},
	computed: {
		...mapGetters([
			'episodeSelection',
			'selectedEpisodes',
			'totalLines',
			'charCooccurrence',
			'charOccNodes',
		]),
		selected: function () {
			const {
				selectedEpisodes
			} = this

			return [
				getKey(selectedEpisodes[0]),
				getKey(_.last(selectedEpisodes))
			]
		},
	},
	mounted() {
	},
	methods: {
		epx: function () {
			this.selectEpisodes([0, 16])
		},
		...mapActions([
			'selectEpisodes'
		])
	}
}
</script>
