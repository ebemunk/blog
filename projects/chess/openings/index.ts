import {
  select as d3select,
  hierarchy as d3hierarchy,
  partition as d3partition,
  scaleSqrt as d3scaleSqrt,
  scaleOrdinal as d3scaleOrdinal,
  arc as d3arc,
  schemeCategory10 as d3schemeCategory10,
  hsl as d3hsl,
  format as d3format,
} from 'd3'
import { Chess } from 'chess.js'

interface Openings {
  san: string
  count: number
  children: Openings[]
}

import createTooltip from '../tooltip'
import createBoard from '../board'
import ecos from '../ecos.json'

import './style.css'

const startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

const openings = (domEl, data: Openings) => {
  const container = d3select(domEl)

  const width = 700
  const height = 700
  const innerRadius = 20

  const svg = container
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr('viewBox', [-width / 2, -height / 2, width, height])

  const hRoot = d3hierarchy(data)
    .sum(d => (!d.children.length ? d.count : 0))
    .sort((a, b) => b.height - a.height || b.value - a.value)

  const root = d3partition().size([2 * Math.PI, width / 2 - innerRadius])(hRoot)

  const rScale = d3scaleSqrt()
    .domain([0, width / 2])
    .range([0, width / 2])

  const arc = d3arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
    .padRadius(width / 4)
    .innerRadius(d => rScale(d.y0))
    .outerRadius(d => rScale(d.y1 - 1))

  const color = d3scaleOrdinal(d3schemeCategory10)

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

      let hsl = d3hsl(fill).brighter(0.2)

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

  const boardWidth = width / 4

  const total = data.count
  function tooltipText(d, fen) {
    const pctFormat = d3format('.2p')
    const valFormat = d3format(',')
    const move =
      Math.ceil(d.depth / 2).toString() + (d.depth % 2 === 0 ? '...' : '.')
    const opening = ecos[fen.split(' ')[0]]

    return `
      <span><strong>${move} ${d.data.san}</strong></span>
      <span><strong>${opening ? opening : 'Not in ECO'}</strong></span>
      <span>${valFormat(d.data.count)} of ${valFormat(total)} (${pctFormat(
      d.data.count / total
    )})</span>
      <span>${pctFormat(d.data.count / d.parent.data.count)} of parent</span>
    `
  }

  // draw arcs
  arcs
    .on('mouseenter', (evt: MouseEvent, d) => {
      const ancestors = d.ancestors()

      arcs
        .filter(node => ancestors.indexOf(node) > -1)
        .classed('highlighted', true)

      const chess = new Chess()
      ancestors
        .reverse()
        .slice(1) // remove 'start' position
        .forEach(n => {
          chess.move(n.data.san)
        })
      const fen = chess.fen()

      const centerAngle = (((d.x0 + d.x1) / 2) * 180) / Math.PI
      tooltip.show({
        html: tooltipText(d, fen),
        reference: evt.currentTarget as HTMLElement,
        popperOptionsOverride: {
          placement: centerAngle < 90 || centerAngle > 270 ? 'top' : 'bottom',
        },
      })

      boardSel.call(
        createBoard({
          width: boardWidth,
          height: boardWidth,
          fen,
        })
      )
    })
    .on('mouseleave', (evt, d) => {
      const ancestors = d.ancestors()
      arcs
        .filter(node => ancestors.indexOf(node) > -1)
        .classed('highlighted', false)
      tooltip.hide()
      boardSel.call(
        createBoard({
          width: boardWidth,
          height: boardWidth,
          fen: startFen,
        })
      )
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
        fen: startFen,
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
    .data(root.descendants().filter(d => d.depth && d.x1 - d.x0 > 0.1))
    .join('text')
    .attr('transform', function (d) {
      const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI
      const y = rScale((d.y0 + d.y1) / 2)
      const rotation = x - 90
      return `rotate(${rotation}) translate(${y},0) rotate(${-rotation})`
    })
    .attr('dy', '0.35em')
    .text(d => d.data.san)
}

export default openings
