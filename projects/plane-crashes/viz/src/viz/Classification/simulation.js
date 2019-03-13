import {
  forceSimulation,
  forceLink,
  forceCenter,
  forceManyBody,
  forceCollide,
  forceX,
  forceRadial,
} from 'd3-force'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

import data from '../../data/classification-links.json'

const getNodes = () => data.nodes.map(d => ({ ...d }))
const getLinks = () => data.links.map(d => ({ ...d }))

console.log(
  'fifi',
  getNodes()
    .map(d => d.links)
    .sort((a, b) => b - a),
)

export default function runSimulation({ chartWidth, chartHeight }) {
  const nodes = getNodes()
  const links = getLinks()

  const radius = scaleLinear()
    .domain(extent(nodes.map(d => d.links)))
    .range([3, 25])

  const simulation = forceSimulation(nodes)
    .force(
      'link',
      forceLink(links).id(d => d.id),
      //.distance(200),
    )
    .force('center', forceCenter(chartWidth / 2, chartHeight / 2))
    .force('collide', forceCollide(d => radius(d.links) * 2.5))
    //.force('radial', forceRadial(100, chartWidth / 2, chartHeight / 2))
    //.force('manybody', forceManyBody())
    .stop()

  for (
    let i = 0,
      n = Math.ceil(
        Math.log(simulation.alphaMin()) / Math.log(1 - simulation.alphaDecay()),
      );
    i < n;
    ++i
  ) {
    simulation.tick()
  }
  // for (let i = 0; i < 120; i++) simulation.tick()

  return { nodes, links, radius }
}
