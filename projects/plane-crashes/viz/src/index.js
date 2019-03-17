import React from 'react'
import ReactDOM from 'react-dom'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

import Years from './viz/Years'
import Phase from './viz/Phase'
import { Damage, Matrix } from './viz/DamageMatrix'
import FatalityHist from './viz/FatalityHist'
import Nature from './viz/Nature'
import OperatorByYear from './viz/OperatorByYear'

render(<Years />, '#viz-years')

render(<Phase />, '#viz-phase')

render(<Damage />, '#viz-damage-fate')
render(<Matrix />, '#viz-damage-matrix')

render(<FatalityHist />, '#viz-fat-hist')

render(<Nature />, '#viz-nature')

render(<OperatorByYear />, '#viz-operator-by-year')

import PlaneType from './viz/PlaneType'

render(<PlaneType />, '#viz-plane-type')

import Force from './viz/Classification/Force'

render(<Force />, '#viz-classifications-force')

import Maker from './viz/Makers'

render(<Maker />, '#viz-maker')

//
;(function() {
  var script = document.createElement('script')
  script.onload = function() {
    var stats = new Stats()
    document.body.appendChild(stats.dom)
    requestAnimationFrame(function loop() {
      stats.update()
      requestAnimationFrame(loop)
    })
  }
  script.src = '//rawgit.com/mrdoob/stats.js/master/build/stats.min.js'
  document.head.appendChild(script)
})()
