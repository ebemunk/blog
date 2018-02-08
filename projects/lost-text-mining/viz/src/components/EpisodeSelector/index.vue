<template>
	<svg
		:width="width"
		:height="height"
		:class="$style.episodeSelector"
	>
		<g transform="translate(0, 0)">
			<g
				:class="$style.seasonAxis"
				transform="translate(0, 25)"
			></g>
			<g
				:class="$style.episodeAxis"
				transform="translate(0,22)"
			></g>
			<g :class="$style.brush"></g>
		</g>
	</svg>
</template>

<style module>
.episodeSelector {
	shape-rendering: crispEdges;

	& :global .domain {
		display: none;
	}
}

.seasonAxis {
	& :global .tick text {
		cursor: pointer;
		fill: #666;
		text-anchor: start;

		&:hover {
			fill: black;
		}
	}
}

.episodeAxis {
	& :global .domain {
		display: none;
	}
}

.brush {
	& :global .handle {
		fill: red;
		stroke-width: 0.01;
	}

	& :global .selection {
		stroke: none;
	}
}

</style>

<script>
import * as d3 from 'd3'
import _ from 'lodash'
import { mapGetters, mapActions } from 'vuex'

import { onBrush, onBrushEnd } from './brush'

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
		},
		selection: {
			type: Array,
			default: () => [0, 113]
		}
	},
	computed: {
		...mapGetters([
			'seasonEpisodes'
		]),
		domain: function () {
			return [
				...this.seasonEpisodes.map(d => new Date(d.date)),
				new Date(0, 0, this.seasonEpisodes.length)
			]
		},
		x: function () {
			return d3.scaleTime()
			.domain(
				d3.extent(this.domain)
			)
			.rangeRound([0, this.width])
		},
		brush: function () {
			return d3.brushX()
			.extent([[0, 0], [this.width, 25]])
			.handleSize(6)
			.on('brush', onBrush.bind(this))
			.on('end', onBrushEnd.bind(this))
		},
		xAxis: function () {
			return d3.axisBottom(this.x)
			.tickValues(
				this.seasonEpisodes
				.filter(d => d.episode === 1)
				.map(d => d.date)
			)
			.tickSize(-25)
			.tickFormat((d, i) => `Season ${i+1}`)
		},
		episodeAxis: function () {
			return d3.axisBottom(this.x)
			.ticks(d3.timeDay)
			.tickSize(-15)
			.tickFormat(() => null)
		}
	},
	mounted() {
		const {
			brush,
			xAxis,
			episodeAxis,
			$style,
		} = this

		d3.select(`.${$style.brush}`)
		.call(brush)

		d3.select(`.${$style.seasonAxis}`)
		.call(xAxis)
		.call(sel => {
			sel.selectAll('.tick text')
			.on('click', (d, i) => {
				const seasons = [
					[0, 24],
					[24, 47],
					[47, 69],
					[69, 82],
					[82, 98],
					[98, 114]
				]

				this.selectEpisodes(seasons[i])
			})
		})

		d3.select(`.${$style.episodeAxis}`)
		.call(episodeAxis)
	},
	watch: {
		selection: function (newVal) {
			if( _.every(newVal, val => !val) ) return

			if( newVal[1] === undefined ) newVal[1] = this.seasonEpisodes.length

			d3.select(`.${this.$style.brush}`)
			.call(this.brush.move, newVal.map(v => new Date(0,0,v)).map(this.x))
		}
	},
	methods: {
		...mapActions([
			'selectEpisodes'
		])
	}
}
</script>
