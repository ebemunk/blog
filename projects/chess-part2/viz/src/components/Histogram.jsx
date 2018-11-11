import React from 'react'
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Crosshair,
  VerticalBarSeries,
} from 'react-vis'
import { scaleOrdinal } from 'd3-scale'

const white30 = 'rgba(255,255,255,0.3)'
const white60 = 'rgba(255,255,255,0.6)'
const white80 = 'rgba(255,255,255,0.8)'
const white100 = 'rgba(255,255,255,1)'

const seasonColor = scaleOrdinal([
  '#0081bd',
  '#7a7ed3',
  '#ce70c7',
  '#ff669a',
  '#ff7a5b',
  '#ffa600',
])

const Histogram = ({
  data,
  crosshair = [],
  setCrosshair,
  remember = false,
  setRemember,
  xAxis = {},
  yAxis = {},
  crosshairProps = {},
  ...otherProps
}) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <XYPlot
      height={250}
      width={250}
      margin={{ bottom: 100 }}
      onMouseLeave={() => {
        if (!remember) setCrosshair([])
      }}
      onClick={() => (remember ? setRemember(false) : setRemember(true))}
      style={{
        flexShrink: 0,
      }}
      animation
      {...otherProps}
    >
      <Crosshair values={crosshair} {...crosshairProps} />
      <VerticalGridLines style={{ stroke: white30 }} />
      <HorizontalGridLines style={{ stroke: white30 }} />
      <VerticalBarSeries
        data={data}
        onNearestX={d => {
          if (remember) return
          setCrosshair([d])
        }}
        color={seasonColor(0)}
        stroke="#282c34"
      />
      <XAxis
        style={{
          title: {
            fill: white80,
            fontSize: '1.5rem',
          },
          ticks: {
            fill: white60,
          },
          line: {
            strokeWidth: 1,
          },
        }}
        {...xAxis}
      />
      <YAxis
        style={{
          title: {
            fill: white80,
            fontSize: '1.5rem',
          },
          ticks: {
            fill: white60,
          },
          line: {
            strokeWidth: 1,
          },
        }}
        {...yAxis}
      />
    </XYPlot>
  </div>
)

import { compose, withState, pure } from 'recompose'

export default compose(
  pure,
  withState('crosshair', 'setCrosshair', []),
  withState('remember', 'setRemember', false),
)(Histogram)
