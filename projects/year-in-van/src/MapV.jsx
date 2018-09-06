import React from 'react'

import OverScroll from 'react-over-scroll'

import Legend from './Legend'
import Fokit from './Fokit'

import css from './MapV.css'

import events from './events.csv'

import differenceInHours from 'date-fns/difference_in_hours'

const byName = name => d => d.name.match(new RegExp(`${name}`, 'ig'))

const byDiffHours = d =>
  differenceInHours(new Date(d.startdate), new Date(d.enddate)) < 4

const evtz = events.filter(byDiffHours)

const byStartHour = ([start, end]) => d => {
  const hour = new Date(d.startdate).getHours()
  // console.log({ sd: d.startdate, hour, start, end })
  return hour >= start && hour < end
}

const pages = [
  [
    { data: events.filter(byName('summer')), color: 'red', label: 'Summer' },
    { data: events.filter(byName('fall')), color: 'yellow', label: 'Fall' },
    { data: events.filter(byName('winter')), color: 'white', label: 'Winter' },
    { data: events.filter(byName('spring')), color: 'green', label: 'Spring' },
  ],
  [
    { data: events.filter(byName('east')), color: 'red', label: 'East' },
    { data: events.filter(byName('west')), color: 'yellow', label: 'West' },
    { data: events.filter(byName('north')), color: 'white', label: 'North' },
    { data: events.filter(byName('south')), color: 'green', label: 'South' },
  ],
  [
    { data: events.filter(byName('wine')), color: 'red', label: 'Wine' },
    { data: events.filter(byName('beer')), color: 'yellow', label: 'Beer' },
  ],
  [
    { data: events.filter(byName('love')), color: 'red', label: 'Love' },
    { data: events.filter(byName('family')), color: 'yellow', label: 'Family' },
  ],
  [
    {
      data: evtz.filter(byStartHour([0, 4])),
      color: 'red',
      label: 'Late Night',
    },
    {
      data: evtz.filter(byStartHour([4, 12])),
      color: 'yellow',
      label: 'Morning',
    },
    {
      data: evtz.filter(byStartHour([12, 17])),
      color: 'green',
      label: 'Afternoon',
    },
    {
      data: evtz.filter(byStartHour([17, 21])),
      color: 'blue',
      label: 'Evening',
    },
    {
      data: evtz.filter(byStartHour([21, 24])),
      color: 'white',
      label: 'Night',
    },
  ],
]

export const MapV = ({ focus, setFocus }) => (
  <OverScroll slides={pages.length} factor={1}>
    {(page, progress) => {
      const isOut =
        (page === 0 && progress === 0) ||
        (page === pages.length - 1 && progress === 100)
      return (
        <div className={css.wrap}>
          <Fokit heatmaps={pages[page]} focus={focus} />
          {/* {!isOut && (
            <div
              style={{
                position: 'fixed',
                bottom: (progress / 100) * window.innerHeight,
                width: '500px',
                border: '3px solid red',
              }}
            >
              halllow
            </div>
          )} */}
          {!isOut && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                height: '25px',
                width: '100vw',
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  backgroundColor: 'blue',
                }}
              />
            </div>
          )}
          <Legend
            keys={pages[page]}
            onClick={label => setFocus(focus === label ? null : label)}
            focus={focus}
          />
        </div>
      )
    }}
  </OverScroll>
)

import { hot } from 'react-hot-loader'
import { compose, withState } from 'recompose'

export default compose(
  hot(module),
  withState('focus', 'setFocus', null),
)(MapV)
