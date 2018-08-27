import React from 'react'
import classnames from 'classnames'
import * as d3 from 'd3'

import css from './Season.css'

export default function Season({ data, season }) {
  const total = data.reduce(
    (tot, ep) =>
      tot + ep.flashes.reduce((subtotal, fb) => subtotal + fb.chars, 0),
    0,
  )
  const scale = d3
    .scaleLinear()
    .domain([0, total])
    .range([0, 900])

  let x = 0
  let acc = 0
  return data.map(episode => {
    const eptotal = episode.flashes.reduce((tot, ep) => tot + ep.chars, 0)
    const r = (
      <g key={`${episode.season}-${episode.episode}`}>
        <rect
          x={scale(acc)}
          y={0}
          height={25}
          width={scale(eptotal)}
          className={css.episode}
        />
        <text
          x={scale(acc)}
          y={25}
          dx="2px"
          dy="1rem"
          className={css.episodeLabel}
        >
          E{episode.episode}
        </text>
        <line
          x1={scale(acc)}
          x2={scale(acc)}
          y1={25}
          y2={30}
          className={css.episodeLine}
        />
        {episode.flashes.map((ep, i) => {
          const ret = (
            <rect
              x={scale(x)}
              y={0}
              height={25}
              width={scale(ep.chars)}
              key={`${episode.season}-${episode.episode}-${i}`}
              className={classnames(css.rect, {
                [css.flashback]: ep.flashback,
                [css.flashsideways]: ep.flashsideways,
                [css.flashforward]: ep.flashforward,
                [css.normal]:
                  !ep.flashback && !ep.flashsideways && !ep.flashforward,
              })}
            />
          )
          x += ep.chars
          return ret
        })}
      </g>
    )
    acc += eptotal
    return r
  })
}
