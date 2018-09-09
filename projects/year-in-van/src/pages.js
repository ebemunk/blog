import React from 'react'
import { format } from 'date-fns'

import Page from './Page'
import InteractivePage from './InteractivePage'

import {
  filterByName,
  dateScale,
  byDate,
  filterByStartHour,
  bySeason,
} from './data'

const colors3 = ['#0081bd', '#ef69b4', '#ffa600']
const colors4 = ['#0081bd', '#b476cf', '#ff6886', '#ffa600']
const colors5 = ['#0081bd', '#917cd4', '#ef69b4', '#ff716c', '#ffa600']
const colors8 = [
  '#0081bd',
  '#ffa600',
  '#5f80d0',
  '#ff8548',
  '#a079d3',
  '#ff6d77',
  '#d86ec3',
  '#ff66a2',
]

const CustomPresetLink = props => (
  <a
    href=""
    onClick={e => {
      e.preventDefault()
      props.customPreset(props.array)
    }}
  >
    {props.array.join(', ')}
  </a>
)

export default [
  {
    heatmaps: () => [
      { data: bySeason['winter'], color: 'white', label: 'winter' },
      { data: bySeason['spring'], color: '#50d000', label: 'spring' },
      { data: bySeason['summer'], color: '#ff4700', label: 'summer' },
      { data: bySeason['fall'], color: '#ffc800', label: 'fall' },
    ],
    children: props => (
      <Page {...props}>
        <h4>Four Seasons of Vancouver</h4>
        <p>Events grouped by the season they started in.</p>
      </Page>
    ),
  },
  {
    heatmaps: () => [
      { data: filterByName('winter'), color: 'white', label: 'winter' },
      { data: filterByName('spring'), color: '#50d000', label: 'spring' },
      { data: filterByName('summer'), color: '#ff4700', label: 'summer' },
      { data: filterByName('fall'), color: '#ffc800', label: 'fall' },
    ],
    children: props => (
      <Page {...props}>
        <h4>Four Seasons of Vancouver</h4>
        <p>Events where the name contains the season.</p>
      </Page>
    ),
  },
  {
    heatmaps: () => [
      { data: filterByName('north'), color: colors4[0], label: 'north' },
      { data: filterByName('south'), color: colors4[1], label: 'south' },
      { data: filterByName('east'), color: colors4[2], label: 'east' },
      { data: filterByName('west'), color: colors4[3], label: 'west' },
    ],
    children: props => (
      <Page {...props}>
        <h4>Cardinal Directions</h4>
        <p>Events where the name contains a cardinal direction.</p>
      </Page>
    ),
  },
  {
    heatmaps: () => [
      { data: filterByName('wine'), color: '#c50c37', label: 'wine' },
      { data: filterByName('beer'), color: '#ffc800', label: 'beer' },
    ],
    children: props => (
      <Page {...props}>
        <h4>Wine vs Beer</h4>
        <p>
          Events where the name contains wine or beer. Cambie Street seems to be
          the boundary between wine and beer events.
        </p>
      </Page>
    ),
  },
  {
    heatmaps: () => [
      {
        data: filterByName('breakfast'),
        color: colors3[0],
        label: 'breakfast',
      },
      { data: filterByName('lunch'), color: colors3[1], label: 'lunch' },
      { data: filterByName('dinner'), color: colors3[2], label: 'dinner' },
    ],
    children: props => (
      <Page {...props}>
        <h4>Meals</h4>
        <p>
          Events where the name contains a reference to breakfast, lunch or
          dinner. There were twice as many dinner events than the other 2
          combined.
        </p>
      </Page>
    ),
  },
  {
    heatmaps: () => [
      { data: filterByName('flamenco'), color: colors4[3], label: 'flamenco' },
      { data: filterByName('jazz'), color: colors4[2], label: 'jazz' },
      { data: filterByName('pop'), color: colors4[1], label: 'pop' },
      { data: filterByName('blues'), color: colors4[0], label: 'blues' },
    ],
    children: props => (
      <Page {...props}>
        <h4>Music Genres</h4>
        <p>
          Events where the name contains a (select few) music genre. Flamenco is
          overrepresented because of regular events in that same location.
          Around Granville Strip is definitely a hot spot for events.
        </p>
      </Page>
    ),
  },
  {
    heatmaps: () => [
      {
        data: filterByName('indigenous'),
        color: colors4[0],
        label: 'indigenous',
      },
    ],
    children: props => (
      <Page {...props}>
        <h4>Indigenous</h4>
        <p>Events where the name contains "indigenous".</p>
      </Page>
    ),
  },
  {
    heatmaps: () => [
      { data: filterByName('free'), color: colors4[0], label: 'free' },
    ],
    children: props => (
      <Page {...props}>
        <h4>Free Stuff</h4>
        <p>
          Events where the name contains "free". Very concentrated clusters
          indicative of recurring events.
        </p>
      </Page>
    ),
  },
  {
    heatmaps: () => [
      { data: filterByStartHour(4, 12), color: colors5[0], label: 'morning' },
      {
        data: filterByStartHour(12, 17),
        color: colors5[1],
        label: 'afternoon',
      },
      {
        data: filterByStartHour(17, 21),
        color: colors5[2],
        label: 'evening',
      },
      { data: filterByStartHour(21, 24), color: colors5[3], label: 'night' },
      {
        data: filterByStartHour(0, 4),
        color: colors5[4],
        label: 'late night',
      },
    ],
    children: props => (
      <Page {...props}>
        <h4>Time of Day</h4>
        <p>
          Events grouped by starting hours: Morning: 4am-12pm, Afternoon:
          12pm-5pm, Evening: 5pm-9pm, Night: 9pm-12am, Late Night: 12am-4am.
          Definitely an "evening" kind of city.
        </p>
      </Page>
    ),
  },
  {
    heatmaps: ({ progress }) => [
      {
        data: byDate[Math.floor(progress)],
        color: colors4[3],
        label: 'live',
      },
    ],
    children: props => {
      const [start, end] = dateScale.invertExtent(Math.floor(props.progress))
      return (
        <Page {...props}>
          <h4>A Year of Events</h4>
          <p>
            Mapping out all events by start date. Scroll down to go through 2018
            slowly.
          </p>
          <p>
            Showing events that started between {format(start, 'MMM Do')}-
            {format(end, 'Do')}
          </p>
        </Page>
      )
    },
  },
  {
    heatmaps: ({ custom }) =>
      custom.map((key, i) => ({
        data: filterByName(key),
        color: colors8[i % 8],
        label: key,
      })),
    children: props => (
      <InteractivePage {...props}>
        <h4>Now it's your turn</h4>
        <p>
          Explore events by name, add and remove as you want. Try:{' '}
          <CustomPresetLink
            array={['ubc', 'sfu']}
            customPreset={props.customPreset}
          />
          , or{' '}
          <CustomPresetLink
            array={['duo', 'trio', 'quartet']}
            customPreset={props.customPreset}
          />
          , or{' '}
          <CustomPresetLink
            array={['theatre', 'cinema']}
            customPreset={props.customPreset}
          />
          .
        </p>
        {props.custom.length > 0 && (
          <p style={{ marginTop: '1rem' }}>
            You can use the following url to share this custom heatmap.
            <input
              value={encodeURI(
                window.location.href.replace(window.location.hash, '') +
                  '#list=' +
                  props.custom.join(','),
              )}
              readOnly
              style={{
                fontSize: '1rem',
                color: 'white',
                height: '3rem',
                margin: '0',
              }}
              onClick={e => e.target.select()}
            />
          </p>
        )}
      </InteractivePage>
    ),
  },
]
