import React from 'react'
import classnames from 'classnames'

import css from './Legend.css'

const Legend = ({ keys, onClick, selection }) => (
  <div className={css.legend}>
    {keys.map(({ label, color }) => (
      <div className={css.label} key={label} onClick={() => onClick(label)}>
        <div
          className={classnames(css.circle, {
            [css.selected]:
              typeof selection[label] === 'undefined' ? true : selection[label],
          })}
          style={{
            backgroundColor: color,
          }}
        />
        {label}
      </div>
    ))}
  </div>
)

export default Legend
