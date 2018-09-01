import React from 'react'

import EpisodeRangeSelector from 'components/EpisodeRangeSelector'
import BarViz from 'viz/BarViz'

export default function EpisodeReadingLevel({ data }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
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
