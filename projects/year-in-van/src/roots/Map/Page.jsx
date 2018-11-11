import React from 'react'
import { max, format } from 'd3'

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
  noBarChart = false,
}) => (
  <React.Fragment>
    <Text text={children} progress={progress} />
    <Legend keys={heatmaps} onClick={setFocus} focus={focus} />
    {!noBarChart && (
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
          fill: heatmaps.find(e => e.label === hm.key).color,
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

export default pure(Page)
