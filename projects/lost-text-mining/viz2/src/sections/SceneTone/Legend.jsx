import React from 'react'
import classnames from 'classnames'

import toneScales from './toneScales'

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
          {['anger', 'fear', 'joy', 'sadness'].map(tone => (
            <div className={css.tone} key={tone} onClick={() => toggle(tone)}>
              <div
                className={classnames(css.box, {
                  [css.selected]: selection[tone],
                })}
                style={{
                  backgroundColor: selection[tone]
                    ? toneScales[tone](1)
                    : 'transparent',
                  borderColor: toneScales[tone](1),
                }}
              />
              <div className={css.key}>{tone}</div>
            </div>
          ))}
        </div>
        <div className={css.category}>
          {['analytical', 'confident', 'tentative'].map(tone => (
            <div className={css.tone} key={tone} onClick={() => toggle(tone)}>
              <div
                className={classnames(css.box, {
                  [css.selected]: selection[tone],
                })}
                style={{
                  backgroundColor: selection[tone]
                    ? toneScales[tone](1)
                    : 'transparent',
                  borderColor: toneScales[tone](1),
                }}
              />
              <div className={css.key}>{tone}</div>
            </div>
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
