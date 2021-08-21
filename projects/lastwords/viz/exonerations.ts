import {
  select,
  scaleLinear,
  max,
  scaleBand,
  schemeCategory10,
  axisLeft,
} from 'd3'

import data from '../data/exonerations.json'

const maxWidth = 600
let width = maxWidth
const height = 400

const dom = document.querySelector('#exonerations')

export const exonerations = () => {
  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0]
    if (!entry) return

    width = Math.min(entry.contentRect.width, maxWidth)
    width = Math.max(320, width)
    chart()
  })

  resizeObserver.observe(dom)
}

const chart = () => {
  dom.innerHTML = ''

  const svg = select(dom)
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const x = scaleLinear()
    .range([200, width - 15])
    .domain([0, max(data, d => d[1])])

  const y = scaleBand()
    .range([10, height - 30])
    .domain(data.map(d => d[0]))
    .padding(0.2)

  svg
    .append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', x(0))
    .attr('y', d => y(d[0]))
    .attr('width', d => x(d[1]) - x(0))
    .attr('height', y.bandwidth())
    .attr('fill', schemeCategory10[0])

  svg
    .append('g')
    .selectAll('text')
    .data(data)
    .join('text')
    .attr('x', d => x(d[1]) + 4)
    .attr('y', d => y(d[0]))
    .attr('dy', y.bandwidth() / 2)
    .attr('fill', 'white')
    .attr('font-size', 12)
    .attr('alignment-baseline', 'middle')
    .text(d => d[1])

  svg
    .append('g')
    .attr('transform', `translate(${200},0)`)
    .call(axisLeft(y))
    .call(g => g.selectAll('.tick text').attr('font-weight', 'bold'))
}
