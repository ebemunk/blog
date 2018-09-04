import React from 'react'
import classnames from 'classnames'

import css from './Legend.css'

const Legend = props => (
  <div className={css.legend}>
    {props.keys.map(([key, color]) => (
      <div
        className={css.key}
        key={key}
        onClick={() => props.onClick([key, color])}
      >
        <div
          className={classnames(css.circle, {
            [css.selected]: props.selected[0] === key,
          })}
          style={{
            backgroundColor: color,
          }}
        />
        {key}
      </div>
    ))}
  </div>
)

export default Legend
