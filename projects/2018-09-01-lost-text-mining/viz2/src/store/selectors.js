import { createSelector } from 'reselect'
import * as R from 'ramda'

import { selectorByEpisode } from './util'

export const episodes = R.path(['episodes'])
export const episodeSelection = R.path(['episodeSelection'])

export const selectedEpisodeKeys = createSelector(
  [selectorByEpisode(episodes)],
  episodes => episodes.map(({ key }) => key),
)
