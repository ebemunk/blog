import {
  range,
  bin,
  scaleSequential,
  interpolatePiYG,
  scaleLinear,
  format,
  axisBottom,
  scaleBand,
  max,
  axisLeft,
  select,
} from 'd3'

import raw from '../data/statementSentiment.json'
import createTooltip from './tooltip'

const xDomain = range(-1, 1.1, 0.1).map(d => (d === 0 ? '0' : d.toFixed(1)))
const data = bin().thresholds(xDomain.map(d => +d))(raw.map(d => d[0]))
const stackData = data.map(d => ({
  score: d.x0,
  freq: d.length / raw.length,
}))

const maxWidth = 550
let width = maxWidth
const stackHeight = 50
const histHeight = 350
const height = histHeight + stackHeight
const aspect = height / maxWidth
const dom = document.querySelector('#statementSentiment')
const color = scaleSequential([-1, 1], interpolatePiYG)

let tooltip: ReturnType<typeof createTooltip>

const stack = sel => {
  const x = scaleLinear()
    .domain([0, 1])
    .range([10, maxWidth - 15])

  const data = []
  let lastX = 10
  for (let d of stackData) {
    data.push({
      x: lastX,
      width: (maxWidth - 25) * d.freq,
      score: d.score,
      freq: d.freq,
    })
    lastX += (maxWidth - 25) * d.freq
  }

  sel
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', d => d.x)
    .attr('y', 0)
    .attr('width', d => d.width - 1)
    .attr('height', 20)
    .attr('fill', d => color(d.score))
    .on('mouseover', (evt, d) => {
      tooltip.show({
        reference: evt.currentTarget,
        html: `<div>Score: ${d.score}</div><div>Pct. Freq: ${format('.2p')(
          d.freq
        )}</div>`,
      })
    })
    .on('mouseleave', evt => {
      tooltip.hide()
    })

  sel
    .append('g')
    .attr('transform', `translate(0,${20})`)
    .call(
      axisBottom(x).tickFormat(format('~p')).tickValues([0, 0.25, 0.5, 0.75, 1])
    )
}

const histogram = sel => {
  const x = scaleBand()
    .domain(xDomain)
    .range([30, maxWidth - 10])
    .padding(0.1)

  const y = scaleLinear()
    .domain([0, max(data, d => d.length)])
    .range([histHeight - 30, 10])
    .nice()

  sel
    .append('g')
    .attr('transform', `translate(30,0)`)
    .call(axisLeft(y))
    .call(g =>
      g
        .append('text')
        .text('Frequency')
        .attr('x', 10)
        .attr('class', 'axisTitle')
        .attr('y', 10)
        .attr('alignment-baseline', 'hanging')
        .attr('text-anchor', 'start')
    )

  sel
    .append('g')
    .attr('transform', `translate(0,${histHeight - 30})`)
    .call(axisBottom(x))
    .call(g =>
      g
        .append('text')
        .text('Sentiment Score')
        .attr('x', maxWidth / 2 + 10)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'hanging')
        .attr('class', 'axisTitle')
        .attr('dy', 22)
    )

  sel
    .append('g')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('x', d => x(String(d.x0)))
    .attr('width', x.bandwidth())
    .attr('y', d => y(d.length))
    .attr('height', d => y(0) - y(d.length))
    .attr('fill', d => color(d.x0))
    .on('mouseover', (evt, d) => {
      tooltip.show({
        reference: evt.currentTarget,
        html: `<div>${d.length} statements</div><div>Score: ${d.x0}</div>`,
      })
    })
    .on('mouseout', () => {
      tooltip.hide()
    })
}

export const statementSentiment = () => {
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

  const svg = select(dom)
    .append('svg')
    .attr('height', width * aspect)
    .attr('width', width)
    .attr('viewBox', [0, 0, maxWidth, height].toString())

  tooltip = createTooltip({
    attachTo: dom,
    popperOptions: {
      placement: 'top',
    },
  })

  const stck = svg.append('g').call(stack)

  const hist = svg
    .append('g')
    .attr('transform', `translate(0,${stackHeight})`)
    .call(histogram)
}
