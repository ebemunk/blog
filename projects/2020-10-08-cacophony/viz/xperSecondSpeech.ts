// import { extent, range } from 'd3-array'
// import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale'
// import { select, Selection } from 'd3-selection'

// import { ChartOptions, Margin } from './types'

// import data from '../data/per-second-speech.json'
// import { axisBottom } from 'd3-axis'
// import { colorScaleById, msToString } from '../util'

// export default function perSecondSpeech() {
//   let height = 150,
//     width = 960,
//     margin: Margin = {
//       top: 10,
//       left: 50,
//       right: 25,
//       bottom: 20,
//     }

//   function chart(selection) {
//     const svg: Selection<SVGElement, null, null, null> = selection.append('svg')
//     svg.attr('width', width).attr('height', height)

//     const chart = svg
//       .append('g')
//       .attr('transform', `translate(${margin.left},${margin.top})`)

//     const chartWidth = width - (margin.left + margin.right)
//     const chartHeight = height - (margin.top + margin.bottom)

//     const xScale = scaleBand().domain(Object.keys(data)).range([0, chartWidth])

//     const xExtent = extent(Object.keys(data).map(Number))
//     const xTicks = range(0, xExtent[1], 300)

//     chart
//       .append('g')
//       .attr('transform', `translate(0,${chartHeight})`)
//       .attr('class', 'x-axis')
//       .call(
//         axisBottom(xScale)
//           .tickValues(xTicks)
//           .tickFormat(d => msToString(d * 1000)),
//       )

//     const dataContainer = chart.append('g')
//     dataContainer.attr('class', 'data')

//     dataContainer
//       .selectAll('rect')
//       .data(Object.entries(data).filter(([sec, names]) => names.length > 1))
//       .join('g')
//       .attr('transform', ([sec]) => `translate(${xScale(sec)}, 0)`)
//       .selectAll('rect')
//       .data(d => d[1])
//       .join('rect')
//       .attr('y', (name, i, names) => i * (chartHeight / names.length))
//       .attr('width', Math.max(xScale.bandwidth(), 1))
//       .attr('height', (name, i, names) => chartHeight / names.length)
//       .attr('fill', name => (colorScaleById(String(name)) as string) ?? 'none')
//   }

//   chart.options = function (options: ChartOptions) {
//     Object.assign(margin, options.margin)
//     width = options.width || width
//     height = options.height || height
//     return chart
//   }

//   return chart
// }
