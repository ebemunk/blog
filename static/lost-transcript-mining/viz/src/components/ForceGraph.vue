<template>
<svg class="keko" width="960" height="500">
  <g class="links" />
  <g class="nodes" />
</svg>
</template>

<style>
.keko {
  shape-rendering: initial;
}
.nodes {
  stroke: white;
  /*stroke-width: 2px;*/
}
.links {
  stroke: black;
  stroke-width: 1px;
}
</style>

<script>
import * as d3 from 'd3'
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
  name: 'force-graph',
  props: {
    nodesProp: {
      types: Array,
      default: () => []
    },
    linksProp: {
      types: Array,
      default: () => []
    }
  },
  data: function () {
    const nodes = _.cloneDeep(this.nodesProp)
    const links = _.cloneDeep(this.linksProp)
    return {
      color: d3.scaleOrdinal(d3.schemeCategory20),
      nodes,
      links,
      node: d3.select('.nodes').selectAll('.node'),
      link: d3.select('.links').selectAll('.link'),
      simulation: d3.forceSimulation(nodes)
      .force('charge', d3.forceManyBody().strength(-50))
      .force('link', d3.forceLink(links).id(d => d.id))
      .force('center', d3.forceCenter(960 / 2, 500 / 2))
      .force('y', d3.forceY().strength(0.2))
      .force('x', d3.forceX().strength(0.1))
      .on('tick', () => {
        console.log('tick');
        this.node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)

        this.link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)
      }),
      nodeSizeScale: d3.scaleLinear().range([3, 20]),
      linkOpacityScale: d3.scaleLinear().range([0.1, 1]),
    }
  },
  watch: {
    nodesProp: function (newVal) {
      this.nodes = _.cloneDeep(newVal)
      this.update()
    },
    linksProp: function (newVal) {
      this.links = _.cloneDeep(newVal)
      this.update()
    }
  },
  mounted() {
    this.node = d3.select('.nodes').selectAll('.node')
    this.link = d3.select('.links').selectAll('.link')

    this.update();
  },
  methods: {
    update() {
      const { simulation, color } = this
      let { nodes, links } = this

      this.nodeSizeScale.domain(d3.extent(this.nodes.map(d => d.r)))
      this.simulation.force('collision', d3.forceCollide(d => this.nodeSizeScale(d.r)))
      this.linkOpacityScale.domain(d3.extent(this.links.map(d => d.value)))
      // Apply the general update pattern to the nodes.
      this.node = this.node.data(nodes, d => d.id)

      this.node.exit().transition()
        .attr('r', 0)
        .remove()

      this.node = this.node.enter().append('circle')
          .attr('fill', d => color(d.id))
        .merge(this.node)
          .attr('stroke-width', 1)
          .call(node => node.transition().attr('r', d => this.nodeSizeScale(d.r)))

      this.node.append('title')
        .text(d => d.id)

      // Apply the general update pattern to the links.
      this.link = this.link.data(links, d => `${d.source.id}-${d.target.id}`)

      // Keep the exiting links connected to the moving remaining nodes.
      this.link.exit().transition()
        .attr('stroke-opacity', 0)
        .attrTween('x1', d => () => d.source.x)
        .attrTween('x2', d => () => d.target.x)
        .attrTween('y1', d => () => d.source.y)
        .attrTween('y2', d => () => d.target.y)
        .remove()

      this.link = this.link.enter().append('line')
        .merge(this.link)
          .call(link => link.transition().attr('stroke-opacity', d => this.linkOpacityScale(d.value)))

      // Update and restart the simulation.
      simulation.nodes(nodes)
      simulation.force('link').links(links)
      simulation.alpha(1).restart()
    }
  }
}
</script>
