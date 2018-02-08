<template>
  <svg
    :width="width"
    :height="height"
  >
    <g
      :class="$style.rects"
    />
  </svg>
</template>

<style module>
.rects {
  .rect {

  }
}

.scene {
  stroke: #333;
  stroke-width: 0;
}
</style>

<script>
import * as d3 from 'd3'
import R from 'ramda'

export default {
	name: 'length-chart',
	props: {
		width: {
			type: Number,
			default: () => 960
		},
		height: {
			type: Number,
			default: () => 40
		},
		data: {
			type: Array,
			default: () => []
		}
	},
	computed: {
    xScale: function () {
			return d3.scaleLinear()
			.range([0, this.width])
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
      .range([0, this.width])
      .domain([0, d3.max(data, d => d.total)])

      const color = d3.scaleOrdinal(d3.schemeCategory20)

      const scenes = d3.select(`.${$style.rects}`)
      .selectAll('g')
      .data(series)

      console.log(series);

      scenes.exit().remove()

      scenes.enter()
        .append('g')
          .attr('fill', color)
          .attr('class', $style.scene)

      const eps = scenes
      .selectAll('rect')
      .data(d => {return d})

      eps.exit().remove()

      eps.enter()
        .append('rect')
          .attr('y', 0)
          .attr('height', this.height)
          // .attr('rx', 3)
          // .attr('ry', 3)
        .merge(eps)
          .attr('x', d => x(d[0]))
          .attr('width', d => {return x(d[1]) - x(d[0])})
          .attr('y', 0)
          .attr('height', this.height)
    }
  }
}
</script>
