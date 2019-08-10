import React from 'react'

import damage from '../../data/damage.csv'
import fate from '../../data/fate.csv'

import ChartTitle from '../../vizlib/ChartTitle'

import Pie from './Pie'

const Damage = ({}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div>
      <ChartTitle
        title="What's the damage on the airplane after a crash?"
        style={{ textAlign: 'center', marginBottom: '0.5rem', marginTop: 0 }}
      />
      <Pie data={damage.map(d => [d.damage, +d.count])} />
    </div>

    <div style={{ flexBasis: '4rem' }} />

    <div>
      <ChartTitle
        title="What's the fate of the airplane after a crash?"
        style={{ textAlign: 'center', marginBottom: '0.5rem', marginTop: 0 }}
      />
      <Pie data={fate.map(d => [d.fate, +d.count])} />
    </div>
  </div>
)

import { hot } from 'react-hot-loader'

export default hot(module)(Damage)
