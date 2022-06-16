import { readFileSync, writeFileSync } from 'fs'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'

function render(jsx, idSelector) {
  const sheets = new SheetsRegistry()
  const str = ReactDOM.renderToString(
    <JssProvider registry={sheets}>{jsx}</JssProvider>,
  )
  file = file.replace(
    `<div id="${idSelector}"></div>`,
    `<div id="${idSelector}">${str}<style>${sheets.toString()}</style></div>`,
  )
}

let file = readFileSync('../../../content/2021-12-01-playmates/tpl.md', 'utf-8')

import Scrolly from './pud/components/Scrolly'
render(<Scrolly />, 'viz-scatter')

import Hourglass from './pud/components/Hourglass'
render(<Hourglass />, 'viz-bwh')

import Units from './pud/components/Units/index'
render(<Units />, 'viz-units')
render(<Units />, 'viz-units2')

import BMI from './bmi/index'
render(<BMI />, 'viz-bmi')

import DemographicsPrint from './demographics/index'
render(<DemographicsPrint />, 'viz-demographics-print')

import Birthplace from './birthplace/index'
render(<Birthplace />, 'viz-birthplace')

import BirthplaceBins from './birthplace/bins'
import { byCountry, data } from './data'
render(<BirthplaceBins data={byCountry} />, 'viz-birthplace-bins')

import BirthplaceUSA from './birthplace/usa'
render(<BirthplaceUSA />, 'viz-birthplace-usa')
import { byState } from './data'
render(<BirthplaceBins data={byState} />, 'viz-birthplace-bins-usa')

import MostAverage from './pud/components/MostAverage'
render(<MostAverage type="avg" />, 'viz-mostaverage')
render(<MostAverage type="year" />, 'viz-mostaverage-years')

import WHR from './whr/index'
render(<WHR />, 'viz-whr')

writeFileSync('../../../content/2021-12-01-playmates/index.md', file)
