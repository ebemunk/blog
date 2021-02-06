import * as d3 from 'd3'

interface Openings {
  san: string
  count: number
  children: Openings[]
}

import './style.css'

const openings = async (domEl, data: Openings) => {
  const container = d3.select(domEl)

  const width = 700
  const height = 700
  const innerRadius = 75

  const svg = container
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [-width / 2, -height / 2, width, height])

  console.log('openings data', data)

  const hRoot = d3
    .hierarchy(data)
    .sum(d => (!d.children.length ? d.count : 0))
    .sort((a, b) => b.height - a.height || b.value - a.value)

  console.log('hRoot', hRoot)

  const root = d3.partition().size([2 * Math.PI, width / 2 - innerRadius])(
    hRoot
  )

  const arc = d3
    .arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(width / 4)
    .innerRadius(d => d.y0 + innerRadius)
    .outerRadius(d => d.y1 - 1 + innerRadius)

  const color = d3.scaleOrdinal(d3.schemeCategory10)

  const getFirstParent = d => {
    let n = d
    while (n.depth > 1) n = n.parent
    return n
  }

  const arcs = svg
    .append('g')
    .selectAll('path')
    .data(root.descendants().filter(d => d.depth))
    .join('path')
    .attr('fill', d => {
      const firstParent = getFirstParent(d)
      const fill = color(firstParent.data.san)

      let hsl = d3.hsl(fill).brighter(0.2)

      if (d.depth % 2 === 0) {
        hsl = hsl.darker(0.5)
      } else {
        hsl = hsl.brighter(0.5)
      }

      hsl = hsl.darker(d.depth * 0.15)
      return hsl.toString()
    })
    .attr('d', arc)

  arcs
    .on('mouseenter', (evt, d) => {
      const ancestors = d.ancestors()

      arcs.filter(node => ancestors.indexOf(node) === -1).style('opacity', 0.3)
    })
    .on('mouseleave', (evt, d) => {
      arcs.style('opacity', 1)
    })

  arcs.append('title').text(
    d =>
      `${d
        .ancestors()
        .map(d => d.data.san)
        .reverse()
        // .join('/')}\n${format(d.value)}`
        .join('/')}`
  )

  svg
    .append('g')
    .attr('pointer-events', 'none')
    .attr('text-anchor', 'middle')
    .attr('font-size', 12)
    .attr('font-family', 'sans-serif')
    .attr('fill', 'white')
    .selectAll('text')
    .data(
      root
        .descendants()
        .filter(d => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 15)
    )
    .join('text')
    .attr('transform', function (d) {
      const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI
      const y = (d.y0 + d.y1) / 2 + innerRadius
      const rotation = x - 90
      return `rotate(${rotation}) translate(${y},0) rotate(${-rotation})`
    })
    .attr('dy', '0.35em')
    .text(d => d.data.san)
}

export default openings
