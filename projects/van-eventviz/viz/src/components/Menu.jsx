import React from 'react'

import Button from './Button'

import style from './Menu.css'

export function Menu(props) {
  const { openOverlay } = props
  return (
    <div className={style.menu}>
      <Button onClick={() => openOverlay('filters')}>- Filters</Button>
      <Button onClick={() => openOverlay('list')}>- List</Button>
    </div>
  )
}

import { connect } from 'react-redux'

export default connect(null, {
  openOverlay: name => ({
    type: 'OPEN_OVERLAY',
    payload: name,
  }),
})(Menu)
