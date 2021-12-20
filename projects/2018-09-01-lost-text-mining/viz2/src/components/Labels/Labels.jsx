import React from 'react'

import css from './Labels.css'

const Labels = ({ y0Label, y1Label, xLabel, x1Label, children }) => (
  <div className={css.labels}>
    <div className={css.xLabelWrap}>
      <span className={css.xLabel}>{x1Label}</span>
    </div>
    <div className={css.yLabels}>
      <div className={css.yLabelWrap}>
        <span className={css.rotatedLabel}>{y0Label}</span>
      </div>
      {children}
      <div className={css.yLabelWrap}>
        <span className={css.rotatedLabel}>{y1Label}</span>
      </div>
    </div>
    <div className={css.xLabelWrap}>
      <span className={css.xLabel}>{xLabel}</span>
    </div>
  </div>
)

export default Labels
