import React from 'react'
import classnames from 'classnames'

import css from './ButtonGroup.css'

export default function ButtonGroup({ options, onChange, selected }) {
  return (
    <div className={css.wrapper}>
      {options.map(opt => (
        <button
          children={opt.name}
          onClick={() => onChange(opt.value)}
          className={classnames('button', css.groupedButton, {
            active: opt.value === selected,
          })}
          key={opt.value}
        />
      ))}
    </div>
  )
}
