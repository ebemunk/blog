import React from 'react'
import classnames from 'classnames'

import Overlay from './Overlay'
import Calendar from './Calendar'
import Tags from './Tags'

import style from './Filters.css'

export default function Filters(props) {
  return (
    <Overlay name="filters" style={{ width: '25rem', right: '0' }}>
      <Calendar />
      <Tags />
    </Overlay>
  )
}
