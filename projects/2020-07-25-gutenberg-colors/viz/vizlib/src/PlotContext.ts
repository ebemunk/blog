import { createContext } from 'react'

import { marginDefaults } from './const'

import { Margin } from './types'

export interface PlotContextInterface {
  transform: string
  chartWidth: number
  chartHeight: number
  margin: Margin
  getBoundingClientRect?: () => DOMRect | undefined
  [key: string]: any
}

const PlotContext = createContext<PlotContextInterface>({
  transform: '',
  chartWidth: 0,
  chartHeight: 0,
  margin: marginDefaults,
  getBoundingClientRect: undefined,
})

export default PlotContext
