<template>
<svg
	:class="$style.loader"
	:width="width"
	:height="width"
>
	<path
		:class="$style.background"
		:transform="`translate(${halfWidth}, ${halfWidth})`"
	/>
	<path
		:class="$style.foreground"
		:transform="`translate(${halfWidth}, ${halfWidth})`"
	/>
	<text
		:class="$style.text"
		:transform="`translate(${halfWidth}, ${halfWidth})`"
	/>
</svg>
</template>

<style module>
.loader {

}

.background {
	fill: #ddd;
}

.foreground {
	fill: steelblue;
}

.text {
	font-size: 1.2em;
	dominant-baseline: central;
	text-anchor: middle;
	fill: steelblue;
	stroke: black;
	stroke-width: 0.4;
}
</style>

<script>
import * as d3 from 'd3'

const tau = 2 * Math.PI

export default {
	name: 'loader',
	props: {
		width: {
			type: Number,
			default: () => 100
		},
		percentage: {
			type: Number,
			default: () => 0
		}
	},
	computed: {
		halfWidth: function () {
			return this.width / 2
		},
		arc: function () {
			const { halfWidth } = this
			return d3.arc()
				.innerRadius(halfWidth-8)
				.outerRadius(halfWidth)
				.startAngle(0)
		}
	},
	data: function () {
		return {}
	},
	watch: {
		percentage: function () {
			this.update()
		}
	},
	mounted() {
		const {
			$style,
			halfWidth,
			arc,
			percentage
		} = this

		d3.select(`.${$style.background}`)
			.datum({ endAngle: tau })
			.attr('d', arc)

		d3.select(`.${$style.foreground}`)
			.datum({ endAngle: 0 })
			.attr('d', arc)

		d3.select(`.${$style.text}`)
			.text(`${percentage}%`)
	},
	methods: {
		update() {
			const {
				arc,
				$style,
				percentage
			} = this

			const arcTween = newAngle => d => {
				const interpolate = d3.interpolate(d.endAngle, newAngle)
				return t => {
					d.endAngle = interpolate(t)
					return arc(d)
				}
			}

			d3.select(`.${$style.foreground}`).transition()
				.duration(150)
				.attrTween('d', arcTween(percentage/100 * tau))

			d3.select(`.${$style.text}`)
				.text(d3.format(".0%")(percentage/100))
		}
	}
}
</script>
