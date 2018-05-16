import React from 'react'

import style from './Tooltip.css'

export function Tooltip(props) {
  const { tooltip } = props

  if (!tooltip.show) return null

  const { left, top } = document
    .querySelector(`#${tooltip.target}`)
    .getBoundingClientRect()

  const { left: parentLeft, top: parentTop } = document
    .querySelector('#dimensions-viz')
    .getBoundingClientRect()

  return (
    <div
      className={style.tooltip}
      style={{
        top: top - parentTop,
        left: left - parentLeft,
        backgroundColor: 'red',
        transition: 'all 2s',
      }}
    >
      Derpality
    </div>
  )
}

import { connect } from 'react-redux'

export default connect(state => ({
  tooltip: state.personalityTooltip,
}))(Tooltip)
