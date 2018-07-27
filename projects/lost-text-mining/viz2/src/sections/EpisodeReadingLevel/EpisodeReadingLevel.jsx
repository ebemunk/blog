import React from 'react'

import BarViz from 'viz/BarViz'

export default function EpisodeReadingLevel({ data }) {
  return (
    <BarViz
      data={data.map(d => ({
        key: `${d.season}-${d.episode}`,
        value: +d.score,
      }))}
      xLabel="Episodes"
      y0Label="Reading Level (Grade)"
    />
  )
}
