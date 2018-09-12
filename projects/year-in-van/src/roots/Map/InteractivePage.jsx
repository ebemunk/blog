import React from 'react'
import classnames from 'classnames'
import { compose, withState } from 'recompose'

import css from './Page.css'

import cssx from './Legend.css'
import { Add, Remove } from 'components/icons'

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
        <span>{label}</span>
        <span style={{ marginLeft: '2px' }}>({data.length})</span>
        <Remove
          className={cssx.remove}
          onClick={e => {
            e.stopPropagation()
            rmCustom(label)
          }}
        />
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
      <span>name contains:</span>{' '}
      <input
        placeholder="Type something + Enter"
        className={cssx.add}
        value={input}
        onChange={evt => setInput(evt.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            if (!input.length) return
            setCustom(input.toLowerCase())
            setInput('')
          }
        }}
      />
      <Add
        className={cssx.addBtn}
        onClick={() => {
          if (!input.length) return
          setCustom(input.toLowerCase())
          setInput('')
        }}
      />
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
