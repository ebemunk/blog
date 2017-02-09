<template>
	<div>
		<h1>Bar bro</h1>
		<svg
			:width="width"
			:height="height"
		>
			<g
				:style="{
					transform: `translate(${margin.left}px, ${margin.top}px)`
				}
			">
				<g class="bars"></g>
			</g>
		</svg>
	</div>
</template>

<script>
import * as d3 from 'd3'

export default {
	name: 'bar-chart',
	props: {
		margin: {
			type: Object,
			default: () => ({
				left: 0,
				right: 0,
				top: 10,
				bottom: 10,
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
			default: () => [
				{name: 'fak', val: 5},
				{name: 'fafe', val: 3},
				{name: 'gege', val: 16},
			]
		}
	},
	data: function() {
		const {
			width,
			height,
			margin
		} = this;

		return {
			chartWidth: width - margin.left - margin.right,
			chartHeight: height - margin-top - margin.bottom
		}
	},
	mounted() {
		this.init()
	},
	methods: {
		init() {
			const {
				width,
				height,
				data
			} = this
			var x = d3.scaleBand()
			          .range([0, width])
			          .padding(0.1);
			var y = d3.scaleLinear()
			          .range([height, 0]);

		  // Scale the range of the data in the domains
		  x.domain(data.map(function(d) { return d.name; }));
		  y.domain([0, d3.max(data, function(d) { return d.val; })]);

			  d3.select('.bars').selectAll(".bar")
			      .data(this.data)
			    .enter().append("rect")
			      .attr("class", "bar")
			      .attr("x", function(d) { return x(d.name); })
			      .attr("width", x.bandwidth())
			      .attr("y", function(d) { return y(d.val); })
			      .attr("height", function(d) { return height - y(d.val); });

		}
	}
}
</script>

<style>
.bar {
	fill: steelblue;
}
</style>
