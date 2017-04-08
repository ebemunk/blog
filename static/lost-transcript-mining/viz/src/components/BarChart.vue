<template>
<div :class="$style.barChart">
	<svg
		:width="width"
		:height="height"
	>
		<g
			:class="$style.xAxis"
			:transform="transform"
		/>
		<g
			:class="$style.yAxis"
			:transform="transform"
		/>
		<g
			:transform="transform"
		>
			<g :class="$style.bars"></g>
		</g>
	</svg>
</div>
</template>

<style module>
.barChart {
	max-height: 15em;
	overflow-y: scroll;
	border: 1px solid black;
}
.bars {

}
.bar {
	fill: steelblue;
}
.xAxis {

}
.yAxis {

}
</style>

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
				right: 10,
				top: 20,
				bottom: 0,
			})
		},
		width: {
			type: Number,
			default: () => 960
		},
		barHeight: {
			type: Number,
			default: () => 20
		},
		data: {
			type: Array,
			default: () => []
		}
	},
	computed: {
		chartHeight: function () {
			return this.data.length*this.barHeight
		},
		chartWidth: function () {
			return this.width - this.padding.left - this.padding.right
		},
		transform: function () {
			return `translate(${this.padding.left}, ${this.padding.top})`
		},
		height: function () {
			return this.chartHeight + this.padding.top + this.padding.bottom
		},
		x: function () {
			const {
				chartWidth,
				data
			} = this

			return d3.scaleLinear()
			.range([0, chartWidth])
			.domain([0, d3.max(data, d => d.lines)])
		},
		y: function () {
			const { data } = this

			return d3.scaleBand()
			.range([0, this.chartHeight])
			.padding(0.1)
			.domain(data.map(d => d.char_name))
		},
		xAxis: function () {
			const {
				x,
				chartHeight
			} = this

			return d3.axisTop(x)
			.tickSize(-chartHeight)
		},
		yAxis: function () {
			const { y } = this

			return d3.axisLeft(y)
			.tickSize(0)
			.tickFormat(d => d.replace(
				/\w+/g,
				txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
			))
		}
	},
	mounted() {
		this.render()
	},
	watch: {
		data: function () {
			this.render()
		}
	},
	methods: {
		render() {
			const {
				$style,
				data,
				y,
				x
			} = this

			// x axis
			d3.select(`.${$style.xAxis}`)
			.transition().duration(750)
			.call(this.xAxis)

			// y axis
			d3.select(`.${$style.yAxis}`)
			.call(this.yAxis)

			// bar selection
			var selection = d3.select(`.${$style.bars}`)
			.selectAll(`.${$style.bar}`)
			.data(data)

			// remove bars that leave data
			selection.exit().remove()

			// place <g>s to hold bars
			const barG = selection.enter()
			.append('g')
				.attr('transform', d => `translate(0, ${y(d.char_name)})`)

			// render bars
			barG
			.append('rect')
				.attr('class', $style.bar)
				.attr('x', 0)
				.attr('y', 0)
				.attr('height', y.bandwidth())
			.merge(selection)
			.transition().duration(750)
				.attr('width', d => x(d.lines))
		}
	}
}
</script>
