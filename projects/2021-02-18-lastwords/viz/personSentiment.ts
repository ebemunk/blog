import {
  scaleSequential,
  interpolatePiYG,
  select,
  scaleLinear,
  extent,
  max,
  scaleSqrt,
  axisBottom,
  axisLeft,
  Delaunay,
  format,
  pointer,
  selectAll,
} from 'd3'

import data from '../data/personSentiment.json'
import { legend } from './legend'
import createTooltip from './tooltip'

const tops = [
  'satan',
  'judge',
  'niece',
  'nephew',
  'officers',
  'baby',
  'mom',
  'children',
  'brother',
  'family',
  'police',
]

const dom = document.querySelector('#person-sentiment')
const color = scaleSequential([-1, 1], interpolatePiYG)
const maxWidth = 825
const aspect = 0.6
let width = maxWidth
const height = 500

export const personSentiment = () => {
  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0]
    if (!entry) return

    width = Math.min(entry.contentRect.width, maxWidth)
    chart()
  })

  resizeObserver.observe(dom)

  addColorsToText()
}

export const chart = () => {
  dom.innerHTML = ''

  const svg = select(dom)
    .append('svg')
    .attr('height', width * aspect)
    .attr('width', width)
    .attr('viewBox', [0, 0, maxWidth, height].toString())

  const x = scaleLinear()
    .domain(extent(data, d => d.score))
    .range([30, maxWidth - 30])
    .nice()
  const y = scaleLinear()
    .domain([0, max(data, d => d.salience)])
    .range([height - 30, 30])
  const r = scaleSqrt()
    .domain(extent(data, d => d.freq))
    .range([8, 30])

  const xax = svg
    .append('g')
    .attr('transform', `translate(0,${y((y.domain()[1] + y.domain()[0]) / 2)})`)
    .call(axisBottom(x).ticks(0).tickSize(0))

  xax
    .append('g')
    .selectAll('text')
    .data([
      [x(x.domain()[0]), '← More Negative'],
      [x(x.domain()[1]), 'More Positive →'],
    ])
    .join('text')
    .text(d => d[1])
    .attr('x', d => d[0])
    .attr('text-anchor', (d, i) => (i === 1 ? 'end' : 'start'))
    .attr('fill', 'white')
    .attr('dy', 10)
    .attr('dx', (d, i) => (i === 0 ? -5 : 5))
    .attr('alignment-baseline', 'hanging')
    .attr('font-weight', 'bold')

  const yax = svg
    .append('g')
    .attr('transform', `translate(${x(0)},0)`)
    .call(axisLeft(y).ticks(0).tickSize(0))

  yax
    .selectAll('text')
    .data([
      [y(y.domain()[0]), 'Less important ↓'],
      [y(y.domain()[1]), 'More important ↑'],
    ])
    .join('text')
    .text(d => d[1])
    .attr('y', d => d[0])
    .attr('alignment-baseline', 'hanging')
    .attr('text-anchor', 'middle')
    .attr('fill', 'white')
    .attr('font-weight', 'bold')
    .attr('dy', (d, i) => (i === 0 ? 20 : -20))

  const circles = svg
    .append('g')
    .selectAll('circle')
    .data(data)
    .join('circle')
    .attr('cx', d => x(d.score))
    .attr('cy', d => y(d.salience))
    .attr('r', d => r(d.freq))
    .attr('fill', d => color(d.score))
    .attr('stroke', 'black')

  svg
    .append('g')
    .selectAll('text')
    .data(data)
    .join('text')
    .attr('x', d => x(d.score))
    .attr('y', d => y(d.salience))
    .attr('fill', 'white')
    .attr('stroke', '#282c34')
    .attr('stroke-width', 3)
    .style('paint-order', 'stroke')
    .attr('font-size', 11)
    .attr('text-anchor', 'middle')
    .attr('pointer-events', 'none')
    .attr('dy', d => (r(d.freq) + 2) * (tops.includes(d.name) ? -1 : 1))
    .attr('alignment-baseline', d =>
      tops.includes(d.name) ? 'baseline' : 'hanging'
    )
    .text(d => d.name)

  const rG = svg.append('g').attr('transform', `translate(${maxWidth - 60},30)`)

  rG.selectAll('circle')
    .data([10, 100, 300])
    .join('circle')
    .attr('stroke', 'white')
    .attr('fill', 'none')
    .attr('r', d => r(d))
    .attr('cy', d => r(d) + 5)

  rG.selectAll('text')
    .data([10, 100, 300])
    .join('text')
    .text(d => d)
    .attr('fill', 'white')
    .attr('font-size', 11)
    .attr('text-anchor', 'middle')
    .attr('y', d => r(d) * 2)

  rG.append('text')
    .text('Number of Mentions')
    .attr('fill', 'white')
    .attr('font-size', 11)
    .attr('text-anchor', 'middle')
    .attr('font-weight', 'bold')

  const delaunay = Delaunay.from(data.map(d => [x(d.score), y(d.salience)]))
  const tooltip = createTooltip({
    attachTo: dom,
    popperOptions: {
      placement: 'top',
    },
  })

  const format2f = format('.2f')

  svg
    .append('rect')
    .attr('width', maxWidth)
    .attr('height', height)
    .attr('fill', 'transparent')
    .attr('pointer-events', 'all')
    .on('mousemove', evt => {
      const [mx, my] = pointer(evt)
      const idx = delaunay.find(mx, my)
      const d = data[idx]

      const dist = Math.sqrt(
        Math.abs(mx - x(d.score)) ** 2 + Math.abs(my - y(d.salience)) ** 2
      )

      if (dist > 60) {
        tooltip.hide()
        return
      }

      const el = Array.from(circles)[idx]
      tooltip.show({
        html: `<div><strong>${d.name}</strong></div>
          <div>Avg. Sentiment: ${format2f(d.score)}</div>
          <div>Avg. Salience: ${format2f(d.salience)}</div>
          `,
        reference: el,
      })
    })
    .on('mouseleave', () => {
      tooltip.hide()
    })

  svg
    .append(() => {
      return legend({
        color: color,
        title: 'Sentiment',
        returnG: true,
        width: 250,
      })
    })
    .attr('transform', 'translate(30,30)')
}

function addColorsToText() {
  selectAll('span.statementSentiment').each((d, i, n) => {
    const sel = select(n[i])
    const score = data.find(d => d.name === sel.text())?.score ?? 0
    sel
      .style('background', color(score))
      .style('color', '#282c34')
      .style('padding', '0.25rem')
  })
}
