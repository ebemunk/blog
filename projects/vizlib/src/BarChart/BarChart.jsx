import React from 'react'
import { scaleLinear, scaleBand, extent } from 'd3'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import Axis from '../Axis'
import Interaction from './Interaction'
import VerticalBars from './VerticalBars'
import HorizontalBars from './HorizontalBars'

import style from './BarChart.css'

export default class BarChart extends React.PureComponent {
  state = {
    linearScale: scaleLinear(),
    bandScale: scaleBand(),
    chartHeight: 0,
    chartWidth: 0,
  }

  static getDerivedStateFromProps({
    data,
    width,
    height,
    padding,
    horizontal,
  }) {
    const chartHeight = height - padding.top - padding.bottom
    const chartWidth = width - padding.left - padding.right

    const linearRange = horizontal ? [0, chartWidth] : [chartHeight, 0]
    const linearExtent = extent(data, d => d.value)
    const linearScale = scaleLinear()
      .range(linearRange)
      .domain([Math.min(0, linearExtent[0]), linearExtent[1]])
      .nice()

    const bandRange = horizontal ? [0, chartHeight] : [0, chartWidth]
    const bandScale = scaleBand()
      .range(bandRange)
      .padding(0.1)
      .domain(data.map(d => d.key))

    return {
      linearScale,
      bandScale,
      chartHeight,
      chartWidth,
    }
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
      horizontal,
    } = this.props

    const { linearScale, bandScale, chartHeight } = this.state

    // const voro = d3
    //   .voronoi()
    //   .x(d => bandScale(d.key) + bandScale.bandwidth() / 2)
    //   .y(d => 0)
    //   .extent([[0, 0], [chartWidth, chartHeight]])

    return (
      <svg width={width} height={height} className={className}>
        <g transform={`translate(${padding.left}, ${padding.top})`}>
          <Axis
            orientation={horizontal ? 'top' : 'left'}
            scale={linearScale}
            {...linearAxisProps}
            className={classnames(style.linearAxis, linearAxisProps.className)}
          />
          <Axis
            orientation={horizontal ? 'left' : 'bottom'}
            scale={bandScale}
            transform={`translate(0, ${horizontal ? 0 : chartHeight})`}
            {...bandAxisProps}
            className={classnames(style.bandAxis, bandAxisProps.className)}
          />
          {!horizontal && (
            <VerticalBars
              data={data}
              linearScale={linearScale}
              bandScale={bandScale}
              barStyle={barStyle}
            />
          )}
          {horizontal && (
            <HorizontalBars
              data={data}
              linearScale={linearScale}
              bandScale={bandScale}
              barStyle={barStyle}
            />
          )}
          {/* <Interaction
            polygons={voro.polygons(data)}
            scales={{ x: bandScale, y: linearScale }}
            width={chartWidth}
            height={chartHeight}
            xTickFormat={bandAxisProps.tickFormat}
            yTickFormat={linearAxisProps.tickFormat}
            bandwidth={bandScale.bandwidth()}
            {...interactionProps}
          /> */}
        </g>
      </svg>
    )
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
  }

  static defaultProps = {
    width: 600,
    height: 400,
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
    linearAxisProps: {
      tickFormat: x => x,
    },
    bandAxisProps: {
      tickFormat: x => x,
    },
    horizontal: false,
  }
}
