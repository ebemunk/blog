import React from 'react'
import ReactDOM from 'react-dom'

import 'react-vis/dist/style.css'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

import GameEndMaterialDiff from './sections/GameEndMaterialDiff'
import GameEndMaterialCount from './sections/GameEndMaterialCount'
import BranchingFactor from './sections/BranchingFactor'

render(<GameEndMaterialDiff />, '#GameEndMaterialDiff')
render(<GameEndMaterialCount />, '#GameEndMaterialCount')
render(<BranchingFactor />, '#BranchingFactor')

// render(
//   <BoardViz data={data.Heatmaps.MateDeliverySquares} />,
//   '#MateDeliverySquares',
// )
