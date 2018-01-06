import React from 'react'

import CharWordHistogram from './'

import style from './Labels.css'

export default function Labels(props) {
  return (
    <div>
      <div className={style.labels}>
        <div className={style.yLabelWrap}>
          <span className={style.rotatedLabel}>Characters</span>
        </div>
        <div><CharWordHistogram /></div>
        <div className={style.yLabelWrap}>
          <span className={style.rotatedLabel}>Percentage</span>
        </div>
        <div className={style.legend}>
          <div className={style.legendItem}>
            <div className={style.charLegend}></div> Cumulative Percentage of Characters
          </div>
          <div className={style.legendItem}>
            <div className={style.wordLegend}></div> Cumulative Percentage of Words
          </div>
        </div>
      </div>
      <div className={style.xLabelWrap}>
        <span className={style.centeredLabel}>Words</span>
      </div>
    </div>
  )
}
