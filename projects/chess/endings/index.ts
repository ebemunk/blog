import {
  select as d3select,
  pie as d3pie,
  format as d3format,
  arc as d3arc,
  selectAll as d3selectAll,
  sum as d3sum,
  scaleOrdinal as d3scaleOrdinal,
  schemeCategory10 as d3schemeCategory10,
} from 'd3'

import './style.css'

const endings = (data, totalGames) => {
  const chart = (data, node) => {
    const svg = d3select(node)
      .append('svg')
      .attr('width', 220)
      .attr('height', 220)
      .attr('viewBox', [-110, -110, 220, 220])

    const pieData = Object.entries(data).concat([
      ['None', totalGames - d3sum(Object.values(data))],
    ])

    const pie = d3pie()
      .value(d => d[1])
      .sort(null)(pieData)

    const colorScale = d3scaleOrdinal([d3schemeCategory10[0], 'grey']).domain(
      pieData.map(d => d[0])
    )

    const formatPct = d3format('.3p')
    const formatVal = d3format('.2s')

    const arc = d3arc().innerRadius(75).outerRadius(110)
    svg
      .selectAll('path')
      .data(pie)
      .join('path')
      .attr('d', arc)
      .attr('fill', d => colorScale(d.data[0]))
      .append('title')
      .text(
        d =>
          `${d.data[0]}\n${formatVal(d.data[1])} (${formatPct(
            d.data[1] / totalGames
          )})`
      )

    svg
      .selectAll('.legend')
      .data(pie)
      .join('g')
      .attr('class', 'legend')
      .attr('fill', d => colorScale(d.data[0]))
      .attr('transform', (d, i) => `translate(0,${(i - 0.5) * 40})`)
      .selectAll('text')
      .data(d => [
        d.data[0],
        `${formatVal(d.data[1])} (${formatPct(d.data[1] / totalGames)})`,
      ])
      .join('text')
      .text(d => d)
      .attr('text-anchor', 'middle')
      .attr('font-size', (d, i) => (i === 0 ? 18 : 15))
      .attr('font-weight', 'bold')
      .attr('dy', (d, i) => i * 15)
  }

  d3selectAll('#ending div')
    .data(['Check', 'Mate'])
    .each((d, i, n) => chart({ [d]: data[d] }, n[i]))
}

export default endings
