import React from 'react'

import { compose, withState } from 'recompose'
import { zip } from 'ramda'

import Legend from './Legend'
import MapViz from './MapViz'

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

export const MapV = props => (
  <React.Fragment>
    <MapViz
      filter={d => d.tags.includes(props.selected[0])}
      color={props.selected[1]}
    />
    <Legend
      keys={zip(tags, tagColors)}
      onClick={props.setSelection}
      selected={props.selected}
    />
  </React.Fragment>
)

export default compose(
  withState('selected', 'setSelection', [tags[0], tagColors[0]]),
)(MapV)
