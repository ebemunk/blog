import React from 'react'

import damage from '../../data/damage.csv'
import fate from '../../data/fate.csv'

import Pie from './Pie'

const Damage = ({}) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div>
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <strong>What's the damage on the airplane after a crash?</strong>
        <div style={{ fontSize: '0.8rem' }}>
          For crashes where data is available
        </div>
      </div>
      <Pie data={damage.map(d => [d.damage, +d.count])} />
    </div>

    <div style={{ flexBasis: '4rem' }} />

    <div>
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <strong>What's the fate of the airplane after a crash?</strong>
        <div style={{ fontSize: '0.8rem' }}>
          For crashes where data is available
        </div>
      </div>
      <Pie data={fate.map(d => [d.fate, +d.count])} />
    </div>
  </div>
)

import { hot } from 'react-hot-loader'

export default hot(module)(Damage)
