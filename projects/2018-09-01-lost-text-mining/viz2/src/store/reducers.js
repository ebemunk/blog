import { combineReducers } from 'redux'

import { episodes, episodeSelection } from '../reducers'
import { reducer as charAppearance } from './charAppearance'
import { reducer as charSelection } from './charSelection'
import { reducer as charWordFrequencies } from './charWordFrequencies'
import { reducer as countsPerEpisode } from './countsPerEpisode'
import { reducer as flashes } from './flashes'
import { reducer as linesPerChar } from './linesPerChar'
import { reducer as personalities } from './personalities'
import { reducer as readingLevel } from './readingLevel'
import { reducer as sceneTone } from './sceneTone'
import { reducer as toneSelection } from './toneSelection'
import { reducer as wordCount } from './wordCount'
import { reducer as wordConnections } from './wordConnections'
import { reducer as charCooccurrence } from './charCooccurrence'

const rootReducer = combineReducers({
  charAppearance,
  charCooccurrence,
  charSelection,
  charWordFrequencies,
  countsPerEpisode,
  episodes,
  episodeSelection,
  flashes,
  linesPerChar,
  personalities,
  readingLevel,
  sceneTone,
  toneSelection,
  wordCount,
  wordConnections,
})

export default rootReducer
