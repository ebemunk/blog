import React from 'react'
import { VerticalBarSeries } from 'react-vis'

import Plot from './Bar'

import data from '../keks.json'

const Scout = ({ data }) => (
  <div>
    <h4>{data.name}</h4>
    <Plot
      height={300}
      width={600}
      data={data}
      xType="ordinal"
      margin={{}}
      itemsFormat={d =>
        d.map(dd => ({
          title: 'y',
          // value: dd.y,
          value: JSON.stringify(dd, null, 2),
        }))
      }
    >
      <VerticalBarSeries data={data.white} fill="lightgray" stroke="none" />
      <VerticalBarSeries data={data.black} fill="darkslategray" stroke="none" />
    </Plot>
  </div>
)

const Scouts = ({}) => (
  <div>
    {data.map(d => (
      <Scout data={d} key={d.name} />
    ))}
  </div>
)

export default Scouts
