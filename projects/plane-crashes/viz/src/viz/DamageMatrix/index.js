import React from 'react'
import { VerticalBarSeries, RadialChart } from 'react-vis'
import { pie } from 'd3-shape'

import Heatmap from './Heatmap'
import Plot from '../../components/Plot'
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
    <Plot
      height={400}
      data={damage.map(d => ({
        x: d.damage,
        y: +d.count,
      }))}
      xType="ordinal"
    >
      <VerticalBarSeries
        data={damage.map(d => ({
          x: d.damage,
          y: +d.count,
        }))}
        color={colors[4]}
      />
    </Plot>
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
    <Plot
      height={400}
      data={fate.map(d => ({
        x: d.fate,
        y: +d.count,
      }))}
      xType="ordinal"
    >
      <VerticalBarSeries
        data={fate.map(d => ({
          x: d.fate,
          y: +d.count,
        }))}
        color={colors[4]}
      />
    </Plot>
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
