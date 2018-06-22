import * as d3 from 'd3'

onmessage = event => {
  const { nodes, links } = event.data.payload

  const nodeSizeScale = d3
    .scaleLinear()
    .range([5, 30])
    .domain(d3.extent(nodes.map(d => d.numLinksTo)))

  const simulation = d3
    .forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(-100))
    .force(
      'link',
      d3.forceLink(links).id(d => d.id),
      // .strength(0.5),
    )
    .force('center', d3.forceCenter(960 / 2, 500 / 2))
    .force('y', d3.forceY().strength(0.2))
    .force('x', d3.forceX().strength(0.1))
    .force('collision', d3.forceCollide(d => nodeSizeScale(d.numLinksTo)))
    .stop()

  let prev = 0

  for (
    let i = 0,
      n = Math.ceil(
        Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()),
      );
    i < n;
    ++i
  ) {
    const pct = i / n
    if (pct - prev > 0.02) {
      postMessage({ type: 'TICK', payload: i / n })
      prev = pct
    }
    simulation.tick()
  }

  postMessage({
    type: 'END',
    payload: {
      nodes,
      links,
    },
  })
}
