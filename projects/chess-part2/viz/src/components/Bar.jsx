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

const Plot = ({
  data,
  crosshair,
  setCrosshair,
  remember,
  setRemember,
  children,
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
    <Crosshair values={crosshair} />
    <VerticalGridLines />
    <HorizontalGridLines />
    {/* <XAxis tickLabelAngle={-90} /> */}
    <XAxis />
    <YAxis />
    {React.Children.map(children, child => {
      if (!child) return null
      return React.cloneElement(child, {
        onNearestX: (val, { index }) => {
          setCrosshair([data.white[index], data.black[index]])
        },
      })
    })}
  </XYPlot>
)

import { compose, withState, pure } from 'recompose'

export default compose(
  pure,
  withState('crosshair', 'setCrosshair', []),
  withState('remember', 'setRemember', false),
)(Plot)
