import React from 'react'
import ReactDOM from 'react-dom'

import MapViz from 'roots/Map/MapV'
import DayOfWeek from 'roots/DayOfWeek'
import Places from 'roots/Places'
import ScrollMap from 'roots/ScrollMap'

import './index.css'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

// render(<MapViz />, '#map')
render(<ScrollMap />, '#map')
render(<DayOfWeek />, '#day-of-week')
render(<Places />, '#places')
