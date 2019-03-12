import React from 'react'
import ReactDOM from 'react-dom'
import {
  forceSimulation,
  forceLink,
  forceCenter,
  forceManyBody,
  forceCollide,
  forceX,
  forceRadial,
} from 'd3-force'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'

import data from '../../data/classification-links.json'

import FlexPlot from '../../vizlib/FlexPlot'
import Voronoi from '../../vizlib/Voronoi'

const getNodes = () => data.nodes.map(d => ({ ...d }))
const getLinks = () => data.links.map(d => ({ ...d }))

console.log('wa', getNodes(), getLinks())

import { compose, withState } from 'recompose'

import Tooltip from '../../vizlib/Tooltip'
import getVirtualReference from '../../vizlib/virtualReference'
import { Popper, Manager, Reference } from 'react-popper'

const Interaction = compose(
  //
  withState('hint', 'setHint', null),
)(({ nodes, hint, setHint, r, links }) => {
  const shownLinks = links.filter(
    d => d.source.id === hint.id || d.target.id === hint.id,
  )

  const opacity = scaleLinear()
    .domain(extent(shownLinks.map(d => d.count)))
    .range([0.5, 1])

  return (
    <React.Fragment>
      <Voronoi
        points={nodes.map(d => {
          const arr = [d.x, d.y]
          arr.id = d.id
          arr.links = d.links
          return arr
        })}
        onMouseEnter={(e, mouse, polygon) => {
          setHint({
            x: polygon.data[0],
            y: polygon.data[1],
            r: r(polygon.data.links),
            id: polygon.data.id,
          })
        }}
        onMouseLeave={() => {
          setHint(null)
        }}
      />

      {hint &&
        shownLinks.map(link => (
          <line
            key={`${link.source.id}-${link.target.id}`}
            x1={link.source.x}
            y1={link.source.y}
            x2={link.target.x}
            y2={link.target.y}
            style={{
              stroke: 'white',
              opacity: opacity(link.count),
              pointerEvents: 'none',
            }}
          />
        ))}

      {hint && (
        <Manager>
          <Reference>
            {({ ref }) => (
              <circle
                ref={ref}
                cx={hint.x}
                cy={hint.y}
                r={hint.r}
                style={{
                  fill: 'orange',
                  pointerEvents: 'none',
                }}
              />
            )}
          </Reference>
          {ReactDOM.createPortal(
            <Popper placement="top">
              {({ ref, style, placement }) => (
                <Tooltip
                  ref={ref}
                  style={style}
                  placement={placement}
                  key={hint.id}
                >
                  {hint.id}
                </Tooltip>
              )}
            </Popper>,
            document.querySelector('body'),
          )}
        </Manager>
      )}
    </React.Fragment>
  )
})

const Force = ({ hint, setHint }) => (
  <React.Fragment>
    <FlexPlot
      height={400}
      margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
      onMouseEnter={() => {
        setHint(true)
      }}
      onMouseLeave={() => {
        setHint(false)
      }}
    >
      {({ chartHeight, chartWidth }) => {
        const nodes = getNodes()
        const links = getLinks()

        const opacity = scaleLinear()
          .domain(extent(links.map(d => d.count)))
          .range([0.1, 1])

        const radius = scaleLinear()
          .domain(extent(nodes.map(d => d.links)))
          .range([3, 25])

        const simulation = forceSimulation(nodes)
          .force(
            'link',
            forceLink(links).id(d => d.id),
            //.distance(200),
          )
          .force('center', forceCenter(chartWidth / 2, chartHeight / 2))
          .force('collide', forceCollide(d => radius(d.links) * 2))
          //.force('radial', forceRadial(100, chartWidth / 2, chartHeight / 2))
          //.force('manybody', forceManyBody())
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
              {!hint &&
                links.map(link => (
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
                      opacity: hint ? 0.5 : 1,
                    }}
                  />
                  <title>{node.id}</title>
                </g>
              ))}
            </g>
            <Interaction
              nodes={simulation.nodes()}
              r={radius}
              links={links}
              opacity={opacity}
            />
          </React.Fragment>
        )
      }}
    </FlexPlot>
  </React.Fragment>
)

import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  withState('hint', 'setHint', false),
)(Force)
