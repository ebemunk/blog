// import { extent, max, range } from 'd3-array'
// import { scaleBand, scaleLinear, scaleOrdinal, scalePoint } from 'd3-scale'
// import { select, Selection } from 'd3-selection'

// import { ChartOptions, Enter, Margin } from './types'

// import data from '../data/per-second-speech.json'
// import { axisBottom, axisLeft, axisTop } from 'd3-axis'
// import { colorScaleByName, msToString } from '../util'
// import { equals } from 'remeda'
// import { arc, pie, stack } from 'd3-shape'
// import { format } from 'd3-format'

// const total = (id: number) =>
//   Object.entries(data).filter(d => d[1].some(dd => dd === id)).length
// const shared = (ids: number[]) =>
//   Object.entries(data).filter(d => equals(d[1].sort(), ids.sort())).length

// export const actualData = [
//   {
//     name: 'Biden',
//     total: total(1),
//     bars: [
//       { name: 'Trump', total: shared([1, 0]), parent: 'Biden' },
//       { name: 'Wallace', total: shared([1, 2]), parent: 'Biden' },
//     ],
//   },
//   {
//     name: 'Trump',
//     total: total(0),
//     bars: [
//       { name: 'Biden', total: shared([0, 1]), parent: 'Trump' },
//       { name: 'Wallace', total: shared([0, 2]), parent: 'Trump' },
//     ],
//   },
//   {
//     name: 'Wallace',
//     total: total(2),
//     bars: [
//       { name: 'Trump', total: shared([2, 0]), parent: 'Wallace' },
//       { name: 'Biden', total: shared([2, 1]), parent: 'Wallace' },
//     ],
//   },
// ]

// console.log(actualData)

// export default function speechLengths() {
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

//     const xScale = scalePoint()
//       .domain(['Trump', 'Biden', 'Wallace'])
//       .range([0, chartWidth])
//       .padding(0.7)

//     const totalSecs = actualData.reduce((tot, d) => tot + d.total, 0)

//     const dataGs = chart
//       .append('g')
//       .attr('class', 'data')
//       .selectAll('g')
//       .data(actualData)
//       .join('g')
//       .attr('class', d => d.name)
//       .attr('transform', d => `translate(${xScale(d.name)},${chartHeight / 2})`)

//     type PieDatum = { value: number; name: string }
//     const pieGen = pie<PieDatum>().value(d => d.value)

//     const arcGen = arc<PieDatum>()
//       .outerRadius(chartHeight / 2)
//       .innerRadius(chartHeight / 3)

//     const pies = dataGs
//       .selectAll('.slice')
//       .data(d =>
//         pieGen([
//           ...d.bars.map(dd => ({ value: dd.total, name: dd.name })),
//           {
//             value: d.total - d.bars.reduce((tot, dd) => tot + dd.total, 0),
//             name: d.name,
//           },
//         ]),
//       )
//       .join('path')
//       .attr('class', 'slice')
//       .attr('d', arcGen)
//       .style('fill', d => colorScaleByName(d.data.name))

//     const formatSec = (sec: number) => {
//       const d = new Date(sec * 1000)
//       const m = d.getUTCMinutes()
//       const s = d.getUTCSeconds()
//       if (!m) return `${s} sec.`
//       if (!s) return `${m} min.`
//       // return `${m} min. ${s} sec.`
//       return `${m}m ${s}s`
//     }
//     const formatPct = format('.2p')

//     dataGs
//       .selectAll('g.info')
//       .data(d => [d])
//       .join('g')
//       .attr('class', 'info')
//       .selectAll('text')
//       .data(d => [d])
//       .join(enter => {
//         enter
//           .append('text')
//           .text(d => d.name)
//           .attr('class', 'name trump')

//         enter
//           .append('text')
//           .attr('class', 'mainStat')
//           .selectAll('tspan')
//           .data(d => [
//             formatSec(d.total),
//             ` (${formatPct(d.total / totalSecs)})`,
//             ' of debate',
//           ])
//           .join('tspan')
//           .text(d => d)

//         enter
//           .selectAll('.stat')
//           .data(d => d.bars)
//           .join('text')
//           .attr('class', 'stat')
//           .text(function (d, i, g) {
//             return `${formatSec(
//               d.total,
//             )} (${formatPct(d.total / this.parentNode.__data__.total)}) w/ ${d.name}`
//           })
//           .attr('dy', (d, i) => 40 + 40 * i)

//         return enter
//       })
//   }

//   chart.options = function (options: ChartOptions) {
//     Object.assign(margin, options.margin)
//     width = options.width || width
//     height = options.height || height
//     return chart
//   }

//   return chart
// }
