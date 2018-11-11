import React from 'react'
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Crosshair,
  MarkSeries,
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

const Plot = ({
  data,
  crosshairSeries,
  crosshair = [],
  setCrosshair,
  remember = false,
  setRemember,
  xAxis = {},
  yAxis = {},
  crosshairProps = {},
  children,
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
      onClick={() => setRemember(!remember)}
      style={{
        flexShrink: 0,
      }}
      animation
      {...otherProps}
    >
      <Crosshair
        values={crosshair}
        style={{
          line: {
            background: 'white',
          },
        }}
        {...crosshairProps}
      />
      <VerticalGridLines style={{ stroke: white30 }} />
      <HorizontalGridLines style={{ stroke: white30 }} />
      {children}
      <MarkSeries
        size={0}
        data={data}
        color="red"
        onNearestX={(val, { index }) => {
          if (!remember) setCrosshair([val])
        }}
      />
      <XAxis
        style={{
          title: {
            fill: white100,
            fontSize: '1.25rem',
          },
          ticks: {
            fill: white80,
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
            fill: white100,
            fontSize: '1.25rem',
          },
          ticks: {
            fill: white80,
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
)(Plot)
