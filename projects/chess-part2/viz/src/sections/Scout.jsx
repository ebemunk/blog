import React from 'react'
import { VerticalBarSeries } from 'react-vis'
import { format } from 'd3-format'

import Plot from '../components/Plot'
import { whiteblack } from '../util'

import datax from '../keks.json'

console.log('data', datax)

const Scout = ({ data }) => (
  <div
    style={{
      flexBasis: '20%',
    }}
  >
    <h4>{data.name}</h4>
    <Plot
      height={200}
      width={300}
      data={data.white.map((d, i) => ({
        x: d.x,
        y: d.y,
        white: d.y,
        black: data.black[i].y,
      }))}
      xType="ordinal"
      margin={{}}
      xAxis={{
        title: 'Piece',
      }}
      yAxis={{
        title: 'Count',
        tickFormat: d => format('.2s')(d),
      }}
      crosshairProps={{
        titleFormat: d => ({
          title: 'Result',
          value: d[0].x,
        }),
        itemsFormat: d => [
          {
            title: 'White',
            value: format(',')(d[0].white),
          },
          {
            title: 'Black',
            value: format(',')(d[0].black),
          },
        ],
      }}
      animation={false}
    >
      <VerticalBarSeries data={data.white} fill={whiteblack(0)} stroke="none" />
      <VerticalBarSeries data={data.black} fill={whiteblack(1)} stroke="none" />
    </Plot>
  </div>
)

const Scouts = ({ filter = [] }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100vw',
        justifyContent: 'space-evenly',
      }}
    >
      {datax
        .filter(d => filter.includes(d.name))
        .map(d => (
          <Scout data={d} key={d.name} />
        ))}
    </div>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'

export default compose(hot(module))(Scouts)
