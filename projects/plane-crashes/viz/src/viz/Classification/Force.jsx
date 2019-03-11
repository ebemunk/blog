import React from 'react'
import ReactDOM from 'react-dom'
import {
  forceSimulation,
  forceLink,
  forceCenter,
  forceManyBody,
  forceCollide,
} from 'd3-force'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

import data from '../../data/classification-links.json'

import FlexPlot from '../../vizlib/FlexPlot'
import Voronoi from '../../vizlib/Voronoi'

const getNodes = () => data.nodes.map(d => ({ ...d }))
const getLinks = () => data.links.map(d => ({ ...d }))

import { compose, withState } from 'recompose'

import Tooltip from '../../vizlib/Tooltip'
import getVirtualReference from '../../vizlib/virtualReference'
import { Popper } from 'react-popper'

const Interaction = compose(
  //
  withState('hint', 'setHint', null),
)(({ nodes, hint, setHint }) => (
  <React.Fragment>
    <Voronoi
      points={nodes.map(d => {
        const arr = [d.x, d.y]
        arr.id = d.id
        return arr
      })}
      onMouseEnter={(e, mouse, polygon) => {
        setHint({
          mouse,
          polygon,
        })
      }}
      onMouseLeave={() => {
        setHint(null)
      }}
    />

    {hint &&
      ReactDOM.createPortal(
        <Popper
          placement="top"
          referenceElement={getVirtualReference({
            x: hint.polygon.data[0],
            y: hint.polygon.data[1],
          })}
        >
          {({ ref, style, placement }) => (
            <Tooltip ref={ref} style={style} placement={placement}>
              Classification: <strong>{hint.polygon.data.id}</strong>
            </Tooltip>
          )}
        </Popper>,
        document.querySelector('body'),
      )}
  </React.Fragment>
))

const Force = ({}) => (
  <React.Fragment>
    <FlexPlot height={500} margin={{ top: 0, bottom: 0, left: 0, right: 0 }}>
      {({ chartHeight, chartWidth }) => {
        const nodes = getNodes()
        const links = getLinks()

        const opacity = scaleLinear()
          .domain(extent(links.map(d => d.count)))
          .range([0.1, 1])

        const radius = scaleLinear()
          .domain(extent(nodes.map(d => d.links)))
          .range([2, 10])

        const simulation = forceSimulation(nodes)
          .force('link', forceLink(links).id(d => d.id))
          .force('center', forceCenter(chartWidth / 2, chartHeight / 2))
          .force('collide', forceCollide(d => radius(d.links)))
          .force('manybody', forceManyBody())
          .stop()

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

        console.log('foce render')

        return (
          <React.Fragment>
            <g>
              {links.map(link => (
                <line
                  key={`${link.source.id}-${link.target.id}`}
                  x1={link.source.x}
                  y1={link.source.y}
                  x2={link.target.x}
                  y2={link.target.y}
                  style={{
                    stroke: 'white',
                    opacity: opacity(link.count),
                  }}
                >
                  <title>
                    {link.source.id} - {link.target.id}
                  </title>
                </line>
              ))}
            </g>
            <g>
              {simulation.nodes().map(node => (
                <g transform={`translate(${node.x}, ${node.y})`} key={node.id}>
                  <circle
                    r={radius(node.links)}
                    style={{
                      fill: 'red',
                    }}
                  />
                  <title>{node.id}</title>
                </g>
              ))}
            </g>
            <Interaction nodes={simulation.nodes()} />
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </React.Fragment>
)

import { hot } from 'react-hot-loader'

export default compose(hot(module))(Force)
