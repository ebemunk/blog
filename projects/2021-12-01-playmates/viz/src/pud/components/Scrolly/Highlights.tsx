import { select } from 'd3'
import React, { useLayoutEffect, useRef } from 'react'
import { useWindowSize } from '../../hooks'
import { PlaymateCircle, PointSteps, Step } from './types'
import useData from './useData'

// const circle = (cx, cy, r) =>
//   `M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${
//     cy + r
//   } A ${r},${r} 0 0,0 ${cx},${cy - r}`;

interface CutoutCircle {
  cx: number
  cy: number
  r: number
  key: string
}

const getCutouts = (
  step: Step,
  data: PlaymateCircle[],
  scales,
): CutoutCircle[] => {
  const mapPlaymateToCutoutCircle = d => ({
    cx: d.cx,
    cy: d.cy,
    r: 10,
    key: `${d.datum.name}-${d.datum.year}-${d.datum.month}`,
  })

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

  switch (step) {
    case Step.Marilyn:
      return data
        .filter(d => d.datum.name === 'Marilyn Monroe')
        .map(mapPlaymateToCutoutCircle)
    case Step.NoIssue:
      return [
        {
          cx: scales.sX(new Date(1955, 0, 1)),
          cy: scales.sY('2'),
          r: 10,
          key: 'noissue',
        },
      ]
    case Step.SameGirlMultipleIssues:
      return data
        .filter(d =>
          [
            'Margie Harrison',
            'Marilyn Waltz',
            'Marguerite Empey',
            'Janet Pilgrim',
          ].includes(d.datum.name),
        )
        .map(mapPlaymateToCutoutCircle)
    case Step.Twins: {
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

        ...data
          .filter(d =>
            ['Karissa Shannon', 'Kristina Shannon'].includes(d.datum.name),
          )
          .map(mapPlaymateToCutoutCircle),
      ]
    }
    case Step.China:
      return data
        .filter(d => d.datum.name === 'China Lee')
        .map(mapPlaymateToCutoutCircle)
    case Step.JenniferJackson:
      return data
        .filter(d => d.datum.name === 'Jennifer Jackson')
        .map(mapPlaymateToCutoutCircle)
    case Step.Karen:
      return data
        .filter(d => d.datum.name === 'Karen McDougal')
        .map(mapPlaymateToCutoutCircle)
    case Step.InesRau:
      return data
        .filter(d => d.datum.name === 'Ines Rau')
        .map(mapPlaymateToCutoutCircle)
    case Step.MarshaElle:
      return data
        .filter(d => d.datum.name === 'Marsha Elle')
        .map(mapPlaymateToCutoutCircle)
    case Step.OtherFirsts:
      return data
        .filter(d =>
          [
            'Marilyn Monroe',
            'Margie Harrison',
            'Marilyn Waltz',
            'Janet Pilgrim',
            'Marian Stafford',
            'Marion Scott',
            'Elizabeth Ann Roberts',
            'China Lee',
            'Jennifer Jackson',
            'Liv Lindeland',
            'Marilyn Cole',
            'Bonnie Large',
            'Ester Cordet',
            'Elaine Morton',
            'Karen Morton',
            'Lonny Chin',
            'Carol Eden',
            'Simone Eden',
            'Dalene Kurtis',
            'Raquel Pomplun',
            'Ines Rau',
            'Marsha Elle',
            'Priscilla Huggins',
          ].includes(d.datum.name),
        )
        .map(mapPlaymateToCutoutCircle)
        .concat(
          data
            .filter(d =>
              ['Erica Dahm', 'Jaclyn Dahm', 'Nicole Dahm'].includes(
                d.datum.name,
              ),
            )
            .reduce(avgCenter, startCenter),
          data
            .filter(d =>
              ['Madeleine Collinson', 'Mary Collinson'].includes(d.datum.name),
            )
            .reduce(avgCenter, startCenter),
          data
            .filter(d => ['Pat Sheehan', 'Mara Corday'].includes(d.datum.name))
            .reduce(avgCenter, startCenter),
        )

    default:
      return []
  }
}

export default function Highlights({
  step,
}: {
  step: typeof PointSteps[number]
}) {
  // const plotCtx = usePlotContext()

  const { data, scales } = useData(Step.Explainer)
  const cutouts = getCutouts(step, data, scales)

  // const pathRef = useRef(null)
  const circlesRef = useRef(null)
  const ws = useWindowSize()

  useLayoutEffect(() => {
    if (!circlesRef.current) return

    select(circlesRef.current)
      .selectAll('circle')
      .data(cutouts, (d: CutoutCircle) => d.key)
      .join(
        enter =>
          enter
            .append('circle')
            .attr('cx', d => d.cx)
            .attr('cy', d => d.cy)
            .attr('r', 0)
            .attr('fill', 'none')
            .attr('stroke', 'cyan')
            .attr('stroke-width', 3)
            .attr('pointer-events', 'none')
            .call(enter => enter.transition().duration(750).attr('r', 10)),
        update => update.attr('cx', d => d.cx).attr('cy', d => d.cy),
        exit =>
          exit.call(exit =>
            exit.transition().duration(750).attr('r', 0).remove(),
          ),
      )
      .transition()
      .duration(750)
      .attr('r', ws.width >= 768 ? 10 : 6)
  }, [step, scales])

  return (
    <>
      {/* <path
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
    /> */}
      <g ref={circlesRef} pointerEvents="none">
        {/* {cutouts.map(d => (
        <circle
          key={`${d.key}-${d.key}`}
          cx={d.cx}
          cy={d.cy}
          r={0}
          fill="none"
          stroke="red"
          strokeWidth={3}
        />
      ))} */}
      </g>
    </>
  )
}
