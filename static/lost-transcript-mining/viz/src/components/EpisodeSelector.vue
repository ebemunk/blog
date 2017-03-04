<template>
<div class="episode-selector">
	<svg
		:width="width"
		:height="height"
	>
		<g transform="translate(0, 0)">
			<g class="episodes"></g>
			<g class="x-axis"></g>
			<g class="brush"></g>
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
			default: () => 960
		},
		height: {
			type: Number,
			default: () => 40
		}
	},
	computed: {
		...mapGetters([
			'seasonEpisodes'
		])
	},
	mounted() {
		this.render()
	},
	methods: {
		...mapActions([
			'selectEpisodes'
		]),
		render() {
			const {
				seasonEpisodes
			} = this

			const x = d3.scaleBand()
				.range([0, this.width])
				.padding(0.1)
				.domain(seasonEpisodes.map(d => d.key))

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
			.tickSize(35)

			d3.select('.x-axis')
			.attr('transform', `translate(0, ${x.bandwidth()})`)
			.call(xAxis)
			.call(sel => {
				sel.selectAll('.tick line')
					.attr('transform', () => {
						const dx = (x.bandwidth()/2) + (x.padding()*x.step())
						const dy = x.bandwidth()
						return `translate(-${dx}, -${dy})`
					})
				sel.selectAll('.tick text')
					.attr('text-anchor', 'start')
					.attr('transform', () => {
						return `translate(0, -15)`
					})
			})

			const sel = d3.select('.episodes')
			.selectAll('.bar')
			.data(seasonEpisodes)

			sel.enter()
				.append('rect')
				.attr('class', 'bar')
				.attr('x', d => x(d.key))
				.attr('width', x.bandwidth())
				.attr('y', 0)
				.attr('height', 25)

			const leftEdges = x.domain().map(x)
			const invert = d => {
				const res = d3.bisectLeft(leftEdges, d)
				return x.domain()[res]
			}

			x.invert = (function(){
		    var domain = x.domain()
		    var range = x.range()
		    var scale = d3.scaleQuantize()
				.domain(range).range(domain)
				// .domain(domain).range(range)
				// return scale.invertExtent

		    return function(x){
		        return scale(x)
		    }
			})()

			const brush = d3.brushX()
			.extent([[0, 0], [this.width, 25]])
			.handleSize(1)
			.on('end', () => {
				// if( d3.event.sourceEvent.type === 'brush' ) return
				if( ! d3.event.sourceEvent ) return
				if( ! d3.event.selection ) return
				console.log(d3.event);
				const x0 = d3.event.selection.map(x.invert)
				console.log(x0);
				const selection = x0.map(x)
				// if( selection[0] === selection[1] ) {
					// selection[1] += x.bandwidth()
				// }
				// d3.select('.brush').call(d3.event.target.move, selection)
				// d3.select('.brush').transition().call(d3.event.target.move, selection)
				// this.selectEpisodes(x0)
			})

			d3.select('.brush')
			.call(brush)
		}
	}
}
</script>

<style>
.episode-selector svg .x-axis .domain {
	display: none;
}

.bar:hover {
	fill: red;
}

.brush .selection {
	stroke: none;
}

.brush .handle {
	fill: red;
}
</style>
