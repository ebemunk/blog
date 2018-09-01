import React, { Component } from 'react'
import * as d3 from 'd3'
import classnames from 'classnames'
import { NodeGroup } from 'react-move'

import Axis from 'components/Axis'
import Interaction from './Interaction'

import style from './HorizontalBarChart.css'

export default class HorizontalBarChart extends Component {
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
      .range([0, width - padding.right - padding.left])
      .domain(linearDomain)

    const bandScale = d3
      .scaleBand()
      .range([0, height * data.length])
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
      barStyle,
      interactionProps,
    } = this.props

    const { linearScale, bandScale } = this.state

    const chartWidth = width - padding.left - padding.right
    const chartHeight = height * data.length

    const voro = d3
      .voronoi()
      .y(d => bandScale(d.key) + bandScale.bandwidth() / 2)
      .x(d => 0)
      .extent([[0, 0], [chartWidth, chartHeight]])

    return (
      <svg
        width={width}
        height={height * data.length + padding.top + padding.bottom}
        className={className}
      >
        <g transform={`translate(${padding.left}, ${padding.top})`}>
          <Axis
            orientation="top"
            scale={linearScale}
            tickSize={-height * data.length}
            {...linearAxisProps}
            className={classnames(style.linearAxis, linearAxisProps.className)}
          />
          <Axis
            orientation="left"
            scale={bandScale}
            tickSize={3}
            {...bandAxisProps}
            className={classnames(style.bandAxis, bandAxisProps.className)}
          />
          <NodeGroup
            data={data}
            keyAccessor={d => d.key}
            start={() => ({
              width: 0,
            })}
            enter={d => ({
              width: [linearScale(d.value)],
              timing: { duration: 250 },
            })}
            update={d => ({
              width: [linearScale(d.value)],
              timing: { duration: 250 },
            })}
            leave={d => ({
              width: 0,
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
                    const { x, width } = node.state
                    return (
                      <rect
                        y={bandScale(key)}
                        x={0}
                        width={width}
                        height={height - 2}
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
            scales={{ y: bandScale, x: linearScale }}
            width={chartWidth}
            height={chartHeight}
            yTickFormat={bandAxisProps.tickFormat}
            xTickFormat={linearAxisProps.tickFormat}
            bandwidth={bandScale.bandwidth()}
            {...interactionProps}
          />
        </g>
      </svg>
    )
  }
}
