import React from 'react'

import { EpisodeRangeSelector } from '../components'

const withEpSelector = width => Component => props => (
  <React.Fragment>
    <EpisodeRangeSelector width={width} />
    <Component {...props} />
  </React.Fragment>
)
export default withEpSelector
