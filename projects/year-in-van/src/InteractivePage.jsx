import React from 'react'

import Legend from './Legend'

import css from './Page.css'

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
}) => (
  <React.Fragment>
    <Text text={children} progress={progress} />
    <Legend keys={heatmaps} onClick={setFocus} focus={focus} />
  </React.Fragment>
)

import { pure } from 'recompose'

export default pure(InteractivePage)
