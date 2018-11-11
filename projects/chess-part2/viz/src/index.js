import React from 'react'
import ReactDOM from 'react-dom'

import 'react-vis/dist/style.css'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

import GameEndMaterialDiff from './sections/GameEndMaterialDiff'

render(<GameEndMaterialDiff />, '#game-end-material-diff')
