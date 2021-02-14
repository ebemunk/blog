import * as d3 from 'd3'

import createTooltip from '../tooltip'

const line = (
  domEl,
  data,
  { width, height, yUnit = 'Frequency', yDomain, yTickValues }
) => {
  const svg = d3
    .select(domEl)
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d[0])])
    .range([30, width - 10])

  const yScale = d3
    .scaleLinear()
    .domain(yDomain ?? [0, d3.max(data, d => d[1])])
    .range([height - 20, 10])

  if (!yDomain) yScale.nice()

  svg
    .append('path')
    .attr(
      'd',
      d3
        .line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))(data)
    )
    .attr('fill', 'none')
    .attr('stroke', d3.schemeCategory10[0])
    .attr('stroke-width', 2)

  svg
    .append('g')
    .attr('transform', `translate(${xScale('0')},0)`)
    .call(d3.axisLeft(yScale).tickValues(yTickValues))
  svg
    .append('g')
    .attr('transform', `translate(0,${height - 20})`)
    .call(d3.axisBottom(xScale))

  const line = svg
    .append('line')
    .attr('class', 'hover')
    .attr('x1', 0)
    .attr('y1', 10)
    .attr('x2', 0)
    .attr('y2', height - 20)
    .attr('stroke', '#638f3c')
    .attr('stroke-width', 2)
    .attr('visibility', 'hidden')

  const tooltip = createTooltip({
    popperOptions: {
      placement: 'top',
    },
  })

  svg
    .append('rect')
    .attr('fill', 'transparent')
    .attr('width', width - 10 - 30)
    .attr('height', height - 20 - 10)
    .attr('x', 30)
    .attr('y', 10)
    .on('mousemove', evt => {
      const val = Math.round(xScale.invert(d3.pointer(evt)[0]))
      const x = xScale(val)
      const d = data[val]

      line.attr('x1', x).attr('x2', x).attr('visibility', 'visible')

      tooltip.show({
        reference: svg.node(),
        html: `
          <span>Ply: <strong>${val}</strong></span>
          <span>${yUnit}: <strong>${
          d ? d3.format('.2f')(d[1]) : 0
        }</strong></span>
        `,
      })
    })
    .on('mouseout', evt => {
      line.attr('visibility', 'hidden')
      tooltip.hide()
    })
}

export default line
