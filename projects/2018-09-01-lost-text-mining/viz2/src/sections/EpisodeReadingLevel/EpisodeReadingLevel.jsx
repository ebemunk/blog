import React from 'react'

import EpisodeRangeSelector from 'components/EpisodeRangeSelector'
import BarViz from 'viz/BarViz'

import css from './EpisodeReadingLevel.css'

export default function EpisodeReadingLevel({ data }) {
  return (
    <div className={css.responsive}>
      <EpisodeRangeSelector width={900} />
      <BarViz
        data={data.map(d => ({
          key: `${d.season}-${d.episode}`,
          value: +d.score,
        }))}
        xLabel="Episodes"
        y0Label="Reading Level (Grade)"
      />
    </div>
  )
}
