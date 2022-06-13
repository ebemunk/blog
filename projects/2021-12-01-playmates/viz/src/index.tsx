import * as React from 'react'
import ReactDOM from 'react-dom'

import './global.css'

const render = (component: React.ReactElement, selector: string) => {
  const el = document.querySelector(selector)
  if (!el) return null

  ReactDOM.render(component, el)
}

import Scrolly from './pud/components/Scrolly'
render(<Scrolly />, '#viz-scatter')

import Hourglass from './pud/components/Hourglass'
render(<Hourglass />, '#viz-bwh')

import Units from './units/index'
render(<Units />, '#viz-units')
render(<Units />, '#viz-units2')

import BMI from './bmi/index'
render(<BMI />, '#viz-bmi')

import DemographicsPrint from './demographics/index'
render(<DemographicsPrint />, '#viz-demographics-print')

import Birthplace from './birthplace/index'
render(<Birthplace />, '#viz-birthplace')

import BirthplaceBins from './birthplace/bins'
import { byCountry, data } from './data'
render(<BirthplaceBins data={byCountry} />, '#viz-birthplace-bins')

import BirthplaceUSA from './birthplace/usa'
render(<BirthplaceUSA />, '#viz-birthplace-usa')
import { byState } from './data'
render(<BirthplaceBins data={byState} />, '#viz-birthplace-bins-usa')

import KMeans from './kmeans/index'
render(<KMeans />, '#viz-kmeans')

import MostAverage from './mostaverage/index'
render(<MostAverage />, '#viz-mostaverage')
import MostAverageYears from './mostaverage/years'
render(<MostAverageYears />, '#viz-mostaverage-years')

import WHR from './whr/index'
render(<WHR />, '#viz-whr')

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

import { Store } from './store'
import { format } from 'd3'
import { cm2in } from './pud/util'

Store.subscribe(
  s => s.units,
  units => {
    document.querySelectorAll('[data-cms]').forEach(el => {
      const val = +el.attributes['data-cms'].value
      el.textContent =
        units === 'metric'
          ? val.toString()
          : format('d')(Math.ceil(cm2in(val))).toString()
    })
  },
)

// @ts-ignore
if (module.hot) module.hot.accept()
