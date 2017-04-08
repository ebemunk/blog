<template>
<div>
  <svg
    :width="width"
    :height="height"
    class="forceGraph"
  >
  </svg>
</div>
</template>

<style>
.forceGraph {
	shape-rendering: inherit;
}
.link {
  stroke: #999;
  stroke-opacity: 0.6;
}

.node {
  stroke: #fff;
  stroke-width: 1.5px;
}

</style>

<script>
import * as d3 from 'd3'

export default {
  name: 'force-graph',
  props: {
    width: {
      type: Number,
      default: () => 500
    },
    height: {
      type: Number,
      default: () => 500
    },
    nodes: {
      type: Array,
      default: () => []
    },
    links: {
      type: Array,
      default: () => []
    },
    simulation: {
      type: Object,
      default: () => d3.forceSimulation()
        .force('link', d3.forceLink().id(d => d.id))
        .force('charge', d3.forceManyBody())
        // .stop()
    }
  },
  computed: {
    color: function () {
      return d3.scaleOrdinal(d3.schemeCategory20)
    },
    throttledRender: function () {
      return _.debounce(this.render, 1000)
    }
  },
  mounted() {
    const {
      width,
      height,
      simulation,
      nodes
    } = this

    simulation.force('center', d3.forceCenter(width/2, height/2))
    // const node = d3.select('.forceGraph').selectAll('.node')
    // const link = d3.select('.forceGraph').selectAll('.link')

    simulation
    .on('tick', () => {
      const { node, link } = this
      // console.log('tick', node, link);
      if(! node || ! link ) return
      node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; })


      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });
      console.log('tick', node.nodes().length);

    })

    console.log('mounted', nodes);
    this.render()
  },
  watch: {
    links: function () {
      this.render()
    },
    nodes: function () {
      this.render()
    }
  },
  methods: {
    render() {
      const {
        width,
        height,
        color,
        simulation,
        nodes,
        links,
      } = this


                    simulation.nodes(nodes)
                    simulation.force('link').links(links)
                    simulation.alpha(1).restart()

                    // // See https://github.com/d3/d3-force/blob/master/README.md#simulation_tick
                    // for (var i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
                    //   simulation.tick();
                    //   console.log('tick');
                    // }
                        // this.simulation.restart()
                        // this.simulation.nodes(this.nodes)
                        //
                        //
                        //

                              this.link = d3.select('.forceGraph').selectAll('.link').data(this.links)

                              this.link.exit().remove()
                              this.link = this.link.enter().append('line')
                                .attr('class', 'link')
                                .merge(this.link)





    this.node = d3.select('.forceGraph').selectAll('.node').data(this.nodes)

                this.node.exit().transition()
                    .attr("r", 0)
                    .remove();


            this.node = this.node.enter().append('circle')
              .attr('class', 'node')
              // .attr('cx', d => d.x)
              // .attr('cy', d => d.y)
              // .call(function(node) { node.transition().attr("r", 5); })
              .attr('r', 5)
              // .append("title").text(function(d) { return d.id; })
              // .merge(this.node)



console.log('nodes', nodes.length, nodes);

      // node.append('title')
      // .classed('fafa', true)
      // .text(d => d.id)

    }
  }
}
</script>
