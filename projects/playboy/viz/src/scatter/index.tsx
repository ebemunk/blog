import * as React from 'react'
import { hot } from 'react-hot-loader'

import { FlexPlot, usePlotContext, Path } from '@xmatters/vizlib'
import {
  scalePoint,
  scaleTime,
  scaleLinear,
  scaleIdentity,
  scaleOrdinal,
  scalePow,
} from 'd3-scale'
import { extent, range } from 'd3-array'
import {
  forceSimulation,
  forceX,
  forceY,
  forceCollide,
  forceRadial,
} from 'd3-force'
import { packSiblings } from 'd3-hierarchy'
import { useTransition, animated } from 'react-spring'
import { identity, clone, groupBy, toPairs } from 'remeda'

import { get, data } from '../data'
import { WAxis } from '../themed'
import { MONTHS } from '../util'
import Pie from './Pie'

const XAxis = ({ stage, scale }) => {
  switch (stage) {
    case 'start':
      return (
        <WAxis
          scale={scale}
          orientation="top"
          // @ts-ignore
          ticks={[
            // @ts-ignore
            '1953',
            // @ts-ignore
            '1960',
            // @ts-ignore
            '1970',
            // @ts-ignore
            '1980',
            // @ts-ignore
            '1990',
            // @ts-ignore
            '2000',
            // @ts-ignore
            '2010',
            // @ts-ignore
            '2020',
          ]}
        />
      )

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips':
      return <WAxis scale={scale} orientation="top" showDomain />

    default:
      return null
  }
}

const YAxis = ({ stage, scale }) => {
  switch (stage) {
    case 'start':
      return (
        <WAxis scale={scale} orientation="left" tickFormat={d => MONTHS[d]} />
      )

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips':
      return <WAxis scale={scale} orientation="left" showDomain />

    default:
      return null
  }
}

const Circle = ({ datum, cx, cy, r, style }) => {
  return (
    <animated.circle
      cx={cx}
      cy={cy}
      r={r}
      style={{
        fill: 'red',
        // stroke: 'white',
        ...style,
      }}
    >
      <title>{datum.name}</title>
    </animated.circle>
  )
}

