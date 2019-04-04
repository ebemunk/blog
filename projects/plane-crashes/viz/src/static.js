import React from 'react'
import ReactDOM from 'react-dom'

import Nature from './viz/Nature'

import ChartTitle from './vizlib/ChartTitle'
import Years from './viz/Years/Chart'
import Phase from './viz/Phase/Bar'
import { Damage, Matrix } from './viz/DamageMatrix'
import FatalityHist from './viz/FatalityHist'
import FatalityAvgs from './viz/FatalityAvgs'
import Force from './viz/Classification/Force'
import OperatorByYear from './viz/OperatorByYear'
import Maker from './viz/Makers'
import PlaneAge from './viz/PlaneAge'
import CrashesHeatmap from './viz/CrashesHeatmap'

import 'mapbox-gl/dist/mapbox-gl.css'

const render = (component, selector) =>
  ReactDOM.render(component, document.querySelector(selector))

const App = () => (
  <div>
    <div>
      <ChartTitle
        title="Crashes and Fatalities between 1919-2019"
        subtitle="Mouseover to see details"
      />
      <Years stage={5} />
    </div>
    <div>
      <ChartTitle
        title="Which flight phases are the most dangerous?"
        subtitle="Mouseover to see details"
      />
      <Phase stage={0} />
    </div>
    <Damage />
    <Matrix />
    <FatalityHist />
    <FatalityAvgs />
    <Force />
    <OperatorByYear />
    <Maker />
    <PlaneAge />
    <CrashesHeatmap />
  </div>
)

render(<App />, '#static')

// render(<Years />, '#viz-years')

// render(<Phase />, '#viz-phase')

// render(<Damage />, '#viz-damage-fate')
// render(<Matrix />, '#viz-damage-matrix')

// render(<FatalityHist />, '#viz-fat-hist')

// render(<Nature />, '#viz-nature')

// render(<OperatorByYear />, '#viz-operator-by-year')

// render(<Force />, '#viz-classifications-force')

// render(<Maker />, '#viz-maker')

// render(<PlaneAge />, '#viz-plane-age')

// render(<FatalityAvgs />, '#viz-fat-avg')

// render(<CrashesHeatmap />, '#map-crashes-heatmap')

// render(<DepartureArcs />, '#map-departure-arcs')
