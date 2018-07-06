import React from 'react'
import classnames from 'classnames'
import * as d3 from 'd3'

import css from './Season.css'

export default function Season({ data, season }) {
  // const total = data.map(ep => ep.flashbacks.map(({ chars }) => chars))
  const total = data.reduce(
    (tot, ep) =>
      tot + ep.flashbacks.reduce((subtotal, fb) => subtotal + fb.chars, 0),
    0,
  )
  console.log('season', season, total)

  const scale = d3
    .scaleLinear()
    .domain([0, total])
    .range([0, 700])

  let x = 0
  return data.map(episode => {
    return (
      <React.Fragment>
        <rect
          x={0}
          y={0}
          height={25}
          width={scale(total)}
          className={css.episode}
        />
        {episode.flashbacks.map(ep => {
          const ret = (
            <rect
              x={scale(x)}
              y={0}
              height={25}
              width={scale(ep.chars)}
              className={classnames(css.rect, {
                [css.flashback]: ep.flashback,
                [css.flashsideways]: ep.flashsideways,
                [css.normal]: !ep.flashback && !ep.flashsideways,
              })}
            />
          )
          x += ep.chars
          return ret
        })}
      </React.Fragment>
    )
  })
}
