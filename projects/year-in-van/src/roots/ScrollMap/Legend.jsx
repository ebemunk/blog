import React from 'react'
import classnames from 'classnames'
import { compose, withState } from 'recompose'

import css from './Legend.css'
import { Add, Remove } from 'components/icons'

const Legend = compose(
  //
  withState('input', 'setInput', ''),
)(
  ({
    keys,
    onClick,
    focus,
    setInput,
    input,
    addCustom,
    removeCustom,
    custom,
  }) => (
    <div className={css.legend}>
      {keys.map(({ label, color, data }) => (
        <div className={css.label} key={label} onClick={() => onClick(label)}>
          <div
            className={classnames(css.circle, {
              [css.selected]:
                focus === null || focus === label || focus === undefined,
            })}
            style={{
              backgroundColor: color,
            }}
          />
          <span>{label}</span>
          <span style={{ marginLeft: '2px' }}>({data.length})</span>
          {custom && (
            <Remove
              className={css.remove}
              onClick={e => {
                e.stopPropagation()
                removeCustom(label)
              }}
            />
          )}
        </div>
      ))}
      {custom && (
        <div
          className={classnames(css.label, css.addLabel)}
          style={{
            flex: '1 0 100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span>name contains:</span>{' '}
          <input
            placeholder="Type something + Enter"
            className={css.add}
            value={input}
            onChange={evt => setInput(evt.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                if (!input.length) return
                addCustom(input.toLowerCase())
                setInput('')
              }
            }}
          />
          <Add
            className={css.addBtn}
            onClick={() => {
              if (!input.length) return
              addCustom(input.toLowerCase())
              setInput('')
            }}
          />
        </div>
      )}
    </div>
  ),
)

export default Legend
