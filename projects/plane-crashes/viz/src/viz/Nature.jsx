import React from 'react'

import Bar from '../vizlib/Simple/Bar'

import data from '../data/nature.csv'

const Nature = ({}) => (
  <div>
    <Bar
      data={data.map(d => [d.nature, +d.count])}
      xTitle="Nature"
      yTitle="Count"
    />
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Nature)
