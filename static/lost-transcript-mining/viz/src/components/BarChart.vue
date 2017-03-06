<template>
	<div>
		<h2>Total Lines</h2>
		<svg
			:width="width"
			:height="height"
		>
			<g class="x-axis"></g>
			<g class="y-axis"></g>
			<g
				:style="{
					transform: `translate(${padding.left}px, ${padding.top}px)`
				}
			">
				<g class="bars"></g>
			</g>
		</svg>
	</div>
</template>

<script>
import * as d3 from 'd3'
import { mapGetters } from 'vuex'

export default {
	name: 'bar-chart',
	props: {
		padding: {
			type: Object,
			default: () => ({
				left: 50,
				right: 0,
				top: 50,
				bottom: 0,
			})
		},
		width: {
			type: Number,
			default: () => 960
		},
		height: {
			type: Number,
			default: () => 500
		},
		data: {
			type: Array,
			default: () => []
		}
	},
	mounted() {
		this.render()
	},
	computed: {
		chartHeight: function () {
			return this.height - this.padding.top - this.padding.bottom
		},
		chartWidth: function () {
			return this.width - this.padding.left - this.padding.right
		},
		...mapGetters([
			'episodeSelection'
		])
	},
	watch: {
		data: function() {
			this.render()
		}
	},
	methods: {
		render() {
			const {
				chartWidth,
				chartHeight,
				data
			} = this

			const x = d3.scaleLinear().range([0, chartWidth])
			const y = d3.scaleBand().range([0, data.length*25]).padding(0.1)

			x.domain([0, d3.max(data, d => d.lines)])
			y.domain(data.map(d => d.char_name))

			const yAxis = d3.axisLeft(y)
				.tickSize(0)

			d3.select('.y-axis')
			.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`)
			.call(yAxis)
			.select('.domain').remove()

			const xAxis = d3.axisTop(x)
				.tickSize(-this.chartHeight)

			d3.select('.x-axis')
			.attr('transform', `translate(${this.padding.left}, ${this.padding.top})`)
			.call(xAxis)
			.select('.domain').remove()

			var sel = d3.select('.bars').selectAll('.bar')
				.data(data)

			sel.exit().remove()

			const barG = sel.enter()
				.append('g')
					.attr('transform', d => `translate(0, ${y(d.char_name)})`)

			barG
					.append('rect')
						.attr('class', 'bar')
						.attr('x', 0)
						.attr('y', 0)
						.attr('height', y.bandwidth())
					.merge(sel)
					.transition()
								.duration(750)
						.attr('width', d => x(d.lines))

			// barG
			// 		.append('text')
			// 		.filter((d, i) => i < 10)
			// 			.text(d => d.lines)
			// 				.attr('dx', d => x(d.lines)-5)
			// 				.attr('dy', d => y.bandwidth()/2)
			// 				.attr('dominant-baseline', 'central')
			// 				.attr('text-anchor', 'end')
			// 				.style('fill', 'white')


				// .merge(sel)
				// .transition()
				// 			.duration(750)
				// 	.attr('width', d => x(d.lines))

		}
	}
}
</script>

<style module>
.bar {
	fill: steelblue;
}
</style>
