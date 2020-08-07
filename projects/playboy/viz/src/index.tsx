import * as React from 'react'
import ReactDOM from 'react-dom'

const render = (component: React.ReactElement, selector: string) =>
  ReactDOM.render(component, document.querySelector(selector))

import Scatter from './scatter/index'
render(<Scatter />, '#viz-scatter')

// import Trends from './trends/index'
// render(<Trends />, '#viz-trends')

import BWH from './bwh/index'
render(<BWH />, '#viz-bwh')

// @ts-ignore
if (module.hot) module.hot.accept()
