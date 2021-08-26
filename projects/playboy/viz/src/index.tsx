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

//@ts-ignore
window.showFps = function () {
  var script = document.createElement('script')
  script.onload = function () {
    //@ts-ignore
    var stats = new Stats()
    document.body.appendChild(stats.dom)
    requestAnimationFrame(function loop() {
      stats.update()
      requestAnimationFrame(loop)
    })
  }
  script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js'
  document.head.appendChild(script)
}

if (process.env.NODE_ENV === 'development') {
  //@ts-ignore
  window.showFps()
}

// @ts-ignore
if (module.hot) module.hot.accept()
