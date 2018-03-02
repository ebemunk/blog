import React from 'react'
import classnames from 'classnames'

import Overlay from './Overlay'
import { filteredEvents } from '../selectors'

import style from './List.css'

export function List(props) {
  return (
    <Overlay name="list" style={{ width: '25rem', right: '0' }}>
      <div>yo</div>
    </Overlay>
  )
}

import { compose } from 'recompose'
import { connect } from 'react-redux'

export default compose(
  connect(state => ({
    events: filteredEvents(state),
  })),
)(List)
