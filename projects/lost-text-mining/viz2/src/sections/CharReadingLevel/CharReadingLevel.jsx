import React from 'react'

import HorizontalBarChart from 'components/HorizontalBarChart'
import Labels from 'components/Labels'
import { toTitleCase } from 'utils'

import css from './CharReadingLevel.css'

export default function CharReadingLevel({ data }) {
  return (
    <div className={css.responsive}>
      <Labels y0Label="Character" x1Label="Reading Level (Grade)">
        <HorizontalBarChart
          data={data
            .slice()
            .sort((a, b) => b.score - a.score)
            .map(d => ({
              key: d.char_name,
              value: d.score,
            }))}
          width={500}
          height={20}
          padding={{
            top: 20,
            left: 75,
            right: 15,
            bottom: 10,
          }}
          bandAxisProps={{
            tickFormat: toTitleCase,
          }}
          linearAxisProps={{
            tickFormat: x => (Number.isInteger(x) ? x : ''),
          }}
        />
      </Labels>
    </div>
  )
}
