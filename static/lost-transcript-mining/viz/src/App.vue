<template>
<div :class="$style.app">
	<EpisodeSelector />
	<div>{{ selected[0] }} - {{ selected[1] }}</div>
	<Ex
		:nodesProp="charOccNodes"
		:linksProp="charCooccurrence"
	/>
	<!-- <BarChart
		:data="totalLines"
		:class="$style.totalLines"
	/> -->
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
import { mapGetters } from 'vuex'
import * as d3 from 'd3'

import * as data from './data'

import {
	BarChart,
	EpisodeSelector,
	ForceGraph,
	Ex
} from './components'

const pad2 = _.partialRight(_.padStart, 2, 0)
const getKey = _.partialRight(_.get, 'key')

export default {
	name: 'app',
	components: {
		BarChart,
		EpisodeSelector,
		ForceGraph,
		Ex
	},
	data: function () {
		return {}
	},
	computed: {
		...mapGetters([
			'episodeSelection',
			'selectedEpisodes',
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
		totalLines: function () {
			// console.log('computing');
			const keepKeys = this.selectedEpisodes.map(d => d.key)
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
			// console.log(plz);
			return plz
		},
		charOccNodes: function () {
			const { charCooccurrence } = this
			const nodes = _.uniq(charCooccurrence.map(d => d.source).concat(charCooccurrence.map(d => d.target)))
			.map(d => {
				const r = charCooccurrence.filter(item => item.target === d).length
				return {
					id: d,
					r: Math.max(r+2, 3)
				}
			})

			return nodes
		},
		charCooccurrence: function () {
			const keepKeys = this.selectedEpisodes.map(d => d.key)
			const plz = _(data.charCooccurrence)
			.filter(d => {
				// console.log('wa', d);
				return keepKeys.includes(`S${pad2(d.season)}-E${pad2(d.episode)}`)
			})
			// .tap(plzl => console.log('ya', plzl))
			.reduce((map, val) => {
				const key = _.pick(val, ['from_char', 'to_char'])
				if( ! map.has(key) ) {
					map.set(key, val.val)
				} else {
					const c = map.get(key)
					map.set(key, c+val.val)
				}
				return map
			}, new Map())

			const plz2 = Array.from(plz)
			.map(d => {
				return {
					source: d[0].from_char,
					target: d[0].to_char,
					value: d[1]
				}
			})

			// const plz2 = _.map(plz,(v, key) => {
			// 	console.log('wa', v, key);
			// 	return {
			// 		...key,
			// 		count: v
			// 	}
			// })
			console.log('val', plz2);
			return plz2
		}
	},
	mounted() {
	},
	methods: {
	}
}
</script>
