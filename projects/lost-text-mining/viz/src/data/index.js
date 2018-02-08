import _ from 'lodash'

import totalLinesRaw from './total-lines.json'

import {
	episodeKey,
} from '../util'

// import seasonEpisodeRaw from './season-episode.json'
// export const seasonEpisodes = seasonEpisodeRaw.rows
// .map((row, i) => ({
// 	...row,
// 	key: episodeKey(row),
// 	date: new Date(0, 0, i).getTime(),
// 	i,
// }))
export seasonEpisodes from './seasonEpisodes.json'

// console.log(seasonEpisodes, seasonEpisodesx);
// import R from 'ramda'
// // console.log(_.difference(seasonEpisodes.map()));
// const keys = R.map(R.path(['key']))
// const diff = R.symmetricDifference(keys(seasonEpisodes), keys(seasonEpisodesx))
// console.log('diff', diff);

export const totalLines = totalLinesRaw.rows

export charCooccurrence from './char-cooccurrence'

export wordsChars from './words-chars'
