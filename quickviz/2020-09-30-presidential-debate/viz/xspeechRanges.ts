// import { BaseType, select, Selection } from 'd3-selection'
// import { axisBottom, axisLeft } from 'd3-axis'
// import { scaleBand, scaleLinear, scaleOrdinal, scaleTime } from 'd3-scale'
// import { max } from 'd3-array'

// import data from '../data/speechLen.json'
// import { ChartOptions } from './types'
// import { colorScaleByName, msToString } from '../util'

// export default function drawSpeechRanges(
//   element,
//   { height, width, margin }: ChartOptions,
// ) {
//   const margins = {
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     ...margin,
//   }

//   const svg = select(element).append('svg')
//   svg.attr('shape-rendering', 'crispedges')

//   svg.attr('width', width).attr('height', height)

//   const chart = svg
//     .append('g')
//     .attr('transform', `translate(${margins.left},${margins.top})`)

//   const chartWidth = width - (margins.left + margins.right)
//   const chartHeight = height - (margins.top + margins.bottom)

//   const xScale = scaleTime()
//     .domain([
//       0,
//       max(Object.keys(data).flatMap(key => data[key].flatMap(d => d))),
//     ])
//     .range([0, chartWidth])

//   const xAxis = () => axisBottom(xScale).tickFormat(msToString).ticks(30)
//   chart
//     .append('g')
//     .attr('transform', `translate(0,${chartHeight})`)
//     .attr('class', 'xAxis')
//     .call(xAxis())

//   const duplicatedDomain = ['Trump', 'Biden', 'Wallace'].reverse()

//   const yScale = scaleBand().domain(duplicatedDomain).range([chartHeight, 0])

//   chart.append('g').attr('class', 'yAxis').call(axisLeft(yScale))

//   const lanes: Selection<BaseType, any, SVGGElement, any> = chart
//     .append('g')
//     .attr('class', 'lanes')
//     .selectAll('g')
//     .data(Object.keys(data))
//     .join('g')
//     .attr('class', d => `lane ${d}`)

//   lanes
//     .selectAll('rect')
//     .data(key =>
//       data[key].map(d => {
//         d.key = key
//         return d
//       }),
//     )
//     .join('rect')
//     .attr('x', d => xScale(d[0])!)
//     .attr('y', d => yScale(d.key)!)
//     .attr('height', yScale.bandwidth())
//     .attr('width', d => Math.max(xScale(d[1]) - xScale(d[0]), 1))
//     .attr('fill', d => colorScaleByName(d.key))

//   chart
//     .append('g')
//     .attr('transform', `translate(0,${chartHeight})`)
//     .attr('class', 'xGrid')
//     .call(xAxis().tickSize(-chartHeight).tickFormat(''))
// }

// const secToMs = (sec: number) => sec * 1000
// const tsToMs = (s = 0, m = 0, h = 0) =>
//   secToMs(h * 60 * 60) + secToMs(m * 60) + secToMs(s)
// const tt = tsToMs
