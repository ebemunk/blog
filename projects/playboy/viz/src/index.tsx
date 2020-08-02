import * as React from 'react'
import ReactDOM from 'react-dom'

const render = (component: React.ReactElement, selector: string) =>
  ReactDOM.render(component, document.querySelector(selector))

import Trends from './trends/index'
render(<Trends />, '#viz-trends')
