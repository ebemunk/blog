import * as d3 from 'd3'

import createTooltip from '../tooltip'

const bar = (
  domEl,
  data,
  { width, height, xDom, xPadding, xUnit = 'Ply', yUnit = 'Frequency' }
) => {
  const svg = d3
    .select(domEl)
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  const xDomain =
    xDom ?? d3.range(0, d3.max(data, d => +d[0]) + 1, 1).map(String)

  const xScale = d3
    .scaleBand()
    .domain(xDomain)
    .range([30, width - 10])

  if (xPadding) xScale.padding(xPadding)

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d[1])])
    .range([height - 20, 10])
    .nice()

  svg
    .append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('y', d => yScale(d[1]))
    .attr('x', d => xScale(d[0]))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - 20 - yScale(d[1]))
    .attr('fill', d3.schemeCategory10[0])

  svg
    .append('g')
    .attr('transform', `translate(${30},0)`)
    .call(d3.axisLeft(yScale).tickFormat(d3.format('2~s')))
  svg
    .append('g')
    .attr('transform', `translate(0,${height - 20})`)
    .call(
      d3.axisBottom(xScale).tickValues(
        xDom
          ? undefined
          : d3
              .range(
                0,
                d3.max(data, d => +d[0]),
                20
              )
              .map(d => String(d))
      )
    )

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
      const idx = Math.floor(
        Math.max(0, d3.pointer(evt)[0] - xScale(xDomain[0])) / xScale.step()
      )
      const val = xScale.domain()[idx]
      const d = data[idx]
      const x = xScale(val)

      line
        .attr('x1', x + xScale.bandwidth() / 2)
        .attr('x2', x + xScale.bandwidth() / 2)
        .attr('visibility', 'visible')

      tooltip.show({
        reference: svg.node(),
        html: `
          <span>${xUnit}: <strong>${val}</strong></span>
          <span>${yUnit}: <strong>${
          d ? d3.format(',')(d[1]) : 0
        }</strong></span>
        `,
      })
    })
    .on('mouseout', evt => {
      line.attr('visibility', 'hidden')
      tooltip.hide()
    })
}

export default bar
