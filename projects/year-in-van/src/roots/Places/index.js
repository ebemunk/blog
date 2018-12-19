import React from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'

import places from 'data/places'

import css from '../DayOfWeek/DayOfWeek.css'
import placescss from './Places.css'

const Places = ({}) => {
  const scale = scaleLinear()
    .domain([0, max(places.map(p => p.count))])
    .range([0, 100])

  return (
    <div className={css.locs}>
      <table
        className={placescss.table}
        style={{
          maxWidth: '45rem',
          margin: '0 0.625rem',
        }}
      >
        <caption>Events by Location</caption>
        <tbody>
          {places.map(row => (
            <tr key={row.name}>
              <td
                style={{
                  maxWidth: '10rem',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textAlign: 'right',
                }}
                title={row.name}
              >
                {row.name}
              </td>
              <td style={{ width: '15rem' }}>
                <div
                  style={{
                    backgroundColor: '#0081bd',
                    width: scale(row.count) + '%',
                    height: '1rem',
                    color: 'white',
                    fontSize: '0.75rem',
                    lineHeight: '1rem',
                    textAlign: 'right',
                  }}
                >
                  {row.count}&nbsp;
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(hot(module))(Places)
