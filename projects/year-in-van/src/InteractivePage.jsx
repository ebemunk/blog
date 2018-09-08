import React from 'react'
import classnames from 'classnames'
import { compose, withState } from 'recompose'

import css from './Page.css'

import cssx from './Legend.css'

const Legend = compose(
  //
  withState('input', 'setInput', ''),
)(({ keys, onClick, focus, setInput, input, setCustom, rmCustom }) => (
  <div className={cssx.legend}>
    {keys.map(({ label, color, data }) => (
      <div className={cssx.label} key={label} onClick={() => onClick(label)}>
        <div
          className={classnames(cssx.circle, {
            [cssx.selected]: focus === null || focus === label,
          })}
          style={{
            backgroundColor: color,
          }}
        />
        {label} {data.length}{' '}
        <button
          className={cssx.remove}
          onClick={e => {
            e.stopPropagation()
            rmCustom(label)
          }}
        >
          x
        </button>
      </div>
    ))}
    <div
      className={classnames(cssx.label, cssx.addLabel)}
      style={{
        flex: '1 0 100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className={cssx.circle}
        style={{ backgroundColor: 'white', flex: '0 0  auto' }}
      />
      <span>name contains:</span>{' '}
      <input
        placeholder="Type something"
        className={cssx.add}
        value={input}
        onChange={evt => setInput(evt.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            setCustom(input)
            setInput('')
          }
        }}
      />
      <button
        className={cssx.addBtn}
        onClick={() => {
          setCustom(input)
          setInput('')
        }}
      >
        +
      </button>
    </div>
  </div>
))

const Text = ({ text, progress }) => (
  <div className={css.textWrap}>
    <div className={css.text}>{text}</div>
  </div>
)

const InteractivePage = ({
  heatmaps,
  progress,
  isOut,
  setFocus,
  focus = null,
  children = '',
  custom,
  setCustom,
  rmCustom,
}) => (
  <React.Fragment>
    <Text text={children} progress={progress} />
    <Legend
      keys={heatmaps}
      onClick={setFocus}
      focus={focus}
      setCustom={setCustom}
      rmCustom={rmCustom}
    />
  </React.Fragment>
)

import { pure } from 'recompose'

export default pure(InteractivePage)
