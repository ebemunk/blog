import React from 'react'

import Legend from './Legend'

const Text = ({ text, progress }) => (
  <div
    style={{
      position: 'fixed',
      bottom: (progress / 100) * window.innerHeight,
      width: '30rem',
      fontSize: '1rem',
      border: '3px solid red',
    }}
  >
    {text}
  </div>
)

const Page = ({
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

export default pure(Page)
