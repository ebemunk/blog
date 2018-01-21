import React from 'react'
import classnames from 'classnames'

import style from './ButtonGroup.css'

export default function ButtonGroup({ options, onChange, selected }) {
  return (
    <div className={style.wrapper}>
      {options.map(opt => (
        <button
          children={opt.name}
          onClick={() => onChange(opt.value)}
          className={classnames('button', style.button, {
            active: opt.value === selected,
          })}
          key={opt.value}
        />
      ))}
    </div>
  )
}
