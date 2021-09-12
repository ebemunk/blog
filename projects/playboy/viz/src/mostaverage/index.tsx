import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { hot } from 'react-hot-loader'
import { data as rawData } from '../data'
import PlaymateTooltip from '../scatter/PlaymateTooltip'
import { uniqBy } from 'remeda'
import { Playmate } from '../types'
import { useState } from 'react'
import { usePopper } from 'react-popper'
import { createPortal } from 'react-dom'
import { createUseStyles } from 'react-jss'

const data = uniqBy(rawData, d => d.name)

const normalizer = accessor =>
  d3
    .scaleLinear()
    .domain(d3.extent(data, accessor) as [number, number])
    .range([0, 1])

// const normalizer = accessor => {
//   const mean = d3.mean(data, accessor)
//   const std = Math.sqrt(d3.variance(data, accessor))
//   return d => (d - mean) / std
// }

const normalizedData = data.map(d => ({
  ...d,
  bustCM: normalizer(d => d.bustCM)(d.bustCM),
  waistCM: normalizer(d => d.waistCM)(d.waistCM),
  hipsCM: normalizer(d => d.hipsCM)(d.hipsCM),
  heightCM: normalizer(d => d.heightCM)(d.heightCM),
  weightKG: normalizer(d => d.weightKG)(d.weightKG),
  mateAge: normalizer(d => d.mateAge)(d.mateAge),
}))

const hairAvgs = new Map(
  d3
    .groups(data, d => d.hair)
    .map(([k, v]) => {
      return [k, v.length / data.length]
    }),
)

const ethnicityAvgs = new Map(
  d3
    .groups(data, d => d.ethnicity)
    .map(([k, v]) => {
      return [k, v.length / data.length]
    }),
)

const cupAvgs = new Map(
  d3
    .groups(data, d => d.cup)
    .map(([k, v]) => {
      return [k, v.length / data.length]
    }),
)

const breastsAvgs = new Map(
  d3
    .groups(data, d => d.breasts)
    .map(([k, v]) => {
      return [k, v.length / data.length]
    }),
)

const average = [
  d3.mean(normalizedData, d => d.bustCM),
  d3.mean(normalizedData, d => d.waistCM),
  d3.mean(normalizedData, d => d.hipsCM),
  d3.mean(normalizedData, d => d.heightCM),
  d3.mean(normalizedData, d => d.weightKG),
  d3.mean(normalizedData, d => d.mateAge),
  hairAvgs.get('Blond'),
  ethnicityAvgs.get('Caucasian'),
  breastsAvgs.get('Real/Natural'),
  cupAvgs.get('C'),
]

const euclidian = normalizedData
  .map((d, i) => {
    const distance = Math.sqrt(
      Math.pow(average[0] - d.bustCM, 2) +
        Math.pow(average[1] - d.waistCM, 2) +
        Math.pow(average[2] - d.hipsCM, 2) +
        Math.pow(average[3] - d.heightCM, 2) +
        Math.pow(average[4] - d.weightKG, 2) +
        Math.pow(average[5] - d.mateAge, 2) +
        Math.pow(average[6] - hairAvgs.get(d.hair), 2) +
        Math.pow(average[7] - ethnicityAvgs.get(d.ethnicity), 2) +
        Math.pow(average[8] - breastsAvgs.get(d.breasts), 2) +
        Math.pow(average[9] - cupAvgs.get(d.cup), 2),
    )
    return { ...d, distance, index: i }
  })
  .sort((a, b) => a.distance - b.distance)

// const cosine = data
//   .map(d => {
//     const distance =
//       d3.sum([
//         average[0] * d.bustCM,
//         average[1] * d.waistCM,
//         average[2] * d.hipsCM,
//         average[3] * d.heightCM,
//         average[4] * d.weightKG,
//         average[5] * d.mateAge,
//         average[6] * hairAvgs.get(d.hair),
//         average[7] * ethnicityAvgs.get(d.ethnicity),
//         average[8] * breastsAvgs.get(d.breasts),
//         average[9] * cupAvgs.get(d.cup),
//       ]) /
//       (Math.sqrt(d3.sum(average)) *
//         Math.sqrt(
//           d3.sum([
//             d.bustCM,
//             d.waistCM,
//             d.hipsCM,
//             d.heightCM,
//             d.weightKG,
//             d.mateAge,
//             hairAvgs.get(d.hair),
//             ethnicityAvgs.get(d.ethnicity),
//             breastsAvgs.get(d.breasts),
//             cupAvgs.get(d.cup),
//           ]),
//         ))

