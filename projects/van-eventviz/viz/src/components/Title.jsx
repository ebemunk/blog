import React from 'react'

import { format } from 'date-fns'

import style from './Title.css'

export function Title(props) {
  const { to, from, preset } = props
  return (
    <div className={style.title}>
      <span className={style.slogan}>Go Do Some Shit!</span>
      <span className={style.dates}>
        {preset && preset}
        {!preset &&
          from &&
          to &&
          `${format(from, 'MMM DD@h:mma')} - ${format(to, 'MMM DD@h:mma')}`}
        {!preset && !from && !to && 'pick dates lol'}
      </span>
    </div>
  )
}

import { connect } from 'react-redux'

export default connect(state => ({
  ...['from', 'to'].reduce(
    (o, cur) => ({
      ...o,
      [cur]: state.datePicker[cur]
        ? new Date(state.datePicker[cur])
        : undefined,
    }),
    {},
  ),
  preset: state.datePicker.preset,
}))(Title)
