import React from 'react'
import classnames from 'classnames'

import LegendKey from './LegendKey'

import css from './Legend.css'

export function Legend({ selection, toggle, toggleAll, toggleNone }) {
  return (
    <div>
      <div className={css.buttons}>
        <button
          className={classnames('button', css.button)}
          onClick={() => toggleAll()}
        >
          All
        </button>
        <button
          className={classnames('button', css.button)}
          onClick={() => toggleNone()}
        >
          None
        </button>
      </div>
      <div className={css.legend}>
        <div className={css.category}>
          <div className={css.catLabel}>Emotional Tone</div>
          {['anger', 'fear', 'joy', 'sadness'].map(tone => (
            <LegendKey
              tone={tone}
              selection={selection}
              tol={toggle}
              key={tone}
            />
          ))}
        </div>
        <div className={css.category}>
          <div className={css.catLabel}>Language Tone</div>
          {['analytical', 'confident', 'tentative'].map(tone => (
            <LegendKey
              tone={tone}
              selection={selection}
              tol={toggle}
              key={tone}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

import { connect } from 'react-redux'
import { toggle, toggleAll, toggleNone } from 'store/toneSelection'

export default connect(
  //
  state => ({
    selection: state.toneSelection,
  }),
  {
    toggle,
    toggleAll,
    toggleNone,
  },
)(Legend)
