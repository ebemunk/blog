import * as d3 from 'd3'

onmessage = event => {
  const { nodes, links } = event.data

  const nodeSizeScale = d3.scaleLinear()
  .range([3, 20])
  .domain(d3.extent(nodes.map(d => d.r)))

  const simulation = d3.forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(-50))
  .force('link', d3.forceLink(links).id(d => d.id))
  .force('center', d3.forceCenter(960 / 2, 500 / 2))
  .force('y', d3.forceY().strength(0.2))
  .force('x', d3.forceX().strength(0.1))
  .force('collision', d3.forceCollide(d => nodeSizeScale(d.r)))
  .stop()

  for (let i = 0, n = Math.ceil(Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay())); i < n; ++i) {
    postMessage({type: "tick", progress: i / n});
    simulation.tick();
  }

  postMessage({
    type: 'end',
    nodes,
    links
  })
}
