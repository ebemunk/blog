import React from 'react'
import classnames from 'classnames'

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
  const wrapStyle = {
    ...params.style,
    ...(isShown ? undefined : { width: '0' }),
  }
  return (
    <div
      className={classnames(style.overlay, { [style.hidden]: !isShown })}
      style={wrapStyle}
    >
      <div className={style.close} onClick={props.closeOverlay}>
        <span>>></span>
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
