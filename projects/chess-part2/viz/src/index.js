import React from 'react'
import ReactDOM from 'react-dom'

import 'react-vis/dist/style.css'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

import GameEndMaterialDiff from './sections/GameEndMaterialDiff'
import GameEndMaterialCount from './sections/GameEndMaterialCount'
import BranchingFactor from './sections/BranchingFactor'
import Ratings from './sections/Ratings'
import Years from './sections/Years'

render(<GameEndMaterialDiff />, '#GameEndMaterialDiff')
render(<GameEndMaterialCount />, '#GameEndMaterialCount')
render(<BranchingFactor />, '#BranchingFactor')
render(<Ratings />, '#Ratings')
render(<Years />, '#Years')

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

import Scouts from './sections/Scout'

render(<Scouts filter={['Pv', 'PPv', 'PPPv']} />, '#imbaP')

render(<Scouts filter={['Nv', 'Bv', 'Rv', 'Qv']} />, '#imbaPiece')

render(<Scouts filter={['NvP', 'NvPP', 'NvPPP', 'NvPPPP']} />, '#imbaN')

render(<Scouts filter={['BvP', 'BvPP', 'BvPPP', 'BvPPPP']} />, '#imbaB')

render(<Scouts filter={['NvB', 'NvR', 'NvQ', 'BvR', 'BvQ']} />, '#imbaMinor')

render(<Scouts filter={['RvN', 'RvB', 'RvPPP']} />, '#imbaExchange')

render(<Scouts filter={['NBvR', 'NNvR', 'BBvR']} />, '#imba2mr')

render(<Scouts filter={['QvR', 'QvRR']} />, '#imbaMajor')

import PawnPaths from './sections/PawnPaths'

render(<PawnPaths />, '#PawnPaths')

import Positions from './sections/Positions'

render(<Positions />, '#Positions')
