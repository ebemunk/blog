import { pie, arc as arc_1, select, schemeCategory10, format } from 'd3'

const maxWidth = 500
let width = maxWidth
const dom = document.querySelector('#lastStatementRatio')

const data = [
  { name: 'Gave Statement', value: 454 },
  { name: 'Declined', value: 116 },
]

export const lastStatementRatio = () => {
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

  const arcs = pie<typeof data[0]>()
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .padAngle(0.005)
    .sort(null)
    .value(d => d.value)(data)
  const arc = arc_1<typeof data[0]>()
    .innerRadius(width / 3)
    .outerRadius(width / 2)

  const svg = select(dom)
    .append('svg')
    .attr('height', width / 2)
    .attr('width', width)
    .attr('viewBox', [-width / 2, -width / 2, width, width / 2].toString())

  svg
    .selectAll('path')
    .data(arcs)
    .join('path')
    .attr('fill', d =>
      d.data.name === 'Declined' ? schemeCategory10[1] : schemeCategory10[0]
    )
    .attr('d', arc)

  svg
    .selectAll('text')
    .data(arcs)
    .join('text')
    .attr('transform', d => `translate(${arc.centroid(d)})`)
    .attr('font-size', 12)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'hanging')
    .attr('fill', 'white')
    .call(text => text.append('tspan').text(d => d.data.name))
    .call(text =>
      text
        .append('tspan')
        .attr('x', 0)
        .attr('dy', -20)
        .attr('font-weight', 'bold')
        .attr('font-size', 14)
        .text(d => format('.3p')(d.data.value / 570))
    )
}
