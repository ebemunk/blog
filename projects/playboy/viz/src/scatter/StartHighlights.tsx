import React, { useLayoutEffect, useRef } from 'react'
import * as d3 from 'd3'

import { usePlotContext } from 'vizlib'
import { PlaymateCircle } from '../types'

import useStageData from './useStageData'

const circle = (cx, cy, r) =>
  `M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${
    cy + r
  } A ${r},${r} 0 0,0 ${cx},${cy - r}`

interface CutoutCircle {
  cx: number
  cy: number
  r: number
  key: string
}

const getCutouts = (subStage, data: PlaymateCircle[]): CutoutCircle[] => {
  switch (subStage) {
    case 'marilyn':
      return [data.find(d => d.datum.name === 'Marilyn Monroe')].map(d => ({
        cx: d.cx,
        cy: d.cy,
        r: 10,
        key: d.datum.name,
      }))
    case 'multiMonth':
      return data
        .filter(d =>
          [
            'Margie Harrison',
            'Marilyn Waltz',
            'Marguerite Empey',
            'Janet Pilgrim',
          ].includes(d.datum.name),
        )
        .map(d => ({
          cx: d.cx,
          cy: d.cy,
          r: 10,
          key: `${d.datum.year}-${d.datum.month}`,
        }))
    case 'multiGirl': {
      const startCenter = {
        cx: 0,
        cy: 0,
        r: 10,
        key: '',
      }
      const avgCenter = (obj, val, i, arr) => ({
        cx: (obj?.cx ?? 0) + val.cx / arr.length,
        cy: (obj?.cy ?? 0) + val.cy / arr.length,
        r: 10,
        key: obj?.key + val.datum.name,
      })

      return [
        data
          .filter(d => ['Pat Sheehan', 'Mara Corday'].includes(d.datum.name))
          .reduce(avgCenter, startCenter),

        data
          .filter(d =>
            ['Madeleine Collinson', 'Mary Collinson'].includes(d.datum.name),
          )
          .reduce(avgCenter, startCenter),

        data
          .filter(d =>
            ['Mirjam van Breeschooten', 'Karin van Breeschooten'].includes(
              d.datum.name,
            ),
          )
          .reduce(avgCenter, startCenter),

        data
          .filter(d =>
            ['Erica Dahm', 'Jaclyn Dahm', 'Nicole Dahm'].includes(d.datum.name),
          )
          .reduce(avgCenter, startCenter),

        data
          .filter(d =>
            ['Carol Bernaola', 'Darlene Bernaola'].includes(d.datum.name),
          )
          .reduce(avgCenter, startCenter),

        data
          .filter(d => ['Deisy Teles', 'Sarah Teles'].includes(d.datum.name))
          .reduce(avgCenter, startCenter),

        data
          .filter(d =>
            ['Natalie Campbell', 'Jennifer Campbell'].includes(d.datum.name),
          )
          .reduce(avgCenter, startCenter),
      ]
    }

    default:
      return []
  }
}

const StartHighlights = ({ subStage }: { subStage: string }) => {
  const plotCtx = usePlotContext()

  const { data } = useStageData('start')

  const cutouts = getCutouts(subStage, data)

  const pathRef = useRef(null)
  const circlesRef = useRef(null)

  useLayoutEffect(() => {
    if (!pathRef.current || !circlesRef.current) return

    d3.select(pathRef.current).transition().duration(750).attr('opacity', 1)

    d3.select(circlesRef.current).transition().duration(750).attr('opacity', 1)
  }, [subStage])

  if (subStage === 'start') return null

  return (
    <>
      <path
        ref={pathRef}
        d={`
          M 0,0 h${plotCtx.chartWidth} v${plotCtx.chartHeight} h-${
          plotCtx.chartWidth
        } z
        
          ${cutouts.map(d => circle(d.cx, d.cy, d.r)).join(' ')}
        `}
        fill="black"
        fillOpacity={0.4}
        opacity={0}
      />
      <g ref={circlesRef} opacity={0}>
        {cutouts.map(d => (
          <circle
            key={`${d.key}-${d.key}`}
            cx={d.cx}
            cy={d.cy}
            r={d.r}
            fill="none"
            stroke="white"
          />
        ))}
      </g>
    </>
  )
}

export default StartHighlights
