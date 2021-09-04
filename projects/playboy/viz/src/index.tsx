import * as React from 'react'
import ReactDOM from 'react-dom'

import './global.css'

const render = (component: React.ReactElement, selector: string) =>
  ReactDOM.render(component, document.querySelector(selector))

import Scatter from './scatter/index'
render(<Scatter />, '#viz-scatter')

import BWH from './bwh/index'
render(<BWH />, '#viz-bwh')

import Units from './units/index'
render(<Units />, '#viz-units')
render(<Units />, '#viz-units2')

import BMI from './bmi/index'
render(<BMI />, '#viz-bmi')

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
