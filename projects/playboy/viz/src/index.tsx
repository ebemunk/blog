import * as React from 'react'
import ReactDOM from 'react-dom'

const render = (component: React.ReactElement, selector: string) =>
  ReactDOM.render(component, document.querySelector(selector))

import Trends from './trends/index'
render(<Trends />, '#viz-trends')

import BWH from './bwh/index'
render(<BWH />, '#viz-bwh')

// @ts-ignore
if (module.hot) module.hot.accept()

// // @ts-ignore
// if (module.hot) {
//   console.log('its hot')

//   // @ts-ignore
//   module.hot.accept('./', () => {
//     console.log('hottt')

//     render(<Trends />, '#viz-trends')
//     render(<BWH />, '#viz-bwh')
//     // in all other cases - re-require App manually
//     // render(require('./bwh/index'));
//   })
// }
