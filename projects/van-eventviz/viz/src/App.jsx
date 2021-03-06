import React from 'react'
import { hot } from 'react-hot-loader'

import Title from './components/Title'
import Map from './components/Map'
import Menu from './components/Menu'
import Filters from './components/Filters'
import ListFilter from './components/ListFilter'

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
        <ListFilter />
      </React.Fragment>
    )
  }
}

import { compose } from 'ramda'
import { connect } from 'react-redux'
import { selectDates } from './actions'

export default compose(
  hot(module),
  connect(null, {
    selectDates,
  }),
)(App)

// icons
//https://mapicons.mapsmarker.com/
