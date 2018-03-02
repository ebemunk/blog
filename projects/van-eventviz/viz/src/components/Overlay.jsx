import React from 'react'
import classnames from 'classnames'
import Icon from 'material-ui/Icon'

import styles from './Overlay.css'

export function Overlay(props) {
  const { open, name, children, style, closeOverlay } = props

  if (open !== name) {
    return null
  }

  return (
    <div className={classnames(styles.overlay)} style={style}>
      <div className={styles.close} onClick={closeOverlay}>
        <Icon children="keyboard_arrow_right" />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

import { connect } from 'react-redux'

export default connect(
  state => ({
    open: state.overlay.open,
  }),
  {
    closeOverlay: () => ({
      type: 'CLOSE_OVERLAY',
    }),
  },
)(Overlay)
