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
  '#003f5c',
  '#2f4b7c',
  '#665191',
  '#a05195',
  '#d45087',
  '#f95d6a',
  '#ff7c43',
  '#ffa600',
]

export default [
  {
    heatmaps: () => [
      { data: filterByName('winter'), color: 'white', label: 'winter' },
      { data: filterByName('spring'), color: '#50d000', label: 'spring' },
      { data: filterByName('summer'), color: '#ff4700', label: 'summer' },
      { data: filterByName('fall'), color: '#ffc800', label: 'fall' },
    ],
    children: props => (
      <Page {...props}>
        <h4>Four seasons of Vancouver</h4>
        <p>Events where the name contains</p>
      </Page>
    ),
  },
  {
    heatmaps: () => [
      { data: bySeason['winter'], color: 'white', label: 'winter' },
      { data: bySeason['spring'], color: '#50d000', label: 'spring' },
      { data: bySeason['summer'], color: '#ff4700', label: 'summer' },
      { data: bySeason['fall'], color: '#ffc800', label: 'fall' },
    ],
    children: props => <Page {...props}>actual 4 seasons</Page>,
  },
  {
    heatmaps: () => [
      { data: filterByName('north'), color: colors4[0], label: 'north' },
      { data: filterByName('south'), color: colors4[1], label: 'south' },
      { data: filterByName('east'), color: colors4[2], label: 'east' },
      { data: filterByName('west'), color: colors4[3], label: 'west' },
    ],
    children: props => <Page {...props} children="direciton broo" />,
  },
  {
    heatmaps: () => [
      { data: filterByName('wine'), color: '#c50c37', label: 'wine' },
      { data: filterByName('beer'), color: '#ffc800', label: 'beer' },
    ],
    children: props => <Page {...props} children="win vs beer gbvorbsoro" />,
  },
  {
    heatmaps: () => [
      { data: filterByName('love'), color: colors3[0], label: 'love' },
      { data: filterByName('family'), color: colors3[2], label: 'family' },
    ],
    children: props => (
      <Page {...props} children="not alewasm ututai xceclcuv" />
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
    children: props => <Page {...props} children="food pls moreara" />,
  },
  {
    heatmaps: () => [
      { data: filterByName('flamenco'), color: colors4[3], label: 'flamenco' },
      { data: filterByName('jazz'), color: colors4[2], label: 'jazz' },
      { data: filterByName('pop'), color: colors4[1], label: 'pop' },
      { data: filterByName('blues'), color: colors4[0], label: 'blues' },
    ],
    children: props => <Page {...props} children="jazzzzzzzz" />,
  },
  {
    heatmaps: () => [
      { data: filterByName('live'), color: colors4[0], label: 'live' },
    ],
    children: props => <Page {...props} children="live events atmaeoao" />,
  },
  {
    heatmaps: () => [
      {
        data: filterByName('indigenous'),
        color: colors4[0],
        label: 'indigenous',
      },
    ],
    children: props => <Page {...props} children="ianfeaidgnaign brorooo" />,
  },
  {
    heatmaps: () => [
      { data: filterByName('free'), color: colors4[0], label: 'free' },
    ],
    children: props => (
      <Page {...props} children="free bro come take gita brooo" />
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
    children: props => <Page {...props} children="timer ofsdaty vroo" />,
  },
  {
    heatmaps: ({ progress }) => [
      {
        data: byDate[Math.floor(progress)],
        color: colors4[3],
        label: 'live',
      },
    ],
    children: props => (
      <Page {...props}>
        elfaoelaogao From
        {dateScale
          .invertExtent(Math.floor(props.progress))
          .map(ms => format(ms, 'MMM Do, YY'))}
      </Page>
    ),
  },
  {
    heatmaps: ({ custom }) =>
      custom.map((key, i) => ({
        data: filterByName(key),
        color: colors8[i % 8],
        label: key,
      })),
    children: props => (
      <InteractivePage {...props}>Now it's your turn!</InteractivePage>
    ),
  },
]
