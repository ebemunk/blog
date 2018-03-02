import React from 'react'

import Title from './components/Title'
import Map from './components/Map'
import Menu from './components/Menu'
import Filters from './components/Filters'
import List from './components/List'

import { todayRange } from './date'

import style from './App.css'

export class App extends React.Component {
  componentWillMount() {
    this.props.selectDates(todayRange(new Date()), 'today')
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <Map />
        <Menu />
        <Filters />
        <List />
      </React.Fragment>
    )
  }
}

import { connect } from 'react-redux'
import { selectDates } from './actions'

export default connect(null, {
  selectDates,
})(App)

// icons
//https://mapicons.mapsmarker.com/
