import {
  bin,
  scaleLinear,
  max,
  axisBottom,
  format,
  scaleSqrt,
  schemeCategory10,
  pointer,
  select,
  scaleBand,
  range,
} from 'd3'

import lengths from '../data/statementLengths.json'
import createTooltip from './tooltip'

const bins = bin()(lengths)

const height = 580
const maxWidth = 800
let width = maxWidth
const histHeight = 80
const dom = document.querySelector('#statement-lengths')

export const statementLengths = () => {
  const resizeObserver = new ResizeObserver(entries => {
    const entry = entries[0]
    if (!entry) return

    width = Math.min(entry.contentRect.width, maxWidth)
    chart()
  })

  resizeObserver.observe(dom)
}

const histogram = g => {
  const x = scaleLinear()
    .domain([bins[0].x0, bins[bins.length - 1].x1])
    .range([30, width - 10])

  const y = scaleLinear()
    .domain([0, max(bins, d => d.length)])
    .range([50, 0])
    .nice()

  g.append('g')
    .attr('transform', `translate(0,${50})`)
    .call(
      axisBottom(x)
        .tickFormat(format('.2~s'))
        .tickSizeInner(height - 10 - 50)
    )
    .call(g =>
      g
        .selectAll('.tick text')
        .attr('y', 6)
        .attr('stroke', '#282c34')
        .attr('stroke-width', 5)
        .style('paint-order', 'stroke')
    )
    .call(g => g.selectAll('.tick line').attr('opacity', 0.3))
    .call(g =>
      g
        .append('text')
        .attr('x', width - 10)
        .attr('y', -4)
        .attr('fill', 'currentColor')
        .attr('font-weight', 'bold')
        .attr('text-anchor', 'end')
        .text('Number of Words')
    )

  g.append('text')
    .text('Frequency')
    .attr('fill', 'white')
    .attr('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('font-size', 10)
    .attr('transform', 'rotate(-90) translate(-25,25)')
    .attr('dy', -5)

  const r = scaleSqrt()
    .domain([0, max(bins, d => d.length)])
    .range([0, 24])

  const circles = g
    .append('g')
    .selectAll('circle')
    .data(bins)
    .join('circle')
    .attr('cx', d => (x(d.x0) + x(d.x1)) / 2)
    .attr('cy', 24)
    .attr('r', d => (d.length < 1 ? 0 : Math.max(1, r(d.length))))
    .attr('fill', schemeCategory10[0])

  const tooltip = createTooltip({
    attachTo: document.querySelector('#statement-lengths'),
    popperOptions: {
      placement: 'top',
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

  g.append('rect')
    .attr('x', x.range()[0])
    .attr('width', x.range()[1] - x.range()[0])
    .attr('y', y.range()[1])
    .attr('height', y.range()[0] - y.range()[1])
    .attr('fill', 'transparent')
    .on('mousemove', evt => {
      const [mx] = pointer(evt)
      const index = Math.floor(x.invert(mx) / 100)
      const d = bins[index]
      tooltip.show({
        reference: [...circles][index],
        html: `<div>${d.length} statement${d.length !== 1 ? 's' : ''} (${format(
          '.0p'
        )(d.length / lengths.length)})</div><div>between ${d.x0}-${
          d.x1
        } words</div>`,
      })
    })
    .on('mouseleave', (evt, d) => {
      tooltip.hide()
    })
}

export const chart = () => {
  dom.innerHTML = ''

  const svg = select(dom)
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .attr('viewBox', [0, 0, width, height].toString())

  svg.append('g').call(histogram)

  const y = scaleBand()
    .domain(range(lengths.length).map(String))
    .range([0, height - histHeight - 10])
    .padding(0.1)

  const x = scaleLinear()
    .domain([0, max(lengths)])
    .range([30, width - 10])
    .nice()

  svg
    .append('g')
    .attr('transform', `translate(0,${histHeight})`)
    .selectAll('rect')
    .data(lengths)
    .join('rect')
    .attr('x', x(0))
    .attr('width', d => x(d) - x(0))
    .attr('y', (d, i) => y(i.toString()))
    .attr('height', y.bandwidth())
    .attr('fill', schemeCategory10[1])

  svg
    .append('text')
    .text('Ordered by word count')
    .attr('fill', 'white')
    .attr('font-weight', 'bold')
    .attr('text-anchor', 'middle')
    .attr('font-size', 10)
    .attr('transform', 'rotate(-90) translate(-300,25)')
    .attr('dy', -5)

  const defs = svg
    .append('defs')
    .append('marker')
    .attr('id', 'arrow')
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto-start-reverse')
    .attr('viewBox', '0 -5 10 10')
    .append('path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', 'white')

  const txtg = svg.append('g').attr('transform', `translate(0,${histHeight})`)
  tooltips(txtg, x, y)
}

function tooltips(txtg, x, y) {
  const makeTooltip = ({ offset, placement }) =>
    createTooltip({
      attachTo: dom,
      popperOptions: {
        placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: offset,
            },
          },
          { name: 'flip', enabled: false },
          { name: 'preventOverflow', enabled: width < 768 },
        ],
      },
      tooltipSel: sel =>
        sel.style('pointer-events', width < 768 ? 'none' : 'inherit').style('font-size', '0.8em'),
    })

  const minT = makeTooltip({
    offset: [-10, 10],
    placement: 'right-start',
  })

  const min = txtg
    .append('g')
    .append('line')
    .attr('x1', x(lengths[0]))
    .attr('y1', y('0') + y.bandwidth() / 2)
    .attr('x2', x(lengths[0]) + 50)
    .attr('y2', y('0') + y.bandwidth() / 2)
    .attr('stroke', 'white')
    .attr('marker-end', 'url(#arrow)')

  txtg
    .append('circle')
    .attr('cx', x(lengths[0]) + 50 + 25)
    .attr('cy', y('0') + y.bandwidth() / 2)
    .attr('r', 10)
    .attr('fill', 'lightgray')
    .on('mouseenter', () => {
      showMin()
    })
    .on('mouseleave', () => {
      minT.hide()
    })

  function showMin() {
    minT.show({
      html: `<div>"Peace."</div>
      <div><a href="https://murderpedia.org/male.W/w1/webb-freddie-lee.htm" target="_blank">Freddie Lee Webb, 1994</a></div>
      `,
      reference: min.node(),
    })
  }

  const medianT = makeTooltip({
    offset: [0, 10],
    placement: 'right',
  })
  const median = txtg
    .append('g')
    .append('line')
    .attr('x1', x(lengths[227]))
    .attr('y1', y('227') + y.bandwidth() / 2)
    .attr('x2', x(lengths[227]) + 50)
    .attr('y2', y('227') + y.bandwidth() / 2)
    .attr('stroke', 'white')
    .attr('marker-end', 'url(#arrow)')

  txtg
    .append('circle')
    .attr('cx', x(lengths[227]) + 50 + 25)
    .attr('cy', y('227') + y.bandwidth() / 2)
    .attr('r', 10)
    .attr('fill', 'lightgray')
    .on('mouseenter', () => {
      showMedian()
    })
    .on('mouseleave', () => {
      medianT.hide()
    })

  function showMedian() {
    medianT.show({
      html: `<div style="max-width: 250px;">"I want the victim's family to know that I didn't commit this crime. I didn't kill your loved one. Sharon Wilson, y'all convicted an innocent man and you know it. There are some lawyers hired that is gonna prove that, and I hope you can live with it. To my family and loved ones, I love you. Thank you for supporting me. Y'all stay strong. Warden, take me home."</div>
      <div><a href="https://murderpedia.org/male.J/j1/jones-richard-wayne.htm" target="_blank">Richard Wayne Jones, 2000</a></div>
      `,
      reference: median.node(),
    })
  }

  const maxT = makeTooltip({
    offset: [0, 10],
    placement: 'top',
  })
  const max = txtg
    .append('g')
    .append('line')
    .attr('x1', x(1000))
    .attr('y1', y('453') + y.bandwidth() / 2)
    .attr('x2', x(1000))
    .attr('y2', y('453') + y.bandwidth() / 2 - 50)
    .attr('stroke', 'white')
    .attr('marker-end', 'url(#arrow)')

  txtg
    .append('circle')
    .attr('cx', x(1000))
    .attr('cy', y('453') + y.bandwidth() / 2 - 50 - 25)
    .attr('r', 10)
    .attr('fill', 'lightgray')
    .on('mouseenter', () => {
      showMax()
    })
    .on('mouseleave', () => {
      maxT.hide()
    })

  function showMax() {
    maxT.show({
      html: `<div style="max-width: 250px;">"I would like to say that I did not kill Bobby Lambert. That I'm an innocent black man that is being murdered. This is a lynching that is happening in America tonight. There's overwhelming and compelling evidence of my defense that has never been heard in any court of America. What is happening here is an outrage for any civilized country to anybody anywhere to look at what's happening here is wrong. I thank all of the people that have rallied to my cause. They've been standing in support of me. Who have finished with me..."</div>
      <div><a href="https://murderpedia.org/male.G/g1/graham-gary.htm" target="_blank">Gary Lee Graham, 2000</a></div>
      `,
      reference: max.node(),
    })
  }

  if (width >= 768) {
    showMin()
    showMedian()
    showMax()
  }
}
