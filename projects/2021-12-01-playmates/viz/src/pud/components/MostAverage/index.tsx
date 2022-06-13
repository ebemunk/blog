import React from 'react'
import MostLeast from './MostLeast'
import YearAverages from './YearAverages'

export default function MostAverage({ type }: { type: 'avg' | 'year' }) {
  return <figure>{type === 'avg' ? <MostLeast /> : <YearAverages />}</figure>
}
