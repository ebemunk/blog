import React, { useState } from 'react'
import { scaleLinear } from 'd3-scale'
import { extent } from 'd3-array'
import { memoizeWith, identity } from 'ramda'

import FlexPlot from '../../vizlib/FlexPlot'
import ChartTitle from '../../vizlib/ChartTitle'
import { get8 } from '../../vizlib/colors'

import Interaction from './Interaction'
import Bar from './Bar'
import runSimulation from './simulation'

const getSimulation = memoizeWith(identity, runSimulation)

const color = get8()

const Force = ({ subtitle }) => {
  const [hint, setHint] = useState(null)

  return (
    <>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div style={{ flexBasis: '50%' }}>
          <ChartTitle
            title="How are classifications related to one another?"
            subtitle={
              subtitle ||
              'Radius shows number of links, link opacity shows commonality. Mouseover to highlight related items.'
            }
            style={{
              textAlign: 'center',
            }}
          />
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

              return (
                <>
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
                            fill: !hint ? color(node.id) : 'gray',
                            opacity: hint ? 0.5 : 1,
                          }}
                        />
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
                    color={color}
                  />
                  <g>
                    {nodes
                      .filter(d => !hint || (hint && hint.id !== d.id))
                      .filter(d => d.links > 13)
                      .map(node => (
                        <text
                          key={node.id}
                          x={node.x}
                          y={node.y}
                          style={{
                            fontSize: '10px',
                            fill: 'white',
                            textAnchor: 'middle',
                            textShadow: 'black 0 0 4px',
                            pointerEvents: 'none',
                          }}
                        >
                          {node.id}
                        </text>
                      ))}
                  </g>
                </>
              )
            }}
          </FlexPlot>
        </div>
        <div style={{ flexBasis: '50%' }}>
          <ChartTitle
            title={
              !hint
                ? 'Classifications for all crashes'
                : `Appears together with "${hint.id}"`
            }
            subtitle="Showing top 20 most common classifications"
            style={{ textAlign: 'center' }}
          />
          <Bar hint={hint ? hint.id : null} height={400} color={color} />
        </div>
      </div>
    </>
  )
}

import { compose } from 'recompose'
import { hot } from 'react-hot-loader'

export default compose(
  hot(module),
  React.memo,
)(Force)
