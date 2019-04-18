import React from 'react'
import ReactDOM from 'react-dom'

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
      <ChartTitle title="Crashes and Fatalities between 1919-2019" />
      <Years stage={5} />
    </div>
    <div>
      <ChartTitle title="Which flight phases are the most dangerous?" />
      <Phase stage={0} />
    </div>
    <Damage />
    <Matrix />
    <FatalityHist />
    <FatalityAvgs />
    <Force subtitle="Radius shows number of links, link opacity shows commonality." />
    <OperatorByYear />
    <Maker noInteraction />
    <PlaneAge />
    <CrashesHeatmap
      zoom={1.25}
      subtitle="Heatmap of crashes where geodata is available. Locations are approximate. Also drawn is the Bermuda Triangle."
    />
  </div>
)

render(<App />, '#static')
