import React, { Component } from 'react'
import * as d3 from 'd3'
import classnames from 'classnames'
import { NodeGroup } from 'react-move'

import Axis from '../Axis'
import Interaction from './Interaction'

import style from './BarChart.css'

export default class BarChart extends Component {
  static defaultProps = {
    width: 480,
    height: 500,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    data: [
      { key: 'JACK', value: 134 },
      { key: 'KATE', value: 1121 },
      { key: 'QAYT', value: 821 },
      { key: 'JACQUEAUIAZXAUQX', value: 314 },
    ],
    barStyle: () => {},
    linearAxisProps: {},
    bandAxisProps: {},
    linearScaleProps: {},
  }

  state = {
    linearScale: d3.scaleLinear(),
    bandScale: d3.scaleBand(),
  }

  componentWillReceiveProps({
    data,
    width,
    height,
    padding,
    linearScaleProps,
  }) {
    const linearDomain = linearScaleProps.domain
      ? linearScaleProps.domain
      : [0, d3.max(data, d => d.value)]

    const linearScale = d3
      .scaleLinear()
      .range([height - padding.top - padding.bottom, 0])
      .domain(linearDomain)

    const bandScale = d3
      .scaleBand()
      .range([0, width - padding.right - padding.left])
      .padding(0.1)
      .domain(data.map(d => d.key))

    this.setState({
      linearScale,
      bandScale,
    })
  }

  render() {
    const {
      className,
      width,
      height,
      padding,
      data,
      linearAxisProps,
      bandAxisProps,
      interactionProps,
      barStyle,
    } = this.props

    const { linearScale, bandScale } = this.state

    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    const voro = d3
      .voronoi()
      .x(d => bandScale(d.key) + bandScale.bandwidth() / 2)
      .y(d => 0)
      .extent([[0, 0], [chartWidth, chartHeight]])

    return (
      <svg width={width} height={height} className={className}>
        <g transform={`translate(${padding.left}, ${padding.top})`}>
          <Axis
            orientation="left"
            scale={linearScale}
            tickSize={-width + padding.right + padding.left}
            {...linearAxisProps}
            className={classnames(style.linearAxis, linearAxisProps.className)}
          />
          <Axis
            orientation="bottom"
            scale={bandScale}
            tickSize={3}
            transform={`translate(0, ${height - padding.top - padding.bottom})`}
            {...bandAxisProps}
            className={classnames(style.bandAxis, bandAxisProps.className)}
          />
          <NodeGroup
            data={data}
            keyAccessor={d => d.key}
            start={() => ({
              y: height - padding.top - padding.bottom,
              height: 0,
            })}
            enter={d => ({
              y: [linearScale(d.value)],
              height: [
                height - padding.top - padding.bottom - linearScale(d.value),
              ],
              timing: { duration: 250 },
            })}
            update={d => ({
              y: [linearScale(d.value)],
              height: [
                height - padding.top - padding.bottom - linearScale(d.value),
              ],
              timing: { duration: 250 },
            })}
            leave={d => ({
              y: height - padding.top - padding.bottom,
              height: 0,
            })}
          >
            {nodeData => {
              return (
                <g>
                  {nodeData.map(node => {
                    const {
                      key,
                      data: { value },
                    } = node
                    const { y, height } = node.state
                    return (
                      <rect
                        x={bandScale(key)}
                        y={y}
                        width={bandScale.bandwidth()}
                        height={height}
                        className={style.bar}
                        key={key}
                        style={barStyle({ key, value })}
                      />
                    )
                  })}
                </g>
              )
            }}
          </NodeGroup>
          <Interaction
            polygons={voro.polygons(data)}
            scales={{ x: bandScale, y: linearScale }}
            width={chartWidth}
            height={chartHeight}
            xTickFormat={bandAxisProps.tickFormat}
            yTickFormat={linearAxisProps.tickFormat}
            bandwidth={bandScale.bandwidth()}
            {...interactionProps}
          />
        </g>
      </svg>
    )
  }
}
