<template>
<div :class="$style.episodeSelector">
	<svg
		:width="width"
		:height="height"
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
</div>
</template>

<style module>
.episodeSelector {
	shape-rendering: crispEdges;

	& :global .domain {
		display: none;
	}
}

.seasonAxis {
}

.episodeAxis {
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
			default: () => [0, 110]
		}
	},
	data: function () {
		return {
			selectionz: this.selection
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
				dateMap,
				$style
			} = this

			const brush = d3.brushX()
			.extent([[0, 0], [this.width, 25]])
			.handleSize(6)
			.on('brush', () => {
				if( ! d3.event.sourceEvent ) return
				if( d3.event.sourceEvent.type === 'brush' ) return

				const d0 = d3.event.selection.map(x.invert)
				const d1 = d0.map(d3.timeDay.round)

				if( d1[0] >= d1[1] ) {
					d1[0] = d3.timeDay.floor(d0[0])
					d1[1] = d3.timeDay.offset(d1[0])
				}


				const selected = d1.map(d => {
					const episode = this.seasonEpisodes.find(ep => ep.date === d.getTime())
					return _.get(episode, 'i')
				})

				if( selected[0] === 0 && selected[1] === undefined ) {
					this.selectEpisodes([undefined, undefined])
					d3.select(`.${$style.brush}`).call(d3.event.target.move, null)
				} else {
					this.selectEpisodes(selected)
					d3.select(`.${$style.brush}`).call(d3.event.target.move, d1.map(x))
				}
			})
			.on('end', () => {
				if( ! d3.event.sourceEvent ) return
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
			episodeAxis,
			$style,
		} = this

		x.rangeRound([0, this.width])

		d3.select(`.${$style.brush}`).call(brush)

		d3.select(`.${$style.seasonAxis}`)
		.call(xAxis)
		.call(sel => {
			sel.selectAll('.tick text')
				.attr('text-anchor', 'start')
		})

		d3.select(`.${$style.episodeAxis}`)
		.call(episodeAxis)
		.call(sel => {
			sel.selectAll('.tick text').remove()
		})
	},
	watch: {
		selection: function (newVal) {
			if( _.every(newVal, val => !val) ) return
			if( newVal[1] === undefined ) newVal[1] = this.seasonEpisodes.length

			d3.select(`.${this.$style.brush}`).call(this.brush.move, newVal.map(v => new Date(0,0,v)).map(this.x))
		}
	},
	methods: {
		...mapActions([
			'selectEpisodes'
		])
	}
}
</script>
