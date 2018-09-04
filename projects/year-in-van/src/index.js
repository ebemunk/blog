import React from 'react'
import ReactDOM from 'react-dom'

import MapViz from './MapV'

import './index.css'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

render(<MapViz />, '#root')
