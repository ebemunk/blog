export const getSceneTone = () => dispatch => {
  const sceneTone = require('data/sceneTone.json')

  dispatch({
    type: 'data/sceneTone',
    payload: sceneTone.map(scenes => ({
      season: scenes.s,
      episode: scenes.e,
      scenes: scenes.c.map(scene => ({
        start: scene.s,
        length: scene.l,
        tones: scene.t.map(tone => ({
          score: tone.s,
          tone_id: tone.i,
          name: 'derp',
        })),
      })),
    })),
  })
}

import { reducerFromObj } from '../util'

export const reducer = reducerFromObj([], {
  'data/sceneTone': (state, action) => action.payload,
})

import * as R from 'ramda'

export const sceneTone = R.path(['sceneTone'])
