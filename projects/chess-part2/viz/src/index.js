import React from 'react'
import ReactDOM from 'react-dom'

import 'react-vis/dist/style.css'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

import GameEndMaterialDiff from './sections/GameEndMaterialDiff'
import GameEndMaterialCount from './sections/GameEndMaterialCount'
import BranchingFactor from './sections/BranchingFactor'
import Ratings from './sections/Ratings'

render(<GameEndMaterialDiff />, '#GameEndMaterialDiff')
render(<GameEndMaterialCount />, '#GameEndMaterialCount')
render(<BranchingFactor />, '#BranchingFactor')
render(<Ratings />, '#Ratings')

import BoardViz from './components/BoardViz'
import data from './data'

render(
  <BoardViz data={data.Heatmaps.MateDeliverySquares} />,
  '#MateDeliverySquares',
)

render(<BoardViz data={data.Heatmaps.MateSquares} filter="K" />, '#MateSquares')

render(
  <BoardViz data={data.Heatmaps.StalemateSquares} filter="K" />,
  '#StalemateSquares',
)

render(
  <BoardViz data={data.Heatmaps.EnPassantSquares} filter="P" />,
  '#EnPassantSquares',
)

render(
  <BoardViz data={data.Heatmaps.PromotionSquares} filter="AllNBRQ" />,
  '#PromotionSquares',
)

render(<BoardViz data={data.Heatmaps.FirstBlood} />, '#FirstBlood')
