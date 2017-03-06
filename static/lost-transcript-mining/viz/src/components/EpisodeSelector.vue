<template>
<div class="episode-selector">
	<svg
		:width="width"
		:height="height"
	>
		<g transform="translate(0, 0)">
			<g class="episodes"></g>
			<g class="x-axis"></g>
			<g class="x-axis2"></g>
			<g class="b-axis"></g>
			<g class="brush"></g>
			<g class="fak"></g>
		</g>
	</svg>
</div>
</template>

<script>
import * as d3 from 'd3'
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'

import data from '../data/season-episode.json'

const pad2 = _.partialRight(_.padStart, 2, 0)

export default {
	name: 'episode-selector',
	props: {
		width: {
			type: Number,
			default: () => 990
		},
		height: {
			type: Number,
			default: () => 40
		}
	},
	computed: {
		...mapGetters([
			'seasonEpisodes'
		]),
	},
	mounted() {
		this.render()
	},
	methods: {
		...mapActions([
			'selectEpisodes'
		]),
		render() {
			let {
				seasonEpisodes
			} = this

			seasonEpisodes = seasonEpisodes//.slice(0,15)
			const hashmap = {}
			seasonEpisodes.map((d, i) => {
				hashmap[d.date.getTime()] = i
			})

			const lolz = seasonEpisodes.map(d => d.date)
			lolz.push(new Date(0,0,seasonEpisodes.length))

			const x = d3.scaleTime()
			.domain(
				d3.extent(
					lolz
				)
			)
			.rangeRound([0, this.width])

			const xAxis = d3.axisBottom(x)
			// .ticks(d3.timeDay)
			.tickValues(seasonEpisodes.filter(d => d.episode === 1).map(d => d.date))
			.tickSize(-25)
			.tickFormat((d, i) => this.seasonEpisodes[hashmap[d.getTime()]].key)

			d3.select('.x-axis')
			.attr('transform', `translate(0, 25)`)
			.call(xAxis)
			.call(sel => {
				sel.selectAll('.tick text')
					.attr('text-anchor', 'start')
			})

			d3.select('.x-axis2')
			.attr('transform', `translate(0, 22)`)
			.call(
				d3.axisBottom(x)
				.ticks(d3.timeDay)
				.tickSize(-15)
				.tickFormat(() => null)
			)
			.call(sel => {
				sel.selectAll('.tick text').remove()
				sel.selectAll('.tick')
				.filter(d => this.seasonEpisodes[hashmap[d.getTime()]] && this.seasonEpisodes[hashmap[d.getTime()]].episode === 1).remove()
			})

			const brush = d3.brushX()
			.extent([[0, 0], [this.width, 25]])
			.handleSize(1)
			.on('brush', () => {
				if (d3.event.sourceEvent.type === "brush") return;
				var d0 = d3.event.selection.map(x.invert),
						d1 = d0.map(d3.timeDay.round);

				// If empty when rounded, use floor instead.
				if (d1[0] >= d1[1]) {
					d1[0] = d3.timeDay.floor(d0[0]);
					d1[1] = d3.timeDay.offset(d1[0]);
				}

				d3.select('.brush').call(d3.event.target.move, d1.map(x));
				// console.group('ya')
				// console.log('event', d3.event);
				// console.log('selection', d3.event.selection);
				// console.log('d0', d0);
				// console.log('d1', d1);
				// console.log('snapped', d1.map(x));
				// console.log('seasonEpisodes', seasonEpisodes);
				// console.log('sel eps', hashmap[d1[0].getTime()], hashmap[d1[1].getTime()]);
				// console.groupEnd()
				this.selectEpisodes([hashmap[d1[0].getTime()], hashmap[d1[1].getTime()]])
			})

			d3.select('.brush')
			.call(brush)
		}
	}
}
</script>

<style>
svg {
	shape-rendering: crispEdges;
}
.domain {
	display: none;
}

.x-axis2 .tick line {
	stroke-width: 0.5;
	stroke: red;
}

/*.bar:hover {
	fill: red;
}*/

.bar {
	stroke: lightblue;
	fill: steelblue;
}

.brush .selection {
	stroke: none;
}

.brush .handle {
	fill: red;
	stroke-width: 0.01;
}
</style>
