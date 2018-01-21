<template>
  <svg
    :class="$style.forceGraph"
    :width="width"
    :height="height"
  >
    <g
      :class="[$style.viewport, { [$style.loading]: loading < 100 }]"
    >
      <g :class="$style.links" />
      <g :class="$style.nodes" />
    </g>
    <g :transform="`translate(${width/2-50}, ${height/2-50})`">
      <Loader
        :percentage="loading"
        :width="100"
        v-if="loading < 100"
      />
    </g>
  </svg>
</template>

<style module>
.forceGraph {
  shape-rendering: initial;
}

.viewport {
  &.loading {
    opacity: 0.3;
  }
}

.nodes {
  stroke: white;
  stroke-width: 1;

  .node {}
}

.links {
  stroke: black;
  stroke-width: 1px;

  .link {}
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
  opacity: 0.5;
}
</style>

<script>
import * as d3 from 'd3'
import { mapGetters } from 'vuex'
import _ from 'lodash'

import Worker from './ForceGraph.worker'
import Loader from '../Loader'

export default {
  name: 'force-graph',
  components: {
    Loader
  },
  props: {
    width: {
      type: Number,
      default: () => 960
    },
    height: {
      type: Number,
      default: () => 500
    },
    data: {
      type: Object,
      default: () => ({
        nodes: [],
        links: []
      })
    }
  },
  data: function () {
    const { nodes, links } = _.cloneDeep(this.data)
    return {
      nodes,
      links,
      colorScale: d3.scaleOrdinal(d3.schemeCategory20),
      linkOpacityScale: d3.scaleLinear()
        .range([0.1, 1])
        .domain(d3.extent(links.map(d => d.value))),
      nodeSizeScale: d3.scaleLinear()
        .range([3, 20])
        .domain(d3.extent(nodes.map(d => d.r))),
      worker: new Worker(),
      loading: 0,
      highlighted: false,
    }
  },
  watch: {
    data: function (newVal) {
      const { nodes, links } = _.cloneDeep(this.data)
      this.nodes = nodes
      this.links = links

      this.linkOpacityScale.domain(d3.extent(links.map(d => d.value)))
      this.nodeSizeScale.domain(d3.extent(nodes.map(d => d.r)))

      this.worker.terminate()
      this.worker = new Worker()
      this.worker.onmessage = this.onmessage

      this.update()
    }
  },
  mounted() {
    this.worker.onmessage = this.onmessage

    this.update()
  },
  methods: {
    update() {
      const { nodes, links, worker } = this

      this.loading = 0

      worker.postMessage({
        type: 'start',
        nodes,
        links
      })
    },
    onmessage(event) {
      switch (event.data.type) {
        case "tick": {
          this.loading = event.data.progress * 100
          break
        }
        case "end": {
          this.loading = 100
          this.workerEnd(event.data)
          break
        }
      }
    },
    workerEnd(data) {
      const {
        colorScale,
        nodeSizeScale,
        linkOpacityScale,
        width,
        height,
        $style,
        onNodeClick
      } = this

      const { nodes, links } = data
      this.nodes = nodes
      this.links = links

      let node = d3.select(`.${$style.nodes}`).selectAll(`.${$style.node}`)
      let link = d3.select(`.${$style.links}`).selectAll(`.${$style.link}`)

      node = node.data(nodes, d => d.id)
      node.exit().transition()
        .attr('r', 0)
        .remove()
      node = node.enter().append('circle')
          .attr('fill', d => colorScale(d.id))
          .attr('class', $style.node)
          .attr('r', 1)
        .merge(node)
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)
          .call(node => node.transition().attr('r', d => nodeSizeScale(d.r)))
          .on('click', onNodeClick)
      node.append('title')
        .text(d => d.id)

      link = link.data(links, d => `${d.source.id}-${d.target.id}`)
      link.exit()
        .remove()
      link = link.enter().append('line')
        .attr('class', $style.link)
        .merge(link)
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y)
          .attr('stroke-opacity', d => linkOpacityScale(d.value))

      setTimeout(() => {
        let bounds = d3.select(`.${$style.nodes}`).node().getBBox()
        bounds = [[bounds.x, bounds.y], [bounds.x+bounds.width, bounds.y+bounds.height]]
        this.zoomToBounds(bounds)
      }, 250)
    },
    onNodeClick(data) {
      const {
        linkOpacityScale,
        links,
        $style
      } = this

      let node = d3.select(`.${$style.nodes}`).selectAll(`.${$style.node}`)
      let link = d3.select(`.${$style.links}`).selectAll(`.${$style.link}`)

      if( this.highlighted === data.id ) {
        node.transition().style('opacity', 1)
        link.transition().attr('stroke-opacity', d => linkOpacityScale(d.value))
        this.highlighted = false
        return
      }

      const filteredLinks = links
        .filter(d => d.source.id === data.id || d.target.id === data.id)
      const hLinks = filteredLinks
        .map(d => d.index)
      const hNodes = _.chain(filteredLinks)
        .reduce((acc, val) => acc.concat([val.source.id, val.target.id]), [])
        .uniq()
        .value()

      node.transition().style('opacity', 0.2)
        .filter(d => hNodes.includes(d.id))
        .style('opacity', 1)
      link.transition().attr('stroke-opacity', 0)
        .filter(d => hLinks.includes(d.index))
        .attr('stroke-opacity', d => linkOpacityScale(d.value))

      this.highlighted = data.id
    },
    getBoundsFromSelection(selection) {

    },
    zoomToBounds([[x0, y0], [x1, y1]]) {
      const {
        width,
        height,
        $style
      } = this

      const dx = x1 - x0
      const dy = y1 - y0
      const x = (x0 + x1) / 2
      const y = (y0 + y1) / 2
      const scale = .9 / Math.max(dx / width, dy / height)
      const translate = [width / 2 - scale * x, height / 2 - scale * y]

      d3.select(`.${$style.viewport}`)
      .transition()
        .duration(750)
        .attr('transform', `translate(${translate}) scale(${scale})`)
    }
  }
}
</script>
