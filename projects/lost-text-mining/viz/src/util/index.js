import _ from 'lodash'

export Metric from './Metric'

export const pad2 = _.partialRight(_.padStart, 2, 0)

export const episodeKey = d => `S${pad2(d.season)}-E${pad2(d.episode)}`
