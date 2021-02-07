import * as d3 from 'd3'

interface Openings {
  san: string
  count: number
  children: Openings[]
}

import createTooltip from '../tooltip'
import createBoard from '../board'

import './style.css'

const openings = (domEl, data: Openings) => {
  const container = d3.select(domEl)

  const width = 700
  const height = 700
  const innerRadius = 75

  const svg = container
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [-width / 2, -height / 2, width, height])

  console.log('openings data', data)

  const hRoot = d3
    .hierarchy(data)
    .sum(d => (!d.children.length ? d.count : 0))
    .sort((a, b) => b.height - a.height || b.value - a.value)

  console.log('hRoot', hRoot)

  const root = d3.partition().size([2 * Math.PI, width / 2 - innerRadius])(
    hRoot
  )

  const arc = d3
    .arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(width / 4)
    .innerRadius(d => d.y0 + innerRadius)
    .outerRadius(d => d.y1 - 1 + innerRadius)

  const color = d3.scaleOrdinal(d3.schemeCategory10)

  const getFirstParent = d => {
    let n = d
    while (n.depth > 1) n = n.parent
    return n
  }

  const arcs = svg
    .append('g')
    .selectAll('path')
    .data(root.descendants().filter(d => d.depth))
    .join('path')
    .attr('fill', d => {
      const firstParent = getFirstParent(d)
      const fill = color(firstParent.data.san)

      let hsl = d3.hsl(fill).brighter(0.2)

      if (d.depth % 2 === 0) {
        hsl = hsl.darker(0.5)
      } else {
        hsl = hsl.brighter(0.5)
      }

      hsl = hsl.darker(d.depth * 0.15)
      return hsl.toString()
    })
    .attr('d', arc)

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

  const boardWidth = 150

  // draw arcs
  arcs
    .on('mouseenter', (evt: MouseEvent, d) => {
      const ancestors = d.ancestors()

      arcs
        .filter(node => ancestors.indexOf(node) > -1)
        .classed('highlighted', true)

      const centerAngle = (((d.x0 + d.x1) / 2) * 180) / Math.PI
      tooltip.show({
        html: d
          .ancestors()
          .map(d => d.data.san)
          .reverse()
          .join('/'),
        reference: evt.currentTarget as HTMLElement,
        popperOptionsOverride: {
          placement: centerAngle < 90 || centerAngle > 270 ? 'top' : 'bottom',
        },
      })

      boardSel.call(
        createBoard({
          width: boardWidth,
          height: boardWidth,
          fen: '2r5/1N3P2/2p2qp1/3np3/R2Pp1N1/K7/p5B1/1k6 w - - 0 1',
        })
      )
    })
    .on('mouseleave', (evt, d) => {
      const ancestors = d.ancestors()
      arcs
        .filter(node => ancestors.indexOf(node) > -1)
        .classed('highlighted', false)
      tooltip.hide()
      // boardSel.call(
      //   createBoard({
      //     width: boardWidth,
      //     height: boardWidth,
      //   })
      // )
    })

  // draw board
  const boardSel = svg
    .append('g')
    .attr('transform', `translate(${-boardWidth / 2},${-boardWidth / 2})`)
    .attr('class', 'board')
    .call(
      createBoard({
        width: boardWidth,
        height: boardWidth,
      })
    )

  svg
    .append('g')
    .attr('pointer-events', 'none')
    .attr('text-anchor', 'middle')
    .attr('font-size', 12)
    .attr('font-family', 'sans-serif')
    .attr('fill', 'white')
    .selectAll('text')
    .data(
      root
        .descendants()
        .filter(d => d.depth && ((d.y0 + d.y1) / 2) * (d.x1 - d.x0) > 15)
    )
    .join('text')
    .attr('transform', function (d) {
      const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI
      const y = (d.y0 + d.y1) / 2 + innerRadius
      const rotation = x - 90
      return `rotate(${rotation}) translate(${y},0) rotate(${-rotation})`
    })
    .attr('dy', '0.35em')
    .text(d => d.data.san)
}

export default openings
