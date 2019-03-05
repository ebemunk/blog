import React from 'react'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { format } from 'd3-format'

import data from '../data/nature.csv'

const countScale = scaleLinear()
  .domain(extent(data.map(d => +d.count)))
  .range([0, 250])

const avgFatScale = scaleLinear()
  .domain(extent(data.map(d => +d.avg_fat)))
  .range([0, 250])

const formatCount = format(',')
const formatAvgFat = format('.2')

const Nature = ({ sortKey, setSortKey, sortDesc, setSortDesc }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th />
          <th>Nature</th>
          <th
            onClick={() => {
              setSortDesc(sortKey !== 'count' ? true : !sortDesc)
              setSortKey('count')
            }}
          >
            Crash Count
          </th>
          <th
            onClick={() => {
              setSortDesc(sortKey !== 'avg_fat' ? true : !sortDesc)
              setSortKey('avg_fat')
            }}
          >
            Avg. Fatalities
          </th>
        </tr>
      </thead>
      <tbody>
        {data
          .sort((a, b) =>
            sortDesc ? +b[sortKey] - +a[sortKey] : +a[sortKey] - +b[sortKey],
          )
          .map((d, i) => (
            <tr key={d.nature}>
              <td>{i + 1}.</td>
              <td>{d.nature}</td>
              <td>
                <div
                  style={{
                    width: countScale(+d.count),
                    background: 'red',
                    color: 'white',
                  }}
                >
                  {formatCount(+d.count)}
                </div>
              </td>
              <td>
                <div
                  style={{
                    width: avgFatScale(+d.avg_fat),
                    background: 'blue',
                    color: 'white',
                  }}
                >
                  {formatAvgFat(+d.avg_fat)}
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
)

import { hot } from 'react-hot-loader'
import { compose, withState } from 'recompose'

export default compose(
  hot(module),
  withState('sortKey', 'setSortKey', 'count'),
  withState('sortDesc', 'setSortDesc', true),
)(Nature)
