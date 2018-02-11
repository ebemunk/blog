import React from 'react'

import Map from './components/Map'
import Calendar from './components/Calendar'
import Tags from './components/Tags'

import style from './App.css'

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={style.wrap}>
          <div className={style.map}>
            <Map />
          </div>
          <div className={style.side}>
            <Calendar />
            <Tags />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

// icons
//https://mapicons.mapsmarker.com/
