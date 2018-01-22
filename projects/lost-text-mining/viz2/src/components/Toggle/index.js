import React from 'react'
import classnames from 'classnames'

import style from './Toggle.css'

export default function Toggle({ onClick, on, children, className }) {
  const char = on ? '√' : 'x'
  return (
    <button
      children={`${children}: ${char}`}
      onClick={onClick}
      className={classnames('button', style.button, className, {
        active: on,
      })}
    />
  )
}
