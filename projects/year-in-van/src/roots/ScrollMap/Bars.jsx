import React from 'react'
import { max, format } from 'd3'
import { BarChart } from 'vizlib'

import css from './Bars.css'

const Bars = ({ heatmaps }) => (
  <BarChart
    className={css.whiteAxis}
    data={heatmaps.map(hm => ({
      key: hm.label,
      value: hm.data.length,
    }))}
    width={100}
    height={100}
    style={{
      position: 'absolute',
      right: '1rem',
      // top: '4rem',
      bottom: '2rem',
      pointerEvents: 'none',
      transform: 'translate3d(0,0,0)',
    }}
    padding={{
      left: 25,
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
)

export default Bars
