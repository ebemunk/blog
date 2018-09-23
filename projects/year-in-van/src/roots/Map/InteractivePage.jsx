import React from 'react'
import classnames from 'classnames'
import { compose, withState } from 'recompose'
import { max, format } from 'd3'
import { get } from 'lodash'

import { BarChart } from 'vizlib'

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
    {heatmaps.length > 0 && (
      <BarChart
        className={css.whiteAxis}
        data={heatmaps.map(hm => ({
          key: hm.label,
          value: hm.data.length,
        }))}
        width={50}
        height={100}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '-50px',
          pointerEvents: 'none',
        }}
        padding={{
          left: 20,
          right: 0,
          bottom: 0,
          top: 10,
        }}
        barStyle={hm => ({
          fill: (heatmaps.find(e => e.label === hm.key) || {}).color,
        })}
        linearAxisProps={{
          tickValues: [max(heatmaps.map(hm => hm.data.length))],
          tickSize: 3,
          tickFormat: format('.2~s'),
          style: {
            fontSize: '8px',
          },
        }}
      />
    )}
  </React.Fragment>
)

import { pure } from 'recompose'

export default pure(InteractivePage)
