import _ from 'lodash'

import seasonEpisodeRaw from './season-episode.json'
import totalLinesRaw from './total-lines.json'

import {
  episodeKey,
} from '../util'

export const seasonEpisodes = seasonEpisodeRaw.rows
.map((row, i) => ({
  ...row,
  key: episodeKey(row),
  date: new Date(0, 0, i).getTime(),
  i,
}))

export const totalLines = totalLinesRaw.rows

export charCooccurrence from './char-cooccurrence'

export wordsChars from './words-chars'
