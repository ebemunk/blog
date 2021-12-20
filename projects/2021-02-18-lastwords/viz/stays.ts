import { select, scaleBand, axisLeft, scaleTime, axisBottom } from 'd3'

import raw from '../data/stays-handmade.json'
import createTooltip from './tooltip'
const data = raw.sort((a, b) => {
  const av = a.executed ? Date.parse(a.executed) : Date.now()
  const bv = b.executed ? Date.parse(b.executed) : Date.now()
  return bv - av
})

const maxWidth = 800
let width = maxWidth
const marginLeft = 100
const marginRight = 100
const height = 700
const aspect = height / maxWidth
const dom = document.querySelector('#stays')
let tooltip

export const stays = () => {
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

  tooltip = createTooltip({
    attachTo: dom,
    popperOptions: {
      placement: 'top',
      modifiers: [{ name: 'offset', options: { offset: [0, 10] } }],
    },
  })

  const svg = select(dom)
    .append('svg')
    .attr('height', width * aspect)
    .attr('width', width)
    .attr('viewBox', [0, 0, maxWidth, height].toString())

  const y = scaleBand()
    .domain(data.map(d => d.name))
    .range([0, height])
    .paddingInner(0.5)
    .paddingOuter(0.1)

  svg
    .append('g')
    .attr('transform', `translate(${marginLeft - 8},0)`)
    .call(axisLeft(y).tickSize(0))
    .call(g => g.select('.domain').remove())

  svg
    .append('g')
    .selectAll('g')
    .data(data)
    .join('g')
    .attr('transform', (d, i) => `translate(0,${y(d.name)})`)
    .each((d, i, n) => select(n[i]).call(viz({ height: y.bandwidth() })))
}

const viz = ({ height }) => g => {
  const datum = g.node().__data__
  const x = scaleTime()
    .domain([
      Date.parse(datum.received),
      datum.executed ? Date.parse(datum.executed) : Date.now(),
    ])
    .range([marginLeft, maxWidth - marginRight])

  const lineHeight = Math.min(20, height)

  g.append('g')
    .attr('transform', `translate(0,${height / 2 + lineHeight / 2})`)
    .call(axisBottom(x).tickSize(6))
    .call(g => g.select('.domain').remove())

  g.append('line')
    .attr('x1', marginLeft)
    .attr('x2', maxWidth - marginRight)
    .attr('y1', height / 2)
    .attr('y2', height / 2)
    .attr('stroke', 'darkslategray')
    .attr('stroke-width', lineHeight)

  g.selectAll('rect')
    .data(datum.stays)
    .join('rect')
    .attr('x', d => x(d.date) - 3)
    .attr('width', 6)
    .attr('y', height / 2 - lineHeight * 0.66)
    .attr('height', lineHeight * 1.33)
    .attr('fill', 'tomato')
    .attr('stroke', '#282c34')
    .attr('stroke-width', 3)

  g.selectAll('.highlight')
    .data(datum.stays.filter(d => d.highlight))
    .join('text')
    .text(d => d.highlight)
    .attr('text-anchor', d => d.anchor)
    .attr('x', d => x(d.date))
    .attr('y', 0)
    .attr('fill', 'white')
    .attr('font-size', 10)
    .attr('fill-opacity', 0.7)

  g.selectAll('.hover')
    .data(datum.stays)
    .join('rect')
    .attr('class', 'hover')
    .attr('x', d => x(d.date) - 8)
    .attr('width', 16)
    .attr('y', height / 2 - lineHeight * 0.66)
    .attr('height', lineHeight * 1.33)
    .attr('fill', 'transparent')
    .on('mouseenter', (evt, d) => {
      tooltip.show({
        reference: evt.currentTarget,
        html: `<div style="font-weight:bold">${new Date(
          d.date
        ).toLocaleDateString()}</div><div>${d.reason}</div>`,
      })
    })
    .on('mouseleave', () => {
      tooltip.hide()
    })

  if (datum.executed) {
    g.append('rect')
      .attr('x', x(Date.parse(datum.executed)) - 3)
      .attr('width', 6)
      .attr('y', height / 2 - lineHeight * 0.66)
      .attr('height', lineHeight * 1.33)
      .attr('fill', 'green')
      .attr('stroke', '#282c34')
      .attr('stroke-width', 3)

    const text = g
      .append('g')
      .attr(
        'transform',
        `translate(${maxWidth - marginRight + 8},${height / 2 - 6})`
      )
      .append('text')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .attr('font-size', 10)
      .attr('font-family', 'sans-serif')
      .attr('font-weight', 'normal')

    text.append('tspan').attr('x', 0).text('Executed')
    text
      .append('tspan')
      .attr('dy', 12)
      .attr('x', 0)
      .text(d => d.executed)
  } else {
    const text = g
      .append('g')
      .attr(
        'transform',
        `translate(${maxWidth - marginRight + 8},${height / 2})`
      )
      .append('text')
      .attr('dominant-baseline', 'middle')
      .attr('fill', 'white')
      .attr('font-size', 10)
      .attr('font-family', 'sans-serif')
      .text('Today')
  }

  g.append('text')
    .attr('dominant-baseline', 'middle')
    .attr('fill', 'white')
    .attr('fill-opacity', 0.5)
    .attr('font-size', 10)
    .attr('font-family', 'sans-serif')
    .text(d => `← Age when sentenced: ${d.ageReceived}`)
    .attr('x', marginLeft + 2)
    .attr('y', height / 2)
}
