import React, { useState } from 'react'
import { scaleLinear } from 'd3-scale'
import { extent, sum } from 'd3-array'
import { format } from 'd3-format'

import data from '../data/nature.csv'

import { get8 } from '../vizlib/colors'

const color = get8()

const countScale = scaleLinear()
  .domain(extent(data.map(d => +d.count)))
  .range([0, 200])

const totalCount = sum(data.map(d => +d.count))

const avgFatScale = scaleLinear()
  .domain(extent(data.map(d => +d.avg_fat)))
  .range([0, 200])

const formatCount = format(',')
const formatAvgFat = format('.2')
const formatPct = format('.2p')

const Nature = () => {
  const [sortKey, setSortKey] = useState('count')
  const [sortDesc, setSortDesc] = useState(true)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '1.3rem',
      }}
    >
      <div>
        <ChartTitle
          title="How does the number of crashes and avg. fatalities change with Nature?"
          subtitle="Military accounts for more than a third of crashes. Int'l Non Scheduled Passenger
 has the highest average fatality rate. Click on columns to sort."
          style={{ marginBottom: '0.5rem', width: 700 }}
        />
        <table style={{ width: 700, borderCollapse: 'collapse' }}>
          <thead style={{ borderBottom: '1px solid white', textAlign: 'left' }}>
            <tr>
              <th />
              <th>Nature</th>
              <th
                onClick={() => {
                  setSortDesc(sortKey !== 'count' ? true : !sortDesc)
                  setSortKey('count')
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  Crash Count{' '}
                  <span style={{ fontSize: '0.5rem', marginLeft: '0.5rem' }}>
                    {sortKey === 'count' ? (sortDesc ? '▼' : '▲') : null}
                  </span>
                </div>
              </th>
              <th
                onClick={() => {
                  setSortDesc(sortKey !== 'avg_fat' ? true : !sortDesc)
                  setSortKey('avg_fat')
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  Avg. Fatalities{' '}
                  <span style={{ fontSize: '0.5rem', marginLeft: '0.5rem' }}>
                    {sortKey === 'avg_fat' ? (sortDesc ? '▼' : '▲') : null}
                  </span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data
              .sort((a, b) =>
                sortDesc
                  ? +b[sortKey] - +a[sortKey]
                  : +a[sortKey] - +b[sortKey],
              )
              .map((d, i) => (
                <tr
                  key={d.nature}
                  style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.5)' }}
                >
                  <td style={{ width: 30 }}>{i + 1}.</td>
                  <td>{d.nature}</td>
                  <td style={{ width: 200, padding: 0 }}>
                    <div
                      style={{
                        width: countScale(+d.count),
                        background: color(0),
                        color: 'white',
                        height: '100%',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        style={{ marginLeft: '0.3rem', whiteSpace: 'nowrap' }}
                      >
                        {formatCount(+d.count)} (
                        {formatPct(+d.count / totalCount)})
                      </span>
                    </div>
                  </td>
                  <td style={{ width: 200, padding: 0 }}>
                    <div
                      style={{
                        width: avgFatScale(+d.avg_fat),
                        background: color(2),
                        color: 'white',
                        height: '100%',
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        style={{ marginLeft: '0.3rem', whiteSpace: 'nowrap' }}
                      >
                        {formatAvgFat(+d.avg_fat)}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

import { hot } from 'react-hot-loader'
import { compose } from 'recompose'
import ChartTitle from '../vizlib/ChartTitle'

export default compose(
  hot(module),
  React.memo,
)(Nature)
