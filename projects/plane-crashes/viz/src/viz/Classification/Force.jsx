import React from 'react'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { memoizeWith, identity } from 'ramda'

import FlexPlot from '../../vizlib/FlexPlot'

import Interaction from './Interaction'
import Bar from './Bar'
import runSimulation from './simulation'

const getSimulation = memoizeWith(identity, runSimulation)

const Force = ({ hint, setHint }) => (
  <React.Fragment>
    <div
      style={{
        display: 'flex',
      }}
    >
      <div style={{ flexBasis: '50%' }}>
        <FlexPlot
          height={400}
          margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        >
          {({ chartHeight, chartWidth }) => {
            const { nodes, links, radius } = getSimulation({
              chartHeight,
              chartWidth,
            })

            const opacity = scaleLinear()
              .domain(extent(links.map(d => d.count)))
              .range([0.1, 1])

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
                  {nodes.map(node => (
                    <g
                      transform={`translate(${node.x}, ${node.y})`}
                      key={node.id}
                    >
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
                  nodes={nodes}
                  r={radius}
                  links={links}
                  opacity={opacity}
                  hint={hint}
                  setHint={setHint}
                />
              </React.Fragment>
            )
          }}
        </FlexPlot>
      </div>
      <div style={{ flexBasis: '50%' }}>
        <Bar hint={hint ? hint.id : null} />
      </div>
    </div>
  </React.Fragment>
)

import { compose, withState, lifecycle } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  withState('hint', 'setHint', null),
)(Force)
