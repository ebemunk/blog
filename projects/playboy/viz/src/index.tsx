import * as React from 'react'
import ReactDOM from 'react-dom'

import './global.css'

const render = (component: React.ReactElement, selector: string) => {
  const el = document.querySelector(selector)
  if (!el) return null

  ReactDOM.render(component, el)
}

import Scatter from './scatter/index'
render(<Scatter />, '#viz-scatter')

import BWH from './bwh/index'
render(<BWH />, '#viz-bwh')

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

import MobileWarning from './mobilewarning/index'
render(<MobileWarning />, '#mobile-warning')

import Poster from './scatter/poster'
document.querySelectorAll('div[data-stage]').forEach(el => {
  ReactDOM.render(<Poster stage={el.attributes['data-stage'].value} />, el)
})

render(
  <PlaymateTooltip data={data.find(d => d.name === 'Dalene Kurtis')} pinned />,
  '#viz-pmexample',
)

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
import PlaymateTooltip from './scatter/PlaymateTooltip'
const cm2in = num => (num ? num / 2.54 : null)
const in2cm = num => (num ? num * 2.54 : null)
const kg2lb = num => (num ? num / 0.45359237 : null)

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
