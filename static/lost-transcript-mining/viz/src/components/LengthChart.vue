<template>
  <svg
    :width="width"
    :height="height"
  >
    <g
      :class="$style.rects"
      :transform="transform"
    />
  </svg>
</template>

<style module>
.rects {
  .rect {

  }
}

.scene {
  fill: #333;
  stroke: white;
  stroke-width: 1;
}
</style>

<script>
import * as d3 from 'd3'
import R from 'ramda'

export default {
	name: 'length-chart',
	props: {
		padding: {
			type: Object,
			default: () => ({
				left: 5,
				right: 5,
				top: 5,
				bottom: 5,
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
	computed: {
		chartHeight: function () {
			return this.height - this.padding.top - this.padding.bottom
		},
		chartWidth: function () {
			return this.width - this.padding.left - this.padding.right
		},
		transform: function () {
			return `translate(${this.padding.left}, ${this.padding.top})`
		},
    xScale: function () {
			return d3.scaleLinear()
			.range([0, this.chartWidth])
			.domain([0, d3.max(this.data, d => d.lines)])
    }
  },
  watch: {
    data: function () {
      this.render()
    }
  },
  mounted() {
    this.render()
  },
  methods: {
    render() {
      const {
        $style,
        data,
      } = this

      var stack = d3.stack()
        // .keys(["apples", "bananas", "cherries", "dates"])
        .keys(R.keys(R.omit(['key', 'total'])(data[0])))
        .order(d3.stackOrderNone)
        .offset(d3.stackOffsetNone);

      var series = stack(data);

      const x = d3.scaleLinear()
      .range([0, this.chartWidth])
      .domain([0, d3.max(data, d => d.total)])

      const y = d3.scaleBand()
      .rangeRound([0, this.chartHeight])
      .padding(0.1)
      .domain(data.map(d => d.key))

      const color = d3.scaleOrdinal(d3.schemeCategory20)

      const scenes = d3.select(`.${$style.rects}`)
      .selectAll('g')
      .data(series)

      console.log(series);

      scenes.exit().remove()

      scenes.enter()
        .append('g')
          // .attr('fill', color)
          .attr('class', $style.scene)

      const eps = scenes
      .selectAll('rect')
      .data(d => {return d})

      eps.exit().remove()

      eps.enter()
        .append('rect')
          .attr('y', d => y(d.data.key))
          .attr('height', y.bandwidth())
          .attr('rx', 3)
          .attr('ry', 3)
        .merge(eps)
          .attr('x', d => x(d[0]))
          .attr('width', d => {return x(d[1]) - x(d[0])})
          .attr('y', d => y(d.data.key))
          .attr('height', y.bandwidth())
    }
  }
}
</script>
