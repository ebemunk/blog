import React from 'react'
import ReactDOM from 'react-dom'
import * as d3 from 'd3'
import { schemeSet3 } from 'd3-scale-chromatic'
import * as R from 'ramda'
import classnames from 'classnames'

import EpisodeRangeSelector from 'components/EpisodeRangeSelector'

import ForceGraph from './ForceGraph'
import Worker from './ForceSimulation.worker'
import css from './CharCooccurrence.css'
import { color } from 'd3-color'

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
        // this.setState({
        //   loading: payload,
        // })
        break
      case 'END':
        this.setState(
          {
            loading: 100,
            nodes: payload.nodes,
            links: payload.links,
            nodeSizeScale: d3
              .scaleLinear()
              .range([5, 20])
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
                loading: false,
                highlight: false,
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

    this.worker.terminate()
    this.worker = new Worker()
    this.worker.onmessage = this.onmessage

    this.worker.postMessage({
      type: 'start',
      payload: {
        nodes,
        links,
      },
    })
    if (!this.state.loading) {
      this.setState({ loading: true })
    }
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

    const filteredLinks = links.filter(
      d => d.source.id === highlight || d.target.id === highlight,
    )
    const hLinks = filteredLinks.map(d => d.index)
    const hNodes = R.pipe(
      R.reduce((acc, val) => acc.concat([val.source.id, val.target.id]), []),
      R.uniq,
    )(filteredLinks)

    return (
      <div className={css.wrap}>
        <EpisodeRangeSelector width={960} />
        <svg
          height={500}
          width={960}
          className={classnames(css.svg, { [css.loading]: loading })}
        >
          <ForceGraph
            nodes={nodes}
            links={links}
            highlight={highlight}
            hNodes={hNodes}
            hLinks={hLinks}
            colorScale={colorScale}
            nodeSizeScale={nodeSizeScale}
            linkOpacityScale={linkOpacityScale}
            transform={transform}
            onNodeClick={id =>
              this.setState({
                highlight: highlight === id ? false : id,
              })
            }
            domRef={el => (this.nodesDom = el)}
          />
        </svg>
      </div>
    )
  }
}
