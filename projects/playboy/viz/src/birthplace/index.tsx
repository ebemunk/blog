import React from 'react'
import * as d3 from 'd3'

import data from '../../locations.json'

const byCountry = d3.group(
  data.map(d => {
    const [country, state, town] = d.birthplace.split(', ').reverse()
    return {
      ...d,
      country,
      state,
      town,
    }
  }),
  d => d.country,
)

const byState = d3.group(
  data.map(d => {
    const [country, state, town] = d.birthplace.split(', ').reverse()
    return {
      ...d,
      country,
      state,
      town,
    }
  }),
  d => `${d.country} - ${d.state}`,
  // d => d.country,
  // d => d.state,
)

const byTown = d3.group(
  data.map(d => {
    const [country, state, town] = d.birthplace.split(', ').reverse()
    return {
      ...d,
      country,
      state,
      town,
    }
  }),
  d => `${d.country} - ${d.state} - ${d.town}`,
  // d => d.country,
  // d => d.state,
  // d => d.town,
)

// console.log('byCountry', byCountry)
// console.log(
//   'byCountry ar',
//   Array.from(byCountry.entries()).sort((a, b) => b[1].length - a[1].length),
// )
// console.log('byState', byState)
// console.log(
//   'byState ar',
//   Array.from(byState.entries()).sort((a, b) => b[1].length - a[1].length),
// )
// console.log('byTown', byTown)
console.log(
  'byTown ar',
  Array.from(byTown.entries())
    .filter(
      d => d[0].indexOf('United States') > -1 && d[0].indexOf('undefined') > -1,
    )
    .sort(),
)

const Birthplace = () => {
  return <></>
}

import { hot } from 'react-hot-loader'
export default hot(module)(Birthplace)
