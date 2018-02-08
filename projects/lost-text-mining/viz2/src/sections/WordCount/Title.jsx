import React from 'react'

import style from './Title.css'

export default function Title({ dataType }) {
  return (
    <div className={style.title}>
      <div className={style.wrap}>
        <span className={style.block}>
          {
            {
              total: 'Total Words',
              uniq: 'Unique Words',
              density: 'Unique Word Density',
            }[dataType]
          }
        </span>
        <small className={style.block}>
          {
            {
              total: 'Count of all words',
              uniq: 'Number of unique words',
              density: 'Percentage of unique words (unique / total)',
            }[dataType]
          }
        </small>
      </div>
    </div>
  )
}
