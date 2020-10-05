//@ts-ignore
import forceInABox from 'force-in-a-box'
import { identity, clone } from 'remeda'

import { scalePoint, scaleTime, scaleLinear, scaleOrdinal } from 'd3-scale'
import { range, extent } from 'd3-array'
import { forceSimulation, forceCollide } from 'd3-force'

import { data } from '../data'

const scales = ({ stage, chartHeight, chartWidth, xA, yA }) => {
  switch (stage) {
    case 'start': {
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
    }

    case 'mateAge':
    case 'height':
    case 'weight':
    case 'bust':
    case 'waist':
    case 'hips': {
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
    }

    case 'hair':
    case 'ethnicity':
    case 'breasts': {
      const nodes: any[] = clone(data)

      const simulation = forceSimulation(nodes)
        .force(
          'pls',
          forceInABox()
            .strength(0.1) // Strength to cluster center
            .template('force') // Either treemap or force
            .groupBy(stage) // Node attribute to group
            .links([]) // If you have links you can also use them
            .forceNodeSize(d => 3)
            .size([chartWidth, chartHeight]),
        )
        .force(
          'collide',
          forceCollide()
            .radius(d => 2 + 1)
            .strength(0.8),
        ) //Original collide function
      simulation.stop()

      for (
        let i = 0,
          n = Math.ceil(
            Math.log(simulation.alphaMin()) /
              Math.log(1 - simulation.alphaDecay()),
          );
        i < n;
        ++i
      ) {
        simulation.tick()
      }

      const csD = {
        hair: ['Blonde', 'Brunette', 'Black', 'Red', 'Auburn', 'Hazel', null],
        ethnicity: ['Caucasian', 'Black', 'Latin', 'Asian', 'Mixed', 'Other'],
        breasts: ['Real/Natural', 'Fake/Enhanced', undefined],
      }
      const csR = {
        hair: [
          'yellow',
          'brown',
          'black',
          'red',
          'orange',
          'olivedrab',
          'grey',
        ],
        ethnicity: ['white', 'black', 'brown', 'yellow', 'purple', 'salmon'],
        breasts: ['green', 'red', 'grey'],
      }

      const colorScale = scaleOrdinal().domain(csD[stage]).range(csR[stage])

      return [
        d => nodes.find(n => d.name === n.name)?.x,
        d => nodes.find(n => d.name === n.name)?.y,
        colorScale,
      ]
    }

    default:
      return [identity, identity]
  }
}

export default scales
