import {
  bin,
  scaleBand,
  range,
  scaleLinear,
  extent,
  select,
  axisBottom,
  axisLeft,
  schemeCategory10,
} from 'd3'
import raw from '../data/numStays.json'
import createTooltip from './tooltip'

const data = bin().thresholds([1, 2, 3, 4, 5])(raw)

const height = 400
const maxWidth = 600
let width = maxWidth

const dom = document.querySelector('#numStays')

export const numStays = () => {
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

  const x = scaleBand()
    .domain(range(5).map(d => String(d + 1)))
    .range([50, width - 30])
    .padding(0.2)

  const y = scaleLinear()
    .domain(extent(data, d => d.length))
    .range([height - 30, 30])

  const svg = select(dom)
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  svg
    .append('g')
    .attr('transform', `translate(0,${height - 30})`)
    .call(axisBottom(x))
    .call(g =>
      g
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('x', width / 2)
        .attr('y', 28)
        .attr('fill', 'white')
        .text('Number of stays')
        .attr('font-weight', 'bold')
    )

  svg
    .append('g')
    .attr('transform', `translate(${50},0)`)
    .call(axisLeft(y))
    .call(g =>
      g
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('x', 0)
        .attr('y', height / 2)
        .attr('fill', 'currentColor')
        .text('Number of Inmates')
        .attr('transform', `rotate(-90,${0},${height / 2}) translate(0,-26)`)
        .attr('font-weight', 'bold')
    )

  svg
    .append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', d => x(d.x0))
    .attr('y', d => y(d.length))
    .attr('width', x.bandwidth())
    .attr('height', d => Math.max(1, height - 30 - y(d.length)))
    .attr('fill', schemeCategory10[0])

  const bracket = svg.append('g').attr('stroke', 'white')

  const x1 = x('2') - (x.step() * x.paddingInner()) / 2
  const x2 = x('5') + x.bandwidth() + (x.step() * x.paddingOuter()) / 2
  bracket
    .append('line')
    .attr('x1', x1)
    .attr('x2', x2)
    .attr('y1', y(20))
    .attr('y2', y(20))

  bracket
    .append('line')
    .attr('x1', x1)
    .attr('x2', x1)
    .attr('y1', y(20))
    .attr('y2', y(20) + 6)

  bracket
    .append('line')
    .attr('x1', x2)
    .attr('x2', x2)
    .attr('y1', y(20))
    .attr('y2', y(20) + 6)

  const midTick = bracket
    .append('line')
    .attr('x1', (x2 + x1) / 2)
    .attr('x2', (x2 + x1) / 2)
    .attr('y1', y(20) - 6)
    .attr('y2', y(20))

  const tooltip = createTooltip({
    attachTo: dom,
    popperOptions: {
      placement: 'top',
      modifiers: [
        { name: 'flip', enabled: false },
        { name: 'preventOverflow', enabled: true },
      ],
    },
  })
  tooltip.show({
    reference: midTick.node(),
    html: `<div style="max-width:25ch;text-align:center">One third of inmates (27) received 2 or more stays of execution</div>`,
  })
}
