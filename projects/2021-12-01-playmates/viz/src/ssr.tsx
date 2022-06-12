import { readFileSync, writeFileSync } from 'fs'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Demographics from './demographics'

const str = ReactDOM.renderToString(<Demographics />)

let file = readFileSync(
  '../../../content/2021-12-01-playmates/index.md',
  'utf-8',
)
file = file.replace(
  '<div id="viz-demographics-print"></div>',
  `<div id="viz-demographics-print">${str}</div>`,
)
writeFileSync('../../../content/2021-12-01-playmates/index.md', file)
