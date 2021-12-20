import {
  select,
  scaleLinear,
  scaleBand,
  schemeCategory10,
  axisTop,
  axisLeft,
} from 'd3'

import data from '../data/firstNames.json'

const maxWidth = 450
let width = maxWidth
const height = 300
const dom = document.querySelector('#firstNames')

export const firstNames = () => {
  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0]
    if (!entry) return

    width = Math.min(entry.contentRect.width, maxWidth)
    chart()
  })

  resizeObserver.observe(dom)
}

export const chart = () => {
  dom.innerHTML = ''

  const svg = select(dom)
    .append('svg')
    .attr('height', height)
    .attr('width', width)

  const x = scaleLinear()
    .domain([0, 120])
    .range([60, width - 10])
    .nice()
  const y = scaleBand()
    .domain(data.map(d => d[0]).map(String))
    .range([30, height - 10])
    .padding(0.2)

  svg
    .append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', 60)
    .attr('width', d => x(+d[1]) - 60)
    .attr('y', d => y(String(d[0])))
    .attr('height', y.bandwidth())
    .attr('fill', d =>
      d[0] == 'Irene' ? schemeCategory10[1] : schemeCategory10[0]
    )
    .append('title')
    .text(d => `${d[1]} mentions`)

  svg
    .append('g')
    .attr('transform', `translate(0,${30})`)
    .call(axisTop(x))
    .call(g =>
      g
        .append('text')
        .attr('x', (width + 60 - 10) / 2)
        .attr('y', 0)
        .attr('dy', -30)
        .attr('fill', 'currentColor')
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'hanging')
        .attr('font-weight', 'bold')
        .text('Number of mentions')
    )
  svg
    .append('g')
    .attr('transform', `translate(${60},0)`)
    .call(axisLeft(y))
    .call(g => g.attr('font-weight', 'bold').attr('font-size', 14))
}
