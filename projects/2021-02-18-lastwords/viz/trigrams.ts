import {
  format as format_1,
  scaleOrdinal,
  quantize,
  interpolateRainbow,
  hierarchy,
  partition as partition_1,
  select,
  scaleSqrt,
} from 'd3'

import createTooltip from './tooltip'
import data from '../data/trigrams.json'

const maxWidth = 750
let width = maxWidth
let height = Math.min(window.innerHeight - 40, 1000)
const dom = document.querySelector('#trigrams')

const format = format_1(',d')
const color = scaleOrdinal(
  quantize(interpolateRainbow, data.children.length + 1)
)
export const trigrams = () => {
  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0]
    if (!entry) return

    width = Math.min(entry.contentRect.width, maxWidth)
    height = Math.min(window.innerHeight - 40, 1200)
    chart()
  })

  resizeObserver.observe(dom)
}

export const chart = () => {
  dom.innerHTML = ''

  const partition = data => {
    const root = hierarchy(data)
      .sum(d => d.value)
      .sort((a, b) => b.height - a.height || b.value - a.value)
    return partition_1().size([height, ((root.height + 1) * width) / 3])(root)
  }

  const svg = select(dom)
    .append('svg')
    .attr('height', height)
    .attr('width', width)

  const filter = svg
    .append('defs')
    .append('filter')
    .attr('id', 'filter')
    .append('feComponentTransfer')

  filter.append('feFuncR').attr('type', 'linear').attr('slope', 5)
  filter.append('feFuncG').attr('type', 'linear').attr('slope', 5)
  filter.append('feFuncB').attr('type', 'linear').attr('slope', 5)

  const root = partition(data)
  let focus = root

  let fontScale = scaleSqrt().range([4, 72]).domain([0, focus.value])

  const cell = svg
    .selectAll('g')
    .data(root.descendants().slice(1))
    .join('g')
    .attr('transform', d => `translate(${d.y0 - width / 3},${d.x0})`)

  const tooltip = createTooltip({
    attachTo: dom,
    popperOptions: {
      placement: 'top',
    },
  })

  const rect = cell
    .append('rect')
    .attr('width', d => d.y1 - d.y0)
    .attr('height', d => rectHeight(d))
    .attr('fill-opacity', 0.6)
    .attr('fill', d => {
      if (!d.depth) return '#ccc'
      while (d.depth > 1) d = d.parent
      return color(d.data.name)
    })
    .style('cursor', d => (d.depth === 3 ? null : 'pointer'))
    .on('click', clicked)
    .on('mouseenter', (evt, d) => {
      rect
        .filter(node => d.ancestors().indexOf(node) > -1)
        .attr('filter', 'url(#filter)')

      tooltip.show({
        reference: evt.currentTarget,
        html: `
          <div>
            ${d
              .ancestors()
              .map(d => d.data.name)
              .reverse()
              .slice(1)
              .join(' ')}</div>
          <div><em>said ${format(d.value)} times</em></div>
        `,
      })
    })
    .on('mouseleave', (evt, d) => {
      rect.filter(node => d.ancestors().indexOf(node) > -1).attr('filter', null)
      tooltip.hide()
    })

  const bottomBorder = cell
    .append('line')
    .attr('x1', 0)
    .attr('y1', d => rectHeight(d))
    .attr('x2', d => d.y1 - d.y0 - 1)
    .attr('y2', d => rectHeight(d))
    .attr('stroke', '#282c34')
    .attr('stroke-width', 1)
    .attr('pointer-events', 'none')

  const rightBorder = cell
    .append('line')
    .attr('x1', d => d.y1 - d.y0)
    .attr('y1', d => 0)
    .attr('x2', d => d.y1 - d.y0)
    .attr('y2', d => rectHeight(d))
    .attr('stroke', '#282c34')
    .attr('stroke-width', 1)
    .attr('pointer-events', 'none')

  const text = cell
    .append('text')
    .style('user-select', 'none')
    .attr('pointer-events', 'none')
    .attr('x', 10)
    .attr('y', d => Math.max(1, fontScale(d.value) / 4 - 2))
    .attr('fill-opacity', d => +labelVisible(d))
    .attr('fill', 'white')
    .attr('font-size', d => fontScale(d.value))
    .attr('dominant-baseline', 'hanging')

  const textText = text.append('tspan').text(d => d.data.name)

  const tspan = text
    .append('tspan')
    .attr('fill-opacity', d => labelVisible(d) * 0.4)
    .attr('font-size', d => fontScale(d.value) - fontScale(d.value) / 4)
    .text(d => ` ${format(d.value)}`)

  function clicked(event, p) {
    if (p.depth === 3) return

    focus = focus === p ? (p = p.parent) : p
    fontScale = scaleSqrt().range([4, 72]).domain([0, focus.value])

    root.each(
      d =>
        (d.target = {
          x0: ((d.x0 - p.x0) / (p.x1 - p.x0)) * height,
          x1: ((d.x1 - p.x0) / (p.x1 - p.x0)) * height,
          y0:
            (d.y0 - p.y0 - (p.depth === 0 ? width / 3 : 0)) *
            (focus.depth === 2 ? 1.5 : 1),
          y1:
            (d.y1 - p.y0 - (p.depth === 0 ? width / 3 : 0)) *
            (focus.depth === 2 ? 1.5 : 1),
        })
    )

    const t = cell
      .transition()
      .duration(750)
      .attr('transform', d => `translate(${d.target.y0},${d.target.x0})`)

    rect
      .transition(t)
      .attr('height', d => rectHeight(d.target))
      .attr('width', d => d.target.y1 - d.target.y0)

    bottomBorder
      .transition(t)
      .attr('y1', d => d.target.x1 - d.target.x0)
      .attr('x2', d => d.target.y1 - d.target.y0 - 1)
      .attr('y2', d => d.target.x1 - d.target.x0)

    rightBorder
      .transition(t)
      .attr('x1', d => d.target.y1 - d.target.y0)
      .attr('x2', d => d.target.y1 - d.target.y0)
      .attr('y2', d => d.target.x1 - d.target.x0)

    text
      .transition(t)
      .attr('fill-opacity', d => +labelVisible(d.target))
      .attr('font-size', d => fontScale(d.value))

    tspan
      .transition(t)
      .attr('fill-opacity', d => labelVisible(d.target) * 0.7)
      .attr('font-size', d => fontScale(d.value) - fontScale(d.value) / 4)

    t.end().then(() => {
      textText.text(d =>
        focus.depth === 2 && d.depth === 2
          ? `${d.parent.data.name} ${d.data.name}`
          : d.data.name
      )
    })
  }

  function rectHeight(d) {
    return d.x1 - d.x0
  }

  function labelVisible(d) {
    return d.y0 >= 0 && d.x1 - d.x0 > 12
  }
}
