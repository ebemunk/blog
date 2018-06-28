import React from 'react'

import Labels from 'components/Labels'
import CharWordHistogram from './CharWordHistogram'

import css from './Legend.css'

export default function Legend({ data }) {
  return (
    <React.Fragment>
      <div className={css.legend}>
        <div className={css.legendItem}>
          <div className={css.charLegend} />
          <span>
            <abbr title="Cumulative Percentage">Cum. %</abbr> of Characters
          </span>
        </div>
        <div className={css.legendItem}>
          <div className={css.wordLegend} />
          <span>
            <abbr title="Cumulative Percentage">Cum. %</abbr> of Words
          </span>
        </div>
      </div>
      <Labels
        xLabel="Number of Words"
        y0Label="Number of Characters"
        y1Label="Percentage"
      >
        <CharWordHistogram data={data} />
      </Labels>
    </React.Fragment>
  )
}
