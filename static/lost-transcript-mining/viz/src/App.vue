<template>
	<div>
		<EpisodeSelector />
		<BarChart :data="totalLines" />
		<div>{{ selected[0] }} - {{ selected[1] }}</div>
	</div>
</template>

<script>
import _ from 'lodash'
import { mapGetters } from 'vuex'

import * as data from './data'

import {
	BarChart,
	EpisodeSelector,
} from './components'

const pad2 = _.partialRight(_.padStart, 2, 0)
const getKey = _.partialRight(_.get, 'key')

export default {
	name: 'app',
	components: {
		BarChart,
		EpisodeSelector
	},
	computed: {
		...mapGetters([
			'seasonEpisodes',
			'episodeSelection'
		]),
		selected: function () {
			const {
				episodeSelection
			} = this

			return [
				getKey(episodeSelection[0]),
				getKey(_.last(episodeSelection))
			]
		},
		totalLines: function () {
			console.log('computing');
			const keepKeys = this.episodeSelection.map(d => d.key)
			const plz = _(data.totalLines)
			.filter(d => {
				// console.log('wa', d);
				return keepKeys.includes(`S${pad2(d.season)}-E${pad2(d.episode)}`)
			})
			.groupBy('char_name')
			.map((char, key) => ({
				char_name: key,
				lines: char.reduce((total, val) => {
					return total + val.lines
				}, 0)
			}))
			.orderBy('lines', 'desc')
			.value()
			console.log(plz);
			return plz
		}
	},
	methods: {
	}
}
</script>