const scales = ({ stage, chartHeight, chartWidth, xA, yA }) => {
  switch (stage) {
    case 'start':
      return [
        scalePoint()
          .range([0, chartWidth])
          .domain(data.map(d => d.year + ''))
          .padding(0.5),

        scalePoint()
          .range([0, chartHeight])
          .domain(range(12).map(d => `${d}`))
          .padding(0.5),

        identity,
      ]

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips':
      return [
        scaleTime()
          // @ts-ignore
          .domain(extent(data, xA))
          .range([0, chartWidth]),

        scaleLinear()
          .domain(
            //@ts-ignore
            extent(data, yA),
          )
          .range([chartHeight, 0])
          .nice(),

        identity,
      ]

    case 'hairdd':
      const nodes: any[] = clone(data)
      const counts = groupBy(nodes, d => d.hair)
      const radiusScale = scalePow()
        .exponent(0.5)
        .domain(extent(Object.entries(counts).map(([key, val]) => val.length)))
        .range([0, Math.min(chartHeight, chartWidth) / 2])
      const circles = Object.entries(counts).map(([key, val]) => ({
        // r: Math.ceil(Math.sqrt(val.length / Math.PI)),
        // r: val.length,
        r: radiusScale(val.length),
        key: key,
      }))
      const packed = packSiblings(circles)

      console.log('p', packed)
      const inner = Object.entries(counts).reduce(
        (acc, [key, val]) => ({
          ...acc,
          [key]: packSiblings(val.map(d => ({ ...d, r: 3 }))),
        }),
        {},
      )
      console.log('inner', inner)

      return [
        d =>
          (inner[d.hair].find(n => n.name === d.name)?.x ?? 0) +
          (packed.find(p => p.key === d.hair)?.x ?? 0) +
          chartWidth / 2,
        d =>
          (inner[d.hair].find(n => n.name === d.name)?.y ?? 0) +
          (packed.find(p => p.key === d.hair)?.y ?? 0) +
          chartHeight / 2,
        scaleOrdinal()
          .domain([
            'Blonde',
            'Brunette',
            'Black',
            'Red',
            'Auburn',
            'Hazel',
            'null',
          ])
          .range([
            'yellow',
            'brown',
            'black',
            'red',
            'orange',
            'olivedrab',
            'gray',
          ]),
      ]

    case 'hair': {
      const nodes: any[] = clone(data)

      const count = groupBy(nodes, d => d.hair)
      // @ts-ignore
      const pieLayout = pie().value(([k, arr]) => arr.length)(toPairs(count))
      console.log('pie', pieLayout)

      // const arcG = arc().innerRadius(0).outerRadius(100)
      const arcG = arc()
        .innerRadius(100)
        .outerRadius(Math.min(chartHeight, chartWidth) / 2)
      // @ts-ignore
      const centers = pieLayout.map(d => {
        // @ts-ignore
        const [x, y] = arcG.centroid(d)
        return [x + chartWidth / 2, y + chartHeight / 2]
      })

      console.log('centers', centers)

      const simulation = forceSimulation(nodes)
        // .force('x', forceX(chartWidth / 2))
        // .force('y', forceY(chartHeight / 2))
        .force('collide', forceCollide(2 + 1))
        .force('cluster', custering(0.6))
      // .force(
      //   'radial',
      //   forceRadial(100, chartWidth / 2, chartHeight / 2).strength(1),
      // )
      // .stop()

      // for (let [i, c] of centers.entries()) {
      //   simulation.force(
      //     i + '-x',
      //     forceX(c[0]).strength(d =>
      //       //@ts-ignore
      //       d.hair === pieLayout[i].data[0] ? 1 : 0,
      //     ),
      //   )
      //   simulation.force(
      //     i + '-y',
      //     forceY(c[1]).strength(d =>
      //       //@ts-ignore
      //       d.hair === pieLayout[i].data[0] ? 1 : 0,
      //     ),
      //   )
      // }

      simulation.stop()

      function clustering(alpha) {
        nodes.forEach(function (d) {
          var cluster = clusters[d.cluster]
          if (cluster === d) return
          var x = d.x - cluster.x,
            y = d.y - cluster.y,
            l = Math.sqrt(x * x + y * y),
            r = d.r + cluster.r
          if (l !== r) {
            l = ((l - r) / l) * alpha
            d.x -= x *= l
            d.y -= y *= l
            cluster.x += x
            cluster.y += y
          }
        })
      }
      // for (let i = 0; i < 800; ++i) simulation.tick()
      let prev = 0

      for (
        let i = 0,
          n = Math.ceil(
            Math.log(simulation.alphaMin()) /
              Math.log(1 - simulation.alphaDecay()),
          );
        i < n;
        ++i
      ) {
        const pct = i / n
        if (pct - prev > 0.02) {
          prev = pct
        }

        simulation.tick()
      }

      return [
        d => nodes.find(n => d.name === n.name)?.x,
        d => nodes.find(n => d.name === n.name)?.y,
        scaleOrdinal()
          .domain(['Blonde', 'Brunette', 'Black', 'Red', 'Auburn', 'Hazel'])
          .range(['yellow', 'brown', 'black', 'red', 'orange', 'olivedrab']),
      ]
    }

    default:
      return [identity, identity]
  }
}

const accessors = stage => {
  switch (stage) {
    case 'start':
      return [d => d.year.toString(), d => d.month.toString(), d => 'pink']
    case 'mateAge':
      return [d => d.date, d => d.mateAge, d => 'pink']
    case 'height':
      return [d => d.date, d => d.height, d => 'pink']
    case 'weight':
      return [d => d.date, d => d.weight, d => 'pink']
    case 'bust':
      return [d => d.date, d => d.measurements?.bust, d => 'pink']
    case 'waist':
      return [d => d.date, d => d.measurements?.waist, d => 'pink']
    case 'hips':
      return [d => d.date, d => d.measurements?.hips, d => 'pink']
    case 'hair':
      return [identity, identity, d => d.hair]
    default:
      return [identity, identity, identity]
  }
}

import loessData from '../../loess.json'
import { area, line, pie, arc } from 'd3-shape'

