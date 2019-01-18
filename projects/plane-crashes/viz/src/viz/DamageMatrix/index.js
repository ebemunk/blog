import React from 'react'
import { VerticalBarSeries, RadialChart } from 'react-vis'
import { pie } from 'd3-shape'

import Bar from '../../vizlib/Simple/Bar'

import Heatmap from './Heatmap'
import { colors, colors8 } from '../../colors'

import damage from '../../data/damage.csv'

const damageArcs = pie().value(d => d.count)(
  damage.sort((a, b) => a.count - b.count),
)

const Damage = () => (
  <div>
    <RadialChart
      data={damageArcs.map((d, i) => ({
        angle: d.endAngle - d.startAngle,
        label: d.data.damage,
        color: colors8(i),
      }))}
      width={300}
      height={300}
      showLabels
      labelsRadiusMultiplier={0.8}
      colorType="literal"
      innerRadius={120}
      radius={150}
      padAngle={0.05}
    />
    <Bar
      data={damage.map(d => [d.damage, +d.count])}
      width={350}
      height={250}
    />
  </div>
)

import fate from '../../data/fate.csv'

const fateArcs = pie().value(d => d.count)(
  fate.sort((a, b) => a.count - b.count),
)

const Fate = () => (
  <div>
    <RadialChart
      data={fateArcs.map((d, i) => ({
        angle: d.endAngle - d.startAngle,
        label: d.data.fate,
        color: colors8(i),
      }))}
      width={300}
      height={300}
      showLabels
      labelsRadiusMultiplier={0.8}
      colorType="literal"
      innerRadius={120}
      radius={150}
      padAngle={0.05}
    />
    <Bar data={fate.map(d => [d.fate, +d.count])} width={350} height={250} />
  </div>
)

const DamageMatrix = ({}) => (
  <div>
    <Heatmap />
    <Damage />
    <Fate />
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(DamageMatrix)
