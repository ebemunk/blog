import React from 'react'
import classnames from 'classnames'

import style from './Button.css'

export default function Button(props) {
  const { active, ...rest } = props
  return (
    <a
      {...rest}
      className={classnames(props.className, style.button, {
        [style.active]: active,
      })}
    />
  )
}
