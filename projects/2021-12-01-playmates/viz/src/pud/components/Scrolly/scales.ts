import { identity } from 'remeda/dist/es/identity'
import {
  scalePoint,
  scaleTime,
  scaleLinear,
  scaleOrdinal,
  range,
  extent,
  group,
  hierarchy,
  pack,
  schemeSpectral,
} from 'd3'

import { Breasts, data, Ethnicity, Hair, Playmate } from '../../data/data'
import { PointSteps, Step } from './types'
import { CAccessor, XAccessor, YAccessor } from './accessors'
import { isInStepCategory } from './util'

export default function scales({
  step,
  chartHeight,
  chartWidth,
  xA,
  yA,
  cA,
  isSm,
}: {
  step: Step
  chartHeight: number
  chartWidth: number
  xA: XAccessor
  yA: YAccessor
  cA: CAccessor
  isSm: boolean
}) {
  switch (step) {
    case isInStepCategory(step, PointSteps): {
      return [
        scaleTime()
          //@ts-ignore
          .domain([new Date(1953, 11, 1), new Date(2020, 11, 1)])
          .range([0, chartWidth]),

        scalePoint()
          .range([0, chartHeight])
          .domain(range(12).map(d => d.toString()))
          .padding(0.5),

        identity,
      ] as const
    }

    case Step.Age:
    case Step.Height:
    case Step.Weight:
    case Step.Bust:
    case Step.Waist:
    case Step.Hips: {
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

    case Step.Hair:
    case Step.Ethnicity:
    case Step.Enhancements: {
      const packer = pack<Playmate>()
        .size(
          isSm
            ? [chartWidth, chartHeight / 2]
            : [chartWidth / 2 - 10, chartHeight],
        )
        .padding(d => (d.depth === 1 ? 8 : 60))

      const grouped = group(data, cA)
      const hi = hierarchy(grouped).count()

      // @ts-ignore wrong typings in case when arg is a Map
      const packed = packer(hi)

      const nodes = packed.leaves()

      const csD = {
        [Step.Hair]: Object.values(Hair)
          .filter(d => typeof d === 'string')
          .map(d => d.toString()),
        [Step.Ethnicity]: Object.values(Ethnicity)
          .filter(d => typeof d === 'string')
          .map(d => d.toString()),
        [Step.Enhancements]: Object.values(Breasts)
          .filter(d => typeof d === 'string')
          .map(d => d.toString()),
      }
      const csR = {
        hair: ['#fee08b', '#555', 'rgb(140 81 23)', '#c74742'],
        ethnicity: schemeSpectral[4],
        enhancements: schemeSpectral[3],
      }

      const colorScale = scaleOrdinal().domain(csD[step]).range(csR[step])

      return [
        d => nodes.find(n => d.name === n.data.name)?.x,
        d => nodes.find(n => d.name === n.data.name)?.y,
        colorScale,
        packed.children,
      ] as const
    }

    default:
      throw Error(`step ${step} is not accounted for!`)
  }
}
