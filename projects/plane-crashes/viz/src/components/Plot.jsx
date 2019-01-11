import React from 'react'
import {
  FlexibleWidthXYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Crosshair,
  MarkSeries,
} from 'react-vis'

import { white30, white80, white100 } from '../colors'

const Plot = ({
  data,
  crosshairSeries,
  crosshair = [],
  setCrosshair,
  xAxis = {},
  yAxis = {},
  crosshairProps = {},
  children,
  width,
  ...otherProps
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <div style={{ width: width ? width : '100vw' }}>
      <FlexibleWidthXYPlot
        margin={{ bottom: 100 }}
        onMouseLeave={() => {
          setCrosshair([])
        }}
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
          color="transparent"
          onNearestX={(val, { index }) => {
            setCrosshair([val, val])
          }}
          animation={false}
        />
        <XAxis
          style={{
            title: {
              fill: white100,
              fontSize: '0.75rem',
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
              fontSize: '0.75rem',
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
      </FlexibleWidthXYPlot>
    </div>
  </div>
)

import { compose, withState, pure } from 'recompose'

export default compose(
  pure,
  withState('crosshair', 'setCrosshair', []),
)(Plot)
