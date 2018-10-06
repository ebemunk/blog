import React from 'react'
import ReactDOM from 'react-dom'

import Root from './Root'

import 'react-vis/dist/style.css'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

render(<Root />, '#root')
