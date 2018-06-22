import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import { schemeSet3 } from 'd3-scale-chromatic'
import Animate from 'react-move/Animate'
import * as R from 'ramda'
import classnames from 'classnames'

import Circle from './Circle'
import Worker from './ForceSimulation.worker'
import style from './CharCooccurrence.css'

export default class CharCooccurrence extends React.Component {
  state = {
    loading: 0,
    nodes: [],
    links: [],
    colorScale: d3.scaleOrdinal(schemeSet3),
    linkOpacityScale: d3.scaleLinear(),
    nodeSizeScale: d3.scaleLinear(),
    transform: 'translate(0,0) scale(1)',
    highlight: false,
  }

  componentDidMount() {
    this.worker = new Worker()
    this.worker.onmessage = this.onmessage
  }

  onmessage = event => {
    const {
      data: { type, payload },
    } = event

    switch (type) {
      case 'TICK':
        this.setState({
          loading: payload,
        })
        break
      case 'END':
        this.setState(
          {
            loading: 100,
            nodes: payload.nodes,
            links: payload.links,
            nodeSizeScale: d3
              .scaleLinear()
              .range([5, 30])
              .domain(d3.extent(payload.nodes.map(d => d.numLinksTo))),
            linkOpacityScale: d3
              .scaleLinear()
              .range([0.2, 0.8])
              .domain(d3.extent(payload.links.map(d => d.value))),
          },
          () => {
            const bbox = this.nodesDom.getBBox()
            const bounds = [
              [bbox.x, bbox.y],
              [bbox.x + bbox.width, bbox.y + bbox.height],
            ]
            const [[x0, y0], [x1, y1]] = bounds
            const width = 960
            const height = 500
            const dx = x1 - x0
            const dy = y1 - y0
            const x = (x0 + x1) / 2
            const y = (y0 + y1) / 2
            const scale = 0.9 / Math.max(dx / width, dy / height)
            const translate = [width / 2 - scale * x, height / 2 - scale * y]
            if (
              translate !== this.state.translate ||
              scale !== this.state.scale
            ) {
              this.setState({
                transform: `translate(${translate.join(',')}) scale(${scale})`,
              })
            }
          },
        )
        break
    }
  }

  componentDidUpdate(prevProps) {
    const {
      data: { nodes, links },
    } = this.props
    const {
      data: { nodes: prevNodes, links: prevLinks },
    } = prevProps

    if (
      prevNodes.length === nodes.length &&
      prevLinks.length === links.length
    ) {
      return
    }

    console.log('didupdate')

    this.worker.postMessage({
      type: 'start',
      payload: {
        nodes,
        links,
      },
    })
  }

  render() {
    const {
      nodes,
      links,
      nodeSizeScale,
      linkOpacityScale,
      colorScale,
      transform,
      loading,
      tooltip,
      highlight,
    } = this.state

    console.log('render')

    const filteredLinks = links.filter(
      d => d.source.id === highlight || d.target.id === highlight,
    )
    const hLinks = filteredLinks.map(d => d.index)
    const hNodes = R.pipe(
      R.reduce((acc, val) => acc.concat([val.source.id, val.target.id]), []),
      R.uniq,
    )(filteredLinks)

    return (
      <React.Fragment>
        <div>Loading: {loading}</div>
        <svg height={500} width={960}>
          <g>
            {loading < 100 && <text>Loading: {loading}</text>}
            {loading < 100 && (
              <rect width={960} height={500} fill="white" opacity="0.7" />
            )}
            <Animate
              start={{
                transform: 'translate(0,0) scale(1)',
              }}
              update={{
                transform: [transform],
                timing: { duration: 750, delay: 250 },
              }}
            >
              {({ transform }) => (
                <g className={style.viewport} transform={transform}>
                  <g className={style.links}>
                    {links.map(
                      ({ index, source, target, value }) =>
                        (!highlight ||
                          (highlight && hLinks.includes(index))) && (
                          <line
                            x1={source.x}
                            y1={source.y}
                            x2={target.x}
                            y2={target.y}
                            strokeOpacity={linkOpacityScale(value)}
                            key={`${source.id}-${target.id}`}
                          />
                        ),
                    )}
                  </g>
                  <g className={style.nodes} ref={el => (this.nodesDom = el)}>
                    {nodes.map(node => (
                      <Circle
                        className={classnames({
                          [style.op]: !hNodes.includes(node.id) && highlight,
                        })}
                        cx={node.x}
                        cy={node.y}
                        fill={colorScale(node.id)}
                        r={nodeSizeScale(node.numLinksTo)}
                        key={node.id}
                        tooltip={node.id}
                        onClick={() =>
                          this.setState({
                            highlight: highlight === node.id ? false : node.id,
                          })
                        }
                      />
                    ))}
                  </g>
                </g>
              )}
            </Animate>
          </g>
        </svg>
      </React.Fragment>
    )
  }
}
