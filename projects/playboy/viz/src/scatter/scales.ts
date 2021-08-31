import { identity } from 'remeda'

import { scalePoint, scaleTime, scaleLinear, scaleOrdinal } from 'd3-scale'
import { range, extent, group } from 'd3-array'
import { schemeSpectral } from 'd3-scale-chromatic'

import { data } from '../data'
import { hierarchy, pack } from 'd3-hierarchy'
import { Playmate } from '../types'

type Accessor = (d: any, i: number, arr: Iterable<any>) => string | number

const scales = ({
  stage,
  chartHeight,
  chartWidth,
  xA,
  yA,
}: {
  stage: string
  chartHeight: number
  chartWidth: number
  xA: Accessor
  yA: Accessor
}) => {
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
          //@ts-ignore
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
      const packer = pack<Playmate>()
        .size([chartWidth / 2, chartHeight])
        .padding(d => (d.depth === 1 ? 5 : 25))

      const grouped = group(data, d => d[stage] ?? null)
      const hi = hierarchy(grouped).count()

      // @ts-ignore wrong typings in case when arg is a Map
      const packed = packer(hi)

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
        // hair: ['yellow', 'brown', 'black', 'red', 'orange', 'cyan'],
        hair: schemeSpectral[6],
        // ethnicity: [
        //   'white',
        //   'black',
        //   'brown',
        //   'yellow',
        //   'purple',
        //   'salmon',
        //   'cyan',
        // ],
        ethnicity: schemeSpectral[7],
        // breasts: ['green', 'red', 'cyan'],
        breasts: schemeSpectral[3],
        // theCup: [...schemeSpectral[9], 'cyan'],
        theCup: schemeSpectral[10],
      }

      const colorScale = scaleOrdinal().domain(csD[stage]).range(csR[stage])

      return [
        d => nodes.find(n => d.name === n.data.name)?.x,
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
