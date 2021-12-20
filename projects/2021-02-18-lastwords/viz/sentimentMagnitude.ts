import {
  select,
  scaleLinear,
  max,
  axisBottom,
  axisLeft,
  schemeCategory10,
} from 'd3'

import data from '../data/statementSentiment.json'

export const sentimentMagnitude = () => {
  const width = 750
  const height = 750
  const dom = document.querySelector('#sentimentMagnitude')

  const svg = select(dom)
    .append('svg')
    .attr('height', height)
    .attr('width', width)

  const x = scaleLinear()
    .domain([-1, 1])
    .range([30, width - 30])
  const y = scaleLinear()
    .domain([0, max(data, d => d[1])])
    .range([height - 30, 30])

  svg
    .append('g')
    .attr('transform', `translate(0,${height - 30})`)
    .call(axisBottom(x))
  svg.append('g').attr('transform', `translate(30,0)`).call(axisLeft(y))

  svg
    .append('g')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', d => x(d[0]))
    .attr('cy', d => y(d[1]))
    .attr('r', 2)
    .attr('fill', schemeCategory10[0])
}
