<template>
	<div :class="$style.app">
		<EpisodeSelector
			:selection="episodeSelection"
		/>
		<div>{{ selected[0] }} - {{ selected[1] }}</div>
		<Sunburst />
		<!-- <div>
			<LengthChart
				:data="wordsChars"
			/>
		</div> -->
		<!-- <div><button @click="epx">Select some shit</button></div> -->
		<div :class="$style.row">
			<div :class="$style.force">
				<ForceGraph
					:width="650"
					:height="500"
					:data="charCooccurrence"
				/>
			</div>
			<div :class="$style.bar">
				<BarChart
					:width="650"
					:data="totalLines"
					:class="$style.totalLines"
				/>
			</div>
		</div>
	</div>
</template>

<style module>
body {
	/*background-color: #282c34;*/
}

div {
	/*max-width: 960px;*/
}

.app {
	display: flex;
	flex-direction: column;
}

.force, .bar {
	width: 50%;
}

.bar {
	max-height: 500px;
	overflow-y: scroll;
}

.row {
	display: flex;
	flex-direction: row;
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
	ForceGraph,
	LengthChart,
	Sunburst
} from './components'

const pad2 = _.partialRight(_.padStart, 2, 0)
const getKey = _.partialRight(_.get, 'key')

export default {
	name: 'app',
	components: {
		BarChart,
		EpisodeSelector,
		ForceGraph,
		LengthChart,
		Sunburst,
	},
	data: function () {
		return {
		}
	},
	computed: {
		...mapGetters([
			'episodeSelection',
			'selectedEpisodes',
			'totalLines',
			'charCooccurrence',
			'wordsChars',
			'wordsCharsxx'
		]),
		selected: function () {
			const {
				selectedEpisodes
			} = this

			return [
				getKey(selectedEpisodes[0]),
				getKey(_.last(selectedEpisodes))
			]
		}
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
