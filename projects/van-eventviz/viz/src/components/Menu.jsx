import React from 'react'

import BottomNavigation, {
  BottomNavigationAction,
} from 'material-ui/BottomNavigation'
import Icon from 'material-ui/Icon'
import { Filter } from '../img'

import style from './Menu.css'

export function Menu(props) {
  const { openOverlay, closeOverlay, open } = props
  return (
    <BottomNavigation
      value={open}
      onChange={(e, val) => (val === open ? closeOverlay() : openOverlay(val))}
      showLabels
      className={style.menu}
    >
      <BottomNavigationAction
        label="Filters"
        value="filters"
        icon={<Icon children="filter_list" />}
      />
      <BottomNavigationAction
        label="List"
        value="list"
        icon={<Icon children="list" />}
      />
    </BottomNavigation>
  )
}

import { connect } from 'react-redux'

export default connect(
  state => ({
    open: state.overlay.open,
  }),
  {
    openOverlay: name => ({
      type: 'OPEN_OVERLAY',
      payload: name,
    }),
    closeOverlay: () => ({
      type: 'CLOSE_OVERLAY',
    }),
  },
)(Menu)
