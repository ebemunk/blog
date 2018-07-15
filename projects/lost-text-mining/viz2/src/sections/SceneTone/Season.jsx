import React from 'react'
import classnames from 'classnames'
import * as d3 from 'd3'
import * as R from 'ramda'

import Episode from './Episode'

import css from './Season.css'

export default function Season({ data, season }) {
  const total = data.reduce(
    (tot, episode) =>
      tot +
      episode.scenes.reduce((subtotal, scene) => subtotal + scene.length, 0),
    0,
  )
  let acc = 0

  return data.sort((a, b) => a.episode - b.episode).map(episode => {
    const eptotal = episode.scenes.reduce((tot, scene) => tot + scene.length, 0)
    const r = (
      <Episode
        key={`${episode.season}-${episode.episode}`}
        scale={d3
          .scaleLinear()
          .domain([0, total])
          .range([0, 900])}
        start={acc}
        episode={episode}
        total={eptotal}
      />
    )
    acc += eptotal
    return r
  })
}
