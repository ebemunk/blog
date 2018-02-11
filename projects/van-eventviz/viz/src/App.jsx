import React from 'react'

import Map from './components/Map'
import Filters from './components/Filters'
import Menu from './components/Menu'

import style from './App.css'

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={style.wrap}>
          <div className={style.map}>
            <Map />
          </div>
          <Menu />
          <Filters />
        </div>
      </React.Fragment>
    )
  }
}

// icons
//https://mapicons.mapsmarker.com/
