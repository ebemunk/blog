import React from 'react'

import Bar from '../vizlib/Simple/Bar'

import data from '../data/phase.csv'

const Phase = ({}) => (
  <div>
    <Bar
      data={data.map(d => [d.phase, +d.count])}
      xTitle="Phase"
      yTitle="Count"
    />
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Phase)
