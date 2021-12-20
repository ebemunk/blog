import {
  select as d3select,
  selectAll as d3selectAll,
  max as d3max,
  scaleLinear as d3scaleLinear,
  schemeCategory10 as d3schemeCategory10,
  sum as d3sum,
  format as d3format,
} from 'd3'
import board from '../board'
import pieceSelect from './pieceSelect'
import createTooltip from '../tooltip'

import './style.css'

const heatmap = (domEl, data) => {
  const size = 600
  let hmType = 'squareUtilization'
  let piece = 'A'

  d3select('#heatmap-select').on('change', (evt, d) => {
    hmType = evt.target.value
    draw()
  })

  d3selectAll('.hms').on('click', evt => {
    evt.preventDefault()
    hmType = evt.target.attributes['data-hm'].value
    piece = evt.target.attributes['data-pc'].value
    draw()
  })

  const svg = d3select(domEl)
    .append('svg')
    .attr('width', size)
    .attr('height', size)

  const boardC = svg.append('g').call(
    board({
      size,
      showLabels: true,
    })
  )

  const tooltip = createTooltip({
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 10],
          },
        },
      ],
    },
  })

  let total = 0

  function tooltipText(d) {
    return `
      <span>${d3format('.2s')(d)} times</span>
      <span>${d3format('.2p')(d / total)}</span>
    `
  }

  const draw = () => {
    const selectedData = data[hmType].map(d => {
      if (piece === 'A') return d.all.w

      if (piece === 'a') return d.all.b

      const color = piece === piece.toUpperCase() ? 'w' : 'b'
      return d[piece.toLowerCase()][color]
    })

    total = d3sum(selectedData)

    const squareSize = size / 8

    const sizeScale = d3scaleLinear()
      .domain([0, d3max(selectedData)])
      .range([0, squareSize])

    const colorScale = d3scaleLinear()
      .domain([0, d3max(selectedData)])
      .range(['white', d3schemeCategory10[0]])

    boardC
      .selectAll('.square')
      .on('mouseenter', (evt, d) => {
        tooltip.show({
          html: tooltipText(selectedData[d.i]),
          reference: evt.currentTarget as HTMLElement,
          popperOptionsOverride: {
            placement: 'top',
            modifiers: [
              {
                name: 'offset',
                options: [0, 0],
              },
            ],
          },
        })
      })
      .on('mouseleave', (evt, d) => {
        tooltip.hide()
      })

    svg
      .selectAll('.heat')
      .data(selectedData)
      .join(
        enter =>
          enter
            .append('rect')
            .attr('class', 'heat')
            .attr('x', (d, i) => (i % 8) * squareSize + squareSize / 2)
            .attr(
              'y',
              (d, i) => Math.floor(i / 8) * squareSize + squareSize / 2
            )
            .attr('fill', d => colorScale(d))
            .attr('width', d => sizeScale(d))
            .attr('height', d => sizeScale(d))
            .attr('transform', d => {
              const ss = sizeScale(d) / 2
              return `translate(-${ss},-${ss})`
            })
            .attr('pointer-events', 'none'),
        update =>
          update.call(update =>
            update
              .transition()
              .attr('fill', d => colorScale(d))
              .attr('width', d => sizeScale(d))
              .attr('height', d => sizeScale(d))
              .attr('transform', d => {
                const ss = sizeScale(d) / 2
                return `translate(-${ss},-${ss})`
              })
          )
      )

    d3select('#piece-select-w').call(
      pieceSelect({
        color: 'w',
        selected: piece,
        onclick: (evt, d) => {
          piece = d
          draw()
        },
      })
    )
    d3select('#piece-select-b').call(
      pieceSelect({
        color: 'b',
        selected: piece,
        onclick: (evt, d) => {
          piece = d
          draw()
        },
      })
    )
    d3select('#heatmap-select').call(sel => {
      sel.node().value = hmType
    })
  }

  draw()
}

export default heatmap
