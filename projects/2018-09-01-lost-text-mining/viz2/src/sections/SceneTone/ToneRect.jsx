import React from 'react'
import classnames from 'classnames'

import toneScale from './toneScales'

import css from './Season.css'

export function ToneRect({ scenes, scale, selection }) {
  return scenes.map((scene, i) => {
    const colors = scene.tones
      .filter(tone => selection[tone.tone_id])
      .map(tone => {
        return toneScale[tone.tone_id](tone.score)
      })
      .sort((a, b) => a < b)
    const ret = colors.map(color => (
      <rect
        x={scale(scene.start)}
        y={0}
        height={25}
        width={scale(scene.length)}
        key={`${i}-${color}`}
        className={classnames(css.rect)}
        style={{
          fill: color,
        }}
      />
    ))
    return ret
  })
}

import { connect } from 'react-redux'

export default connect(state => ({
  selection: state.toneSelection,
}))(ToneRect)
