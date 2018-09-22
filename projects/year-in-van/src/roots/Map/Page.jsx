import React from 'react'

import { BarChart } from 'vizlib'

import Legend from './Legend'

import css from './Page.css'

const Text = ({ text, progress }) => (
  <div className={css.textWrap}>
    <div className={css.text}>{text}</div>
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
    <BarChart
      data={heatmaps.map(hm => ({
        key: hm.label,
        value: hm.data.length,
      }))}
      width={75}
      height={150}
      style={{
        position: 'absolute',
        bottom: '30px',
        left: '10%',
      }}
    />
  </React.Fragment>
)

import { pure } from 'recompose'

export default pure(Page)
