import React from 'react'

import OverScroll from 'react-over-scroll'

import Legend from './Legend'
import HeatMap from './HeatMap'

import css from './MapV.css'

import events from './events.csv'

const tags = [
  'Activism',
  'Attractions',
  'Comedy',
  'Concerts',
  'Dance',
  'Festivals',
  'Film',
  'Food & Drink',
  'Forums & Talks',
  'Fundraisers & Charity',
  'Galleries',
  'Holiday',
  "Kids' Stuff",
  'Literary/Books',
  'Markets',
  'Museums',
  'Nightlife',
  'Performing Arts',
  'Sports',
  'Theatre',
  'Other',
]

const tagColors = [
  'rgb(180,221,212)',
  'rgb(2,83,29)',
  'rgb(249,150,241)',
  'rgb(81,226,88)',
  'rgb(146,46,177)',
  'rgb(160,214,111)',
  'rgb(21,73,117)',
  'rgb(5,207,192)',
  'rgb(153,42,28)',
  'rgb(106,144,18)',
  'rgb(84,178,252)',
  'rgb(87,68,155)',
  'rgb(240,192,70)',
  'rgb(99,61,48)',
  'rgb(244,184,171)',
  'rgb(226,28,122)',
  'rgb(251,120,16)',
  'rgb(106,139,123)',
  'rgb(253,44,59)',
  'rgb(157,123,132)',
]

import * as d3 from 'd3'
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
          <HeatMap heatmaps={pages[page]} focus={focus} />
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
  withState('focus', 'setFocus', {}),
)(MapV)
