import { useMemo } from 'react'
import { usePlotContext } from 'vizlib'

import { data } from '../../data/data'
import { useWindowSize } from '../../hooks'
import { useStore } from '../../store'
import accessors from './accessors'
import scales from './scales'
import { PlaymateCircle, PointSteps, Step } from './types'
import { isInStepCategory } from './util'

export default function useData(step: Step) {
  const ws = useWindowSize()
  const { chartHeight, chartWidth } = usePlotContext()
  const units = useStore(s => s.units)
  const [xA, yA, cA] = useMemo(() => accessors(step, units), [step])
  const [sX, sY, sC, extras] = useMemo(
    () =>
      scales({
        step,
        chartHeight,
        chartWidth,
        xA,
        yA,
        cA,
        isSm: ws.width < 768,
      }),
    [step, chartHeight, chartWidth, xA, yA, ws.width],
  )

  const multiplePlaymates = useMemo(
    () =>
      Object.entries(
        data.reduce((obj, d) => {
          const key = `${d.year}-${d.month}`
          return {
            ...obj,
            [key]: obj[key] ? obj[key] + 1 : 1,
          }
        }, {}),
      )
        .filter(d => d[1] > 1)
        .reduce((obj, d) => ({ ...obj, [d[0]]: d[1] }), {}),
    [],
  )

  const handledMultiple = { ...multiplePlaymates }

  const playmateCircles: PlaymateCircle[] = useMemo(
    () =>
      data
        .filter(d => typeof yA(d) !== 'undefined' && yA(d) !== null)
        .map(d => {
          const datum = {
            cx: sX(xA(d)) as number,
            cy: sY(yA(d)) as number,
            fill: sC(cA(d)) as string,
            datum: d,
          }

          // when there are multiple playmates, spread the points around so they
          // dont overlap. thankfully theres max 3 lol
          if (isInStepCategory(step, PointSteps)) {
            const key = `${d.year}-${d.month}`

            if (handledMultiple[key]) {
              switch (multiplePlaymates[key]) {
                case 3: {
                  switch (handledMultiple[key]) {
                    case 3: {
                      datum.cx -= 3.5
                      datum.cy += 3.5
                      break
                    }
                    case 2: {
                      datum.cx += 3.5
                      datum.cy += 3.5
                      break
                    }
                    case 1: {
                      datum.cy -= 3.5
                      break
                    }
                  }
                  break
                }
                case 2: {
                  switch (handledMultiple[key]) {
                    case 2: {
                      datum.cy -= 3.5
                      break
                    }
                    case 1: {
                      datum.cy += 3.5
                      break
                    }
                  }
                }
              }
              handledMultiple[key]--
            }
          }

          return datum
        }),
    [yA, xA, cA, sX, sY, sC, step],
  )

  return {
    accessors: { xA, yA, cA },
    scales: { sX, sY, sC, extras },
    data: playmateCircles,
  }
}
