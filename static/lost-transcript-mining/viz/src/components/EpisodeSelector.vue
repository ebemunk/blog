<template>
<div class="episode-selector">
	<svg
		:width="width"
		:height="height"
	>
		<g transform="translate(0, 0)">
			<g
				class="season-axis"
				transform="translate(0, 25)"
			></g>
			<g
				class="episode-axis"
				transform="translate(0,22)"
			></g>
			<g class="brush"></g>
		</g>
	</svg>
</div>
</template>

<script>
import * as d3 from 'd3'
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'

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
		domain: function () {
			const {
				seasonEpisodes
			} = this
			const domain = seasonEpisodes.map(d => new Date(d.date))
			domain.push(new Date(0, 0, seasonEpisodes.length))
			return domain
		},
		x: function () {
			const x = d3.scaleTime()
			.domain(
				d3.extent(this.domain)
			)
			return x
		},
		brush: function () {
			const {
				x,
				dateMap
			} = this
			const brush = d3.brushX()
			.extent([[0, 0], [this.width, 25]])
			.handleSize(1)
			.on('brush', () => {
				if (d3.event.sourceEvent.type === 'brush') return
				const d0 = d3.event.selection.map(x.invert)
				const d1 = d0.map(d3.timeDay.round)

				// If empty when rounded, use floor instead.
				if( d1[0] >= d1[1] ) {
					d1[0] = d3.timeDay.floor(d0[0])
					d1[1] = d3.timeDay.offset(d1[0])
				}
				d3.select('.brush').call(d3.event.target.move, d1.map(x))
				const selected = d1.map(d => {
					return this.seasonEpisodes.find(ep => ep.date===d.getTime()).i
				})
				this.selectEpisodes(selected)
			})
			.on('end', () => {
				if( ! d3.event.selection ) {
					this.selectEpisodes([undefined, undefined])
				}
			})
			return brush
		},
		xAxis: function () {
			const {
				x,
				seasonEpisodes,
			} = this
			const xAxis = d3.axisBottom(x)
			.tickValues(
				seasonEpisodes
				.filter(d => d.episode === 1)
				.map(d => d.date)
			)
			.tickSize(-25)
			.tickFormat((d, i) => `Season ${i+1}`)

			return xAxis
		},
		episodeAxis: function () {
			const {
				x
			} = this
			const axis = d3.axisBottom(x)
			.ticks(d3.timeDay)
			.tickSize(-15)
			.tickFormat(() => null)
			return axis
		}
	},
	mounted() {
		const {
			x,
			brush,
			xAxis,
			episodeAxis
		} = this

		x.rangeRound([0, this.width])

		d3.select('.brush').call(brush)

		d3.select('.season-axis')
		.call(xAxis)
		.call(sel => {
			sel.selectAll('.tick text')
				.attr('text-anchor', 'start')
		})

		d3.select('.episode-axis')
		.call(episodeAxis)
		.call(sel => {
			sel.selectAll('.tick text').remove()
			// sel.selectAll('.tick')
			// .filter(d => this.seasonEpisodes[hashmap[d]] && this.seasonEpisodes[hashmap[d]].episode === 1).remove()
		})
	},
	methods: {
		...mapActions([
			'selectEpisodes'
		])
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

/*.season-axis2 .tick line {
	stroke-width: 0.5;
	stroke: red;
}*/

/*.bar:hover {
	fill: red;
}*/

/*.bar {
	stroke: lightblue;
	fill: steelblue;
}*/

.brush .selection {
	stroke: none;
}

.brush .handle {
	fill: red;
	stroke-width: 0.01;
}
</style>