//     return { ...d, distance }
//   })
//   .sort((a, b) => a.distance - b.distance)

// console.log(cosine.slice(0, 5), cosine.slice(-5))

const useStyles = createUseStyles({
  circle: {
    margin: '10px 10px',
    '@media (max-width: 320px)': {
      margin: '2px',
    },
  },
})

import AliChanel from './Ali-Chanel.jpg'
import CandaceCollins from './Candace-Collins.jpg'
import CarmellaDeCesare from './Carmella-DeCesare.jpg'
import CarmenBerg from './Carmen-Berg.jpg'
import GeenaRocero from './Geena-Rocero.jpg'
import GraceKim from './Grace-Kim.jpg'
import InesRau from './Ines-Rau.jpg'
import LizStewart from './Liz-Stewart.jpg'
import PhyllisColeman from './Phyllis-Coleman.jpg'
import SallyTodd from './Sally-Todd.jpg'

const Images = {
  'Ali Chanel': AliChanel,
  'Candace Collins': CandaceCollins,
  'Carmella DeCesare': CarmellaDeCesare,
  'Carmen Berg': CarmenBerg,
  'Geena Rocero': GeenaRocero,
  'Grace Kim': GraceKim,
  'Ines Rau': InesRau,
  'Liz Stewart': LizStewart,
  'Phyllis Coleman': PhyllisColeman,
  'Sally Todd': SallyTodd,
}

const Circle = ({ d, number }: { d: Playmate; number: number }) => {
  const [pinned, setPinned] = useState(false)
  const [showing, setShowing] = useState(false)
  const [popper, setPopper] = useState(null)
  const refRef = useRef(null)
  const { styles, attributes, forceUpdate } = usePopper(
    refRef.current,
    popper,
    {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    },
  )

  useEffect(() => {
    if (!pinned) return

    forceUpdate()
  }, [pinned])

  useEffect(() => {
    const listener = (evt: MouseEvent) => {
      const possibleTooltip = document.querySelector(
        'div[data-playmatetooltip]',
      )
      if (pinned && !possibleTooltip?.contains(evt.target as Node)) {
        setPinned(false)
        setShowing(null)
      }
    }

    window.addEventListener('click', listener, { capture: true })

    return () => {
      window.removeEventListener('click', listener, { capture: true })
    }
  }, [setPinned, setShowing, pinned])

  const classes = useStyles()

  return (
    <>
      <div
        ref={refRef}
        style={{
          borderRadius: '50%',
          border: showing ? '3px solid white' : '3px solid gray',
          padding: '2px',
          height: '50px',
          width: '50px',
          position: 'relative',
        }}
        className={classes.circle}
        onMouseOver={() => setShowing(true)}
        onMouseOut={() => {
          if (pinned) return
          setShowing(null)
        }}
        onClick={evt => {
          if (showing === null) return
          if (pinned) {
            setShowing(null)
            setPinned(false)
          }
          if (!pinned) setPinned(true)
        }}
      >
        <img
          src={Images?.[d.name] ?? `https://picsum.photos/50"`}
          style={{
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '-0.5rem',
            left: '-0.5rem',
            background: 'firebrick',
            color: 'white',
            borderRadius: '50%',
            fontSize: 12,
            width: '1.4rem',
            height: '1.4rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          {number}
        </div>
      </div>

      {showing &&
        createPortal(
          <div
            ref={setPopper}
            style={{
              ...styles.popper,
              pointerEvents: pinned ? 'auto' : 'none',
            }}
            {...attributes.popper}
          >
            <PlaymateTooltip data={d} pinned={pinned} />
          </div>,
          document.querySelector('body'),
        )}
    </>
  )
}

const MostAverage = () => {
  return (
    <div
      style={{
        width: '100vw',
        maxWidth: '600px',
        display: 'flex',
        margin: 'auto',
        flexDirection: 'column',
        marginBottom: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {euclidian.slice(0, 5).map((d, i) => (
          <Circle d={data[d.index]} key={data[d.index].name} number={i + 1} />
        ))}
      </div>
      <div style={{ textAlign: 'center', margin: '1rem 0' }}>
        ... 796 more playmates ...
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {euclidian.slice(-5).map((d, i) => (
          <Circle
            d={data[d.index]}
            key={data[d.index].name}
            number={data.length - 4 + i}
          />
        ))}
      </div>
    </div>
  )
}

export default hot(module)(MostAverage)
