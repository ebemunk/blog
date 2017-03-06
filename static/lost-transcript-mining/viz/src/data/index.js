import _ from 'lodash'

import seasonEpisodeRaw from './season-episode.json'
import totalLinesRaw from './total-lines.json'

const pad2 = _.partialRight(_.padStart, 2, 0)

export const seasonEpisodes = seasonEpisodeRaw.rows.map((row, i) => ({
  ...row,
  key: `S${pad2(row.season)}-E${pad2(row.episode)}`,
  date: new Date(0, 0, i)
}))

export const totalLines = totalLinesRaw.rows
