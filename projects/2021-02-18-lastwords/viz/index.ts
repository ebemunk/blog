import { firstNames } from './firstNames'
import { mostCommon } from './mostCommon'
import { personSentiment } from './personSentiment'
import { statementLengths } from './statementLength'
import { trigrams } from './trigrams'
import { statementSentiment } from './statementSentiment'
import { lastStatementRatio } from './lastStatementRatio'
import { stays } from './stays'
import { numStays } from './numStays'
import { lastRide } from './lastRide'
import { executionTotals } from './executionTotals'
import { exonerations } from './exonerations'
import './index.css'

import { selectAll } from 'd3-selection'

export default function init() {
  executionTotals()
  lastStatementRatio()
  mostCommon()
  statementLengths()
  trigrams()
  statementSentiment()
  personSentiment()
  firstNames()
  numStays()
  stays()
  exonerations()
  lastRide()

  selectAll('.article a').attr('target', '_blank')
}
