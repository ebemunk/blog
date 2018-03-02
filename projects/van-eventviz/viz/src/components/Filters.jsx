import React from 'react'
import classnames from 'classnames'
import Icon from 'material-ui/Icon'

import Calendar from './Calendar'
import Tags from './Tags'

import style from './Filters.css'

export function Filters(props) {
  return (
    <div className={style.filters}>
      <Calendar />
      <Tags />
    </div>
  )
}

const closeableOverlay = params => Comp => props => {
  const isShown = props.open === params.name
  if (!isShown) {
    return null
  }
  const wrapStyle = {
    ...params.style,
  }
  return (
    <div className={classnames(style.overlay)} style={wrapStyle}>
      <div className={style.close} onClick={props.closeOverlay}>
        <Icon children="keyboard_arrow_right" />
      </div>
      <Comp {...props} />
    </div>
  )
}

import { compose } from 'recompose'
import { connect } from 'react-redux'
export default compose(
  connect(state => ({ open: state.overlay.open }), {
    closeOverlay: () => ({
      type: 'CLOSE_OVERLAY',
    }),
  }),
  closeableOverlay({
    style: {
      width: '25rem',
      right: '0',
    },
    name: 'filters',
  }),
)(Filters)
