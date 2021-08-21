import {
  scaleSequential,
  interpolatePlasma,
  pack,
  hierarchy,
  select,
  scaleSqrt,
  extent,
  selectAll,
} from 'd3'
import { legend } from './legend'
import data from '../data/mostCommon.json'

const color = scaleSequential([0, 1000], interpolatePlasma)

const maxWidth = 700
let width = maxWidth
const dom = document.querySelector('#most-common-words')

export const mostCommon = () => {
  addColorsToText()

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

  const root = pack()
    .size([maxWidth - 2, maxWidth - 2])
    .padding(3)(
    hierarchy({
      name: 'root',
      children: data.map(d => ({
        name: d[0],
        value: d[1],
      })),
      value: 0,
    })
      .sum(d => d.value)
      .sort((a, b) => b.value - a.value)
  )

  const svg = select(dom)
    .append('svg')
    .attr('viewBox', [0, 0, maxWidth, maxWidth].toString())
    .attr('text-anchor', 'middle')
    .attr('height', width)
    .attr('width', width)

  svg
    .append('filter')
    .attr('id', 'shadow')
    .append('feDropShadow')
    .attr('flood-opacity', 1)
    .attr('flood-color', 'white')
    .attr('dx', 0)
    .attr('dy', 1)

  const node = svg
    .selectAll('g')
    .data(root.descendants().slice(1))
    .join('g')
    .attr('transform', d => `translate(${d.x + 1},${d.y + 1})`)

  const circles = node
    .append('circle')
    .attr('r', d => d.r)
    .attr('fill', d => color(d.value) as string)
    .attr('stroke', 'black')
    .attr('stroke-width', 0.5)
    .attr('filter', (d, i) => `url(#shadow-${i})`)

  const shadows = node
    .append('filter')
    .attr('id', (d, i) => `shadow-${i}`)
    .append('feDropShadow')
    .attr('flood-opacity', 0.3)
    .attr('flood-color', d => color(d.value))
    .attr('dx', 0)
    .attr('dy', 1)

  const fontScale = scaleSqrt()
    .domain(extent(data, d => d[1]))
    .range([8, 60])

  node
    .append('text')
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('font-size', d => fontScale(d.value))
    .attr('fill', 'white')
    .text(d => d.data.name)
    .attr('pointer-events', 'none')

  circles.append('title').text(d => `${d.data.name} - ${d.value}`)

  select(dom).append(() => {
    return legend({
      color: color,
      title: 'Word Frequency',
      marginLeft: 20,
      marginRight: 20,
    })
  })
}

function addColorsToText() {
  selectAll('span.wordFreq').each((d, i, n) => {
    const sel = select(n[i])
    const score = data.find(d => d[0] === sel.text())?.[1] ?? 0
    sel
      .style('background', color(score))
      .style('color', 'white')
      .style('padding', '0.25rem')
  })
}
