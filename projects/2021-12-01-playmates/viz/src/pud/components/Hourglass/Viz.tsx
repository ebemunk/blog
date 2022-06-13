import { curveCatmullRom, line, max, scaleLinear, scaleOrdinal } from 'd3'
import React from 'react'
import { usePlotContext } from 'vizlib'
import Silhouette from './Silhouette'
import { pinks } from './util'

export default function Viz({
  decades,
  chosen,
}: {
  decades: any
  chosen: string
}) {
  const { chartHeight, chartWidth } = usePlotContext()

  const maxD = max(Object.keys(decades).flatMap(d => [...decades[d]]))

  const sX = scaleLinear()
    .range([0, chartWidth])
    .domain([-maxD / 2, maxD / 2])

  const sY = scaleLinear().domain([0, 89]).range([0, chartHeight])

  const partToSy = {
    top: 0,
    bust: 18,
    waist: 39,
    hips: 74,
    bottom: 89,
  }

  const color = scaleOrdinal()
    .range(pinks)
    .domain(Object.keys(decades).concat(''))

  const lineGenerator = line()
    .x(d => {
      const k = sX(d[1])
      return k
    })
    .y(d => {
      const k = sY(partToSy[d[0].toString()])
      return k
    })
    .curve(curveCatmullRom)

  const multiplier = 1 / 2.3

  return (
    <>
      <Silhouette
        line={lineGenerator}
        stroke="yellow"
        strokeWidth={2}
        strokeDasharray={[5, 5]}
        data={{
          left: [
            ['top', -(35 * multiplier)],
            ['bust', -(39 * multiplier)],
            ['waist', -(18 * multiplier)],
            ['hips', -(33 * multiplier)],
            ['bottom', -(33 * multiplier)],
          ],
          right: [
            ['top', 35 * multiplier],
            ['bust', 39 * multiplier],
            ['waist', 18 * multiplier],
            ['hips', 33 * multiplier],
            ['bottom', 33 * multiplier],
          ],
        }}
      />
      {Object.keys(decades).map((key, i) => (
        <Silhouette
          opacity={
            chosen && key === chosen ? 1 : chosen && key !== chosen ? 0 : 1
          }
          key={key}
          line={lineGenerator}
          stroke={color(key)}
          strokeWidth={3}
          strokeDasharray={key === '2020s' ? [5, 5] : null}
          data={{
            left: [
              ['top', -((decades[key][0] - 4) * multiplier)],
              ['bust', -(decades[key][0] * multiplier)],
              ['waist', -(decades[key][1] * multiplier)],
              ['hips', -(decades[key][2] * multiplier)],
              ['bottom', -(decades[key][2] * multiplier)],
            ],
            right: [
              ['top', (decades[key][0] - 4) * multiplier],
              ['bust', decades[key][0] * multiplier],
              ['waist', decades[key][1] * multiplier],
              ['hips', decades[key][2] * multiplier],
              ['bottom', decades[key][2] * multiplier],
            ],
          }}
        />
      ))}
      <Silhouette
        line={lineGenerator}
        stroke="cyan"
        strokeWidth={2}
        strokeDasharray={[5, 5]}
        data={{
          left: [
            ['top', -(32 * multiplier)],
            ['bust', -(36 * multiplier)],
            ['waist', -(24 * multiplier)],
            ['hips', -(36 * multiplier)],
            ['bottom', -(36 * multiplier)],
          ],
          right: [
            ['top', 32 * multiplier],
            ['bust', 36 * multiplier],
            ['waist', 24 * multiplier],
            ['hips', 36 * multiplier],
            ['bottom', 36 * multiplier],
          ],
        }}
      />
    </>
  )
}
