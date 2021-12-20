import { extent, max, range } from 'd3-array'
import { scaleBand, scaleLinear, scaleOrdinal, scalePow } from 'd3-scale'
import { select, Selection } from 'd3-selection'
import { equals } from 'remeda'

import { ChartOptions, Margin } from './types'

import perSecondData from '../data/per-second-speech.json'
import { axisBottom } from 'd3-axis'
import { msToString } from '../util'

const data = {
  'Speaking at the same time': [
    Object.entries(perSecondData).filter(d => equals(d[1].sort(), [0, 1])),
    Object.entries(perSecondData).filter(d => equals(d[1].sort(), [0, 2])),
    Object.entries(perSecondData).filter(d => equals(d[1].sort(), [1, 2])),
    Object.entries(perSecondData).filter(d => equals(d[1].sort(), [0, 1, 2])),
  ],
  'speaking while others also': [
    Object.entries(perSecondData).filter(
      d => d[1].some(dd => dd === 0) && d[1].length > 1,
    ),
    Object.entries(perSecondData).filter(
      d => d[1].some(dd => dd === 1) && d[1].length > 1,
    ),
    Object.entries(perSecondData).filter(
      d => d[1].some(dd => dd === 2) && d[1].length > 1,
    ),
    Object.entries(perSecondData).filter(
      d => d[1].some(dd => dd === 3) && d[1].length > 1,
    ),
  ],
  'total speech length': [
    Object.entries(perSecondData).filter(d => d[1].some(dd => dd === 0)),
    Object.entries(perSecondData).filter(d => d[1].some(dd => dd === 1)),
    Object.entries(perSecondData).filter(d => d[1].some(dd => dd === 2)),
    Object.entries(perSecondData).filter(d => d[1].some(dd => dd === 3)),
  ],
}

console.log('sameTimeBars data', data)

function bar() {
  let height = 150,
    width = 960,
    margin: Margin = {
      top: 20,
      left: 25,
      right: 25,
      bottom: 20,
    }

  function chart(data, i) {
    const chartWidth = width - (margin.left + margin.right)
    const chartHeight = height - (margin.top + margin.bottom)

    const g = select(this)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .attr('class', 'barChart')

    const maxSecond = max(Object.keys(perSecondData).map(Number)) as number
    const xScale = scaleLinear()
      // .exponent(0.5)
      .domain([0, maxSecond])
      .range([0, chartWidth])

    g.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', xScale(maxSecond))
      .attr('height', chartHeight)
      .attr('fill', 'gray')

    g.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', xScale(data.length))
      .attr('height', chartHeight)
      .attr('fill', 'red')

    g.append('text')
      .attr('x', xScale(data.length))
      .attr('y', chartHeight / 2)
      .text(`${data.length} seconds (${(data.length / maxSecond) * 100}%)`)
  }

  chart.options = function (options: ChartOptions) {
    Object.assign(margin, options.margin)
    width = options.width || width
    height = options.height || height
    return chart
  }

  return chart
}

const styleObj = (style: { [key: string]: string }) => selection =>
  Object.entries(style).forEach(([key, value]) => {
    selection.style(key, value)
  })

let dataType = 'Speaking at the same time'

export default function sameTimeBars() {
  let height = 150,
    width = 960,
    margin: Margin = {
      top: 20,
      left: 25,
      right: 25,
      bottom: 20,
    }

  let container = null,
    chartWidth = 0,
    chartHeight = 0

  function chart(selection) {
    const svg: Selection<SVGElement, null, null, null> = selection.append('svg')
    svg.attr('width', width).attr('height', height)

    container = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)

    chartWidth = width - (margin.left + margin.right)
    chartHeight = height - (margin.top + margin.bottom)

    container
      .selectAll('g')
      .data(data[dataType])
      .join('g')
      .attr('transform', (d, i) => `translate(${(chartWidth / 4) * i}, 0)`)
      .each(
        bar().options({
          height: chartHeight,
          width: chartWidth / 4,
        }),
      )

    selection.call(
      styleObj({
        position: 'relative',
      }),
    )

    const controls = selection.append('div').call(
      styleObj({
        position: 'absolute',
        top: '0',
        left: '0',
      }),
    )

    controls
      .append('select')
      .on('change', function () {
        console.log(
          'hiya',
          this,
          this.selectedIndex,
          this.options[this.selectedIndex].value,
        )
        dataType = this.options[this.selectedIndex].value
        chart.redraw()
      })
      .selectAll('option')
      .data(Object.keys(data))
      .join('option')
      .text(d => d)
  }

  chart.redraw = function () {
    container.selectAll('g').remove()

    container
      .selectAll('g')
      .data(data[dataType])
      .join('g')
      .attr('transform', (d, i) => `translate(${(chartWidth / 4) * i}, 0)`)
      .each(
        bar().options({
          height: chartHeight,
          width: chartWidth / 4,
        }),
      )
  }

  chart.options = function (options: ChartOptions) {
    Object.assign(margin, options.margin)
    width = options.width || width
    height = options.height || height
    return chart
  }

  return chart
}
