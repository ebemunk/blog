import _ from 'lodash'

import seasonEpisodeRaw from './season-episode.json'

const pad2 = _.partialRight(_.padStart, 2, 0)

export const seasonEpisodes = seasonEpisodeRaw.rows.map(row => ({
  ...row,
  key: `S${pad2(row.season)}-E${pad2(row.episode)}`
}))
