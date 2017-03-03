<template>
<div class="episode-selector">
	<svg
		:width="width"
		:height="height"
	>
		<g transform="translate(0, 150)">
			<g class="episodes"></g>
			<g class="x-axis"></g>
		</g>
	</svg>
</div>
</template>

<script>
import * as d3 from 'd3'
import _ from 'lodash'

import data from '../data/season-episode.json'

const pad2 = _.partialRight(_.padStart, 2, 0)

export default {
	name: 'episode-selector',
	props: {
		width: {
			type: Number,
			default: () => 960
		},
		height: {
			type: Number,
			default: () => 500
		}
	},
	data: () => ({
		episodes: data.rows.slice(0,30).map(d => ({
			...d,
			key: `S${pad2(d.season)}-E${pad2(d.episode)}`
		}))
	}),
	mounted() {
		this.render()
	},
	methods: {
		render() {
			const {
				episodes
			} = this

			const x = d3.scaleBand()
				.range([0, this.width])
				.padding(0.1)
				.domain(episodes.map(d => d.key))

			const xAxis = d3.axisBottom(x)
			.tickValues([
				'S01-E01',
				'S02-E01',
				'S03-E01',
				'S04-E01',
				'S05-E01',
				'S06-E01'
			])
			.tickFormat((d, i) => `Season ${i+1}`)
			.tickSize(x.bandwidth()*2)

			d3.select('.x-axis')
			.attr('transform', `translate(0, ${x.bandwidth()})`)
			.call(xAxis)
			.call(sel => {
				sel.selectAll('.tick line')
					.attr('transform', () => {
						const dx = x.bandwidth()/2
						const dy = x.bandwidth()
						return `translate(-${dx}, -${dy})`
					})
				sel.selectAll('.tick text')
					.attr('text-anchor', 'start')
			})
			// .select('.domain').remove()

			const sel = d3.select('.episodes')
			.selectAll('.bar')
			.data(this.episodes)

			sel.enter()
				.append('rect')
					.attr('class', 'bar')
					.attr('x', d => x(d.key))
					.attr('width', x.bandwidth())
					.attr('y', 0)
					.attr('height', x.bandwidth())

		}
	}
}
</script>

<style>
.episode-selector svg .x-axis .domain {
	display: none;
}
</style>
