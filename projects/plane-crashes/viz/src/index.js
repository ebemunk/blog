import React from 'react'
import ReactDOM from 'react-dom'

import 'react-vis/dist/style.css'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

import Years from './viz/Years'
import Phase from './viz/Phase'
import { Damage, Matrix } from './viz/DamageMatrix'
import FatalityHist from './viz/FatalityHist'
import Nature from './viz/Nature'

render(<Years />, '#viz-years')

render(<Phase />, '#viz-phase')

render(<Damage />, '#viz-damage-fate')
render(<Matrix />, '#viz-damage-matrix')

render(<FatalityHist />, '#fat-hist')
render(<Nature />, '#nature')