const LOESS = ({ stage, sX, sY, yA }) => {
  const ld = loessData.find(d => d.key === stage)

  if (!ld) return null

  const {
    loess: { fitted, halfwidth },
  } = ld

  const dd = get(accessors(stage)[1])

  return (
    <>
      <Path
        data={dd.map((d, i) => [
          sX(d[0]),
          sY(fitted[i] - halfwidth[i]),
          sY(fitted[i] + halfwidth[i]),
        ])}
        // @ts-ignore
        generator={area()
          .x(d => d[0])
          .y0(d => d[1])
          // @ts-ignore
          .y1(d => d[2])}
        style={{
          opacity: 0.4,
          fill: 'gray',
        }}
      />
      <Path
        data={dd.map((d, i) => [sX(d[0]), sY(fitted[i])])}
        // @ts-ignore
        generator={line()}
        style={{
          stroke: 'red',
          strokeWidth: 4,
          fill: 'none',
          opacity: 0.6,
        }}
      />
    </>
  )
}

const Viz = ({ stage }) => {
  console.log('viz rendering', stage)

  const { chartHeight, chartWidth } = usePlotContext()

  const [xA, yA, cA] = React.useMemo(() => accessors(stage), [stage])
  const [sX, sY, sC] = React.useMemo(
    () =>
      scales({
        stage,
        chartHeight,
        chartWidth,
        xA,
        yA,
      }),
    [stage, chartHeight, chartWidth, xA, yA],
  )

  // @ts-ignore
  const transition = useTransition(
    data,
    d => `${d.name}-${d.year}-${d.month}`,
    {
      from: {
        opacity: 0,
        // @ts-ignore
        r: 0,
        cx: 0,
        cy: 0,
        fill: 'pink',
      },
      enter: d => {
        if (!yA(d)) {
          return {
            opacity: 0,
          }
        }

        return {
          opacity: 0.7,
          r: 2,
          cx: sX(xA(d)),
          cy: sY(yA(d)),
          fill: sC(cA(d)),
        }
      },
      update: d => {
        if (!yA(d)) {
          return {
            opacity: 0,
          }
        }

        return {
          cx: sX(xA(d)),
          cy: sY(yA(d)),
          r: 2,
          opacity: 0.7,
          fill: sC(cA(d)),
        }
      },
      leave: d => ({
        r: 0,
        opacity: 0,
      }),
      // config: {
      //   duration: 3000,
      // },
      unique: true,
      // trail: 1,
      // immediate: true,
    },
  )

  return (
    <>
      {stage !== 'hair' && (
        <>
          <XAxis scale={sX} stage={stage} />
          <YAxis scale={sY} stage={stage} />
        </>
      )}
      {/* {stage === 'hair' && <Pie />} */}
      {transition.map(({ item, key, state, props }) => {
        return (
          <Circle
            key={key}
            // @ts-ignore
            cx={props.cx}
            // @ts-ignore
            cy={props.cy}
            // @ts-ignore
            r={props.r}
            style={{
              fill: props.fill,
              opacity: props.opacity,
            }}
            datum={item}
          />
        )
      })}
      {!!packed &&
        packed.map(p => (
          <circle
            key={p.key}
            r={p.r}
            cx={p.x + chartWidth / 2}
            cy={p.y + chartHeight / 2}
            fill="white"
            opacity={0.5}
            data-key={p.key}
          />
        ))}
      {['mateAge', 'height', 'weight', 'bust', 'waist', 'hips'].includes(
        stage,
      ) && <LOESS sX={sX} sY={sY} stage={stage} yA={yA} />}
    </>
  )
}

const STAGES = [
  'start',

  'mateAge',
  'height',
  'weight',
  'bust',
  'waist',
  'hips',

  'hair',
]

const Scatter = () => {
  const [stage, setStage] = React.useState('hips')
  console.log('scatter rendering')

  return (
    <div
      style={{
        border: '2px solid red',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '10vh',
          border: '2px solid blue',
          height: '80vh',
          width: '70vw',
        }}
      >
        <FlexPlot margin={100}>
          <Viz stage={stage} />
        </FlexPlot>
      </div>
      <div
        style={{
          height: '100vh',
          marginLeft: '70vw',
        }}
      >
        <button
          onClick={() =>
            setStage(
              // STAGES[(STAGES.findIndex(s => s === stage) + 1) % STAGES.length],
              stage === 'hair' ? 'bust' : 'hair',
            )
          }
        >
          {stage}
        </button>
      </div>
      <div
        style={{
          height: '100vh',
          marginLeft: '70vw',
        }}
      >
        goodbye
      </div>
    </div>
  )
}

export default hot(module)(Scatter)
