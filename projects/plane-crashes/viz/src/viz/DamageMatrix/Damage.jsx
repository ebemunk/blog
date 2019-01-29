import React from 'react'

import damage from '../../data/damage.csv'
import fate from '../../data/fate.csv'

import Pie from '../../vizlib/Simple/Pie'

const Damage = ({}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Pie data={damage.map(d => [d.damage, +d.count])} />
    <div style={{ flexBasis: '4rem' }} />
    <Pie data={fate.map(d => [d.fate, +d.count])} />
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Damage)
