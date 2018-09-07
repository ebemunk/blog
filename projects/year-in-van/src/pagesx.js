import React from 'react'

import differenceInHours from 'date-fns/difference_in_hours'

import events from './events.csv'

import Legend from './Legend'
import Mapbox from './Mapbox'
const byName = name => d => d.name.match(new RegExp(`${name}`, 'ig'))

const byDiffHours = d =>
  differenceInHours(new Date(d.startdate), new Date(d.enddate)) < 4

const evtz = events.filter(byDiffHours).filter(d => d.startdate === d.enddate)

const byStartHour = ([start, end]) => d => {
  const hour = new Date(d.startdate).getHours()
  return hour >= start && hour < end
}

import css from './MapV.css'

const ProgressBar = ({ progress }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      height: '1rem',
      width: '100vw',
    }}
  >
    <div
      style={{
        width: `${progress}%`,
        height: '100%',
        backgroundColor: 'red',
      }}
    />
  </div>
)

const Text = ({ text, progress }) => (
  <div
    style={{
      position: 'fixed',
      bottom: (progress / 100) * window.innerHeight,
      width: '30rem',
      fontSize: '1rem',
      border: '3px solid red',
    }}
  >
    {text}
  </div>
)

const Bage = ({
  heatmaps,
  progress,
  isOut,
  setFocus,
  focus = null,
  children = '',
}) => (
  <div className={css.wrap}>
    <Mapbox heatmaps={heatmaps} focus={focus} />
    {!isOut && <Text text={children} progress={progress} />}
    {!isOut && <ProgressBar progress={progress} />}
    <Legend keys={heatmaps} onClick={setFocus} focus={focus} />
  </div>
)

import { memoizeWith, identity } from 'ramda'

const filterByName = memoizeWith(identity, name => events.filter(byName(name)))

import { scaleQuantize, extent, range } from 'd3'
import { format, isBefore, isAfter } from 'date-fns'

const timeScale = scaleQuantize()
  .range(range(0, 101))
  .domain(extent(events, event => new Date(event.startdate).getTime()))

const byDate = events.reduce((acc, event) => {
  const skey = timeScale(new Date(event.startdate).getTime())
  const ekey = timeScale(new Date(event.enddate).getTime())
  range(skey, ekey).map(key => acc[key].push(event))
  return acc
}, range(0, 101).map(i => []))

console.log('wut', byDate)

export default [
  props => (
    <Bage
      heatmaps={[
        { data: filterByName('winter'), color: 'white', label: 'winter' },
        { data: filterByName('spring'), color: 'green', label: 'spring' },
        { data: filterByName('summer'), color: 'red', label: 'summer' },
        { data: filterByName('fall'), color: 'yellow', label: 'fall' },
      ]}
      {...props}
    />
  ),
  ({ page, progress, ...other }) => {
    return (
      <Bage
        heatmaps={[
          { data: byDate[Math.floor(progress)], color: 'red', label: 'live' },
        ]}
        progress={progress}
        {...other}
      >
        From
        {timeScale
          .invertExtent(Math.floor(progress))
          .map(ms => format(ms, 'MMM Do, YY'))}
      </Bage>
    )
  },
]
