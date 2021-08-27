import { identity } from 'remeda'

import { scalePoint, scaleTime, scaleLinear, scaleOrdinal } from 'd3-scale'
import { range, extent, group } from 'd3-array'
import { schemeSpectral } from 'd3-scale-chromatic'

import { data } from '../data'
import { hierarchy, pack } from 'd3-hierarchy'

const scales = ({ stage, chartHeight, chartWidth, xA, yA }) => {
  switch (stage) {
    case 'start': {
      return [
        scalePoint()
          .range([0, chartWidth])
          .domain(data.map(d => d.year + ''))
          .padding(0.5),

        scalePoint()
          .range([0, chartHeight])
          .domain(range(12).map(d => `${d}`))
          .padding(0.5),

        identity,
      ] as const
    }

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips': {
      return [
        scaleTime()
          // @ts-ignore
          .domain(extent(data, xA))
          .range([0, chartWidth]),

        scaleLinear()
          .domain(
            //@ts-ignore
            extent(data, yA),
          )
          .range([chartHeight, 0])
          .nice(),

        identity,
      ] as const
    }

    case 'hair':
    case 'ethnicity':
    case 'breasts':
    case 'theCup': {
      const packer = pack()
        .size([chartWidth, chartHeight])
        .padding(d => (d.depth === 1 ? 5 : 25))
      // .radius(d => 2)

      console.log('ch, cw', chartWidth, chartHeight)

      const grouped = group(data, d => d[stage] ?? null)
      const hi = hierarchy(grouped).count()

      const packed = packer(hi)

      console.log('packed', packed.children)

      const nodes = packed.leaves()

      const csD = {
        hair: ['Blonde', 'Brunette', 'Black', 'Red', 'Auburn', null],
        ethnicity: [
          'Caucasian',
          'Black',
          'Latin',
          'Asian',
          'Mixed',
          'Other',
          null,
        ],
        breasts: ['Real/Natural', 'Fake/Enhanced', null],
        theCup: ['A', 'B', 'C', 'D', 'DD', 'E', 'F', 'H', 'I', null],
      }
      const csR = {
        hair: ['yellow', 'brown', 'black', 'red', 'orange', 'cyan'],
        ethnicity: [
          'white',
          'black',
          'brown',
          'yellow',
          'purple',
          'salmon',
          'cyan',
        ],
        breasts: ['green', 'red', 'cyan'],
        theCup: [...schemeSpectral[9], 'cyan'],
      }

      const colorScale = scaleOrdinal().domain(csD[stage]).range(csR[stage])

      return [
        //@ts-ignore
        d => nodes.find(n => d.name === n.data.name)?.x,
        //@ts-ignore
        d => nodes.find(n => d.name === n.data.name)?.y,
        colorScale,
        packed.children,
      ] as const
    }

    default:
      return [identity, identity, identity] as const
  }
}

export default scales
