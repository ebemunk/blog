import React from 'react'

import ToneRect from './ToneRect'

import css from './Season.css'

export default function Episode({ scale, episode, start, total }) {
  const x = scale(start)
  return (
    <g key={`${episode.season}-${episode.episode}`}>
      <rect
        x={x}
        y={0}
        height={25}
        width={scale(total)}
        className={css.episode}
      />
      <text x={x} y={25} dx="2px" dy={16} className={css.episodeLabel}>
        {episode.episode}
      </text>
      <line x1={x} x2={x} y1={25} y2={30} className={css.episodeLine} />
      <g transform={`translate(${x}, 0)`}>
        <ToneRect scenes={episode.scenes} scale={scale} />
      </g>
    </g>
  )
}
