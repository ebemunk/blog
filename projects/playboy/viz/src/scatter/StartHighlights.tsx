import React from 'react'

import { usePlotContext } from 'vizlib'
import { PlaymateCircle } from '../types'

import useStageData from './useStageData'

const circle = (cx, cy, r) =>
  `M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${
    cy + r
  } A ${r},${r} 0 0,0 ${cx},${cy - r}`

const getCutouts = (subStage, data): PlaymateCircle[] => {
  switch (subStage) {
    case 'marilyn':
      return [data.find(d => d.datum.name === 'Marilyn Monroe')]
    case 'multiMonth':
      return data.filter(d =>
        [
          'Margie Harrison',
          'Marilyn Waltz',
          'Marguerite Empey',
          'Janet Pilgrim',
        ].includes(d.datum.name),
      )
    default:
      return []
  }
}

const StartHighlights = ({ subStage }: { subStage: string }) => {
  const plotCtx = usePlotContext()

  const { data } = useStageData('start')

  const cutouts = getCutouts(subStage, data)

  if (subStage === 'start') return null

  return (
    <>
      <path
        d={`
          M 0,0 h${plotCtx.chartWidth} v${plotCtx.chartHeight} h-${
          plotCtx.chartWidth
        } z
        
          ${cutouts.map(d => circle(d.cx, d.cy, 10)).join(' ')}
        `}
        fill="black"
        fillOpacity={0.4}
      />
      {cutouts.map(d => (
        <circle
          key={`${d.datum.year}-${d.datum.month}`}
          cx={d.cx}
          cy={d.cy}
          r={10}
          fill="none"
          stroke="white"
        />
      ))}
    </>
  )
}

export default StartHighlights
