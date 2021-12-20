import { scaleBand, scaleLinear, select, schemeCategory10, axisLeft } from 'd3'

import raw from '../data/executionTotals.json'

const data = raw.slice(0, 10)

const maxWidth = 600
let width = maxWidth
const height = 400

const stateAbbr = {
  Virginia: 'VA',
  Oklahoma: 'OK',
  Florida: 'FL',
  Missouri: 'MO',
  Georgia: 'GA',
  Alabama: 'AL',
}

const dom = document.querySelector('#executionTotals')

export const executionTotals = () => {
  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0]
    if (!entry) return

    width = Math.min(entry.contentRect.width, maxWidth)
    chart()
  })

  resizeObserver.observe(dom)
}

const chart = () => {
  dom.innerHTML = ''

  const y = scaleBand()
    .domain(data.map(d => d.state))
    .range([10, height - 10])
    .padding(0.1)

  const x = scaleLinear()
    .domain([0, 570])
    .range([100, width - 30])

  const next6 = data.slice(1, 7).reduce(
    (obj, val) => ({
      at: obj.at + x(+val.total) - 100,
      arr: obj.arr.concat([
        {
          width: x(+val.total) - 100,
          at: obj.at,
          state: val.state,
        },
      ]),
    }),
    {
      at: 0,
      arr: [],
    }
  ).arr

  const svg = select(dom)
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  svg
    .append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', 100)
    .attr('width', d => x(+d.total) - 100)
    .attr('y', d => y(d.state))
    .attr('height', y.bandwidth())
    .attr('fill', schemeCategory10[0])

  svg
    .append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', 100)
    .attr('width', d => x(+d.total) - 100)
    .attr('y', d => y(d.state))
    .attr('height', y.bandwidth())
    .attr('fill', schemeCategory10[0])

  svg
    .append('g')
    .selectAll('text')
    .data(data)
    .join('text')
    .attr('x', d => x(+d.total) + 4)
    .attr('y', d => y(d.state))
    .attr('dy', y.bandwidth() / 2)
    .attr('fill', 'white')
    .attr('font-size', 12)
    .attr('alignment-baseline', 'middle')
    .text(d => d.total)

  svg
    .append('g')
    .selectAll('rect')
    .data(next6)
    .join('rect')
    .attr('x', d => d.at + 100)
    .attr('width', d => d.width)
    .attr('y', d => y('Texas') + 1)
    .attr('height', y.bandwidth() - 2)
    .attr('fill', 'none')
    .attr('stroke', 'white')

  svg
    .append('g')
    .selectAll('text')
    .data(next6)
    .join('text')
    .text(d => stateAbbr[d.state])
    .attr('x', d => d.at + 100 + d.width / 2)
    .attr('y', y('Texas'))
    .attr('dy', y.bandwidth() / 2)
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .attr('fill', 'white')
    .attr('font-size', 12)

  svg.append('g').attr('transform', `translate(${100},0)`).call(axisLeft(y))
}
