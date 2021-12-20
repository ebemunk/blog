import React from 'react'

import PlotContext from './PlotContext'

export default function usePlotContext() {
  return React.useContext(PlotContext)
}
