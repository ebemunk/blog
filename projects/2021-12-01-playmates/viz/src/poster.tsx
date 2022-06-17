import * as React from 'react'
import ReactDOM from 'react-dom'

const render = (component: React.ReactElement, selector: string) => {
  const el = document.querySelector(selector)
  if (!el) return null

  ReactDOM.render(component, el)
}

import DemographicsPrint from './demographics/index'
render(<DemographicsPrint />, '#viz-demographics-print')

import { ScrollyJustChart } from './pud/components/Scrolly'
render(<ScrollyJustChart initialStep={Step.Age} />, '#viz-scrolly-age')
render(<ScrollyJustChart initialStep={Step.Height} />, '#viz-scrolly-height')
render(<ScrollyJustChart initialStep={Step.Weight} />, '#viz-scrolly-weight')
render(<ScrollyJustChart initialStep={Step.Bust} />, '#viz-scrolly-bust')
render(<ScrollyJustChart initialStep={Step.Waist} />, '#viz-scrolly-waist')
render(<ScrollyJustChart initialStep={Step.Hips} />, '#viz-scrolly-hips')
render(<ScrollyJustChart initialStep={Step.Hair} />, '#viz-scrolly-hair')
render(
  <ScrollyJustChart initialStep={Step.Enhancements} />,
  '#viz-scrolly-enhancements',
)
render(
  <ScrollyJustChart initialStep={Step.Ethnicity} />,
  '#viz-scrolly-ethnicity',
)

import Hourglass from './pud/components/Hourglass'
render(<Hourglass />, '#viz-bwh')

import BMI from './bmi/index'
render(<BMI />, '#viz-bmi')

import WHR from './whr/index'
render(<WHR />, '#viz-whr')

import Birthplace from './birthplace/index'
render(<Birthplace />, '#viz-birthplace')

import BirthplaceUSA from './birthplace/usa'
render(<BirthplaceUSA />, '#viz-birthplace-usa')

import MostAverage from './pud/components/MostAverage'
render(<MostAverage type="avg" />, '#viz-mostaverage')
render(<MostAverage type="year" />, '#viz-mostaverage-years')

import { Store } from './store'
import { format } from 'd3'
import { cm2in } from './pud/util'
import { Step } from './pud/components/Scrolly/types'

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
