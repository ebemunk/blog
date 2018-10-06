import React from 'react'
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  Crosshair,
  VerticalBarSeries,
  LineSeries,
} from 'react-vis'

const Bar = ({
  data,
  crosshair,
  setCrosshair,
  remember,
  setRemember,
  ...otherProps
}) => (
  <XYPlot
    height={250}
    width={250}
    margin={{ bottom: 100 }}
    onMouseLeave={() => {
      if (!remember) setCrosshair([])
    }}
    onClick={() => (remember ? setRemember(false) : setRemember(true))}
    {...otherProps}
  >
    <Crosshair
      values={crosshair}
      itemsFormat={d =>
        d.map(dd => ({
          title: 'y',
          value: dd.y,
        }))
      }
    />
    <VerticalGridLines />
    <HorizontalGridLines />
    <XAxis tickLabelAngle={-90} />
    <YAxis />
    <LineSeries
      data={data}
      onNearestX={val => {
        if (!remember) setCrosshair([val])
      }}
    />
    {/* <VerticalBarSeries
      data={data}
      onNearestX={val => {
        if (!remember) setCrosshair([val])
      }}
    /> */}
  </XYPlot>
)

import { compose, withState, pure } from 'recompose'

export default compose(
  pure,
  withState('crosshair', 'setCrosshair', []),
  withState('remember', 'setRemember', false),
)(Bar)
