import React from 'react'
import classnames from 'classnames'

import { seasonColor } from 'utils'
import BarChart from 'components/BarChart'

import css from './BarViz.css'

const BarViz = ({ data, linearScaleProps, y0Label, y1Label, xLabel }) => (
  <React.Fragment>
    <div className={css.labels}>
      {y0Label && (
        <div className={css.yLabelWrap}>
          <span className={css.rotatedLabel}>{y0Label}</span>
        </div>
      )}
      <BarChart
        className={classnames(css.chart, {
          [css.midLabels]: data.length < 25,
        })}
        width={900}
        height={300}
        padding={{
          top: 5,
          left: 30,
          right: 15,
          bottom: 30,
        }}
        data={data}
        interactive
        bandAxisProps={{
          className: css.bandAxis,
          tickSize: 0,
          tickFormat: key => {
            const [season, episode] = key.split('-')
            if (data.length < 25) {
              return `S${season}-E${episode}`
            }
            if (episode !== '1') return
            return `Season ${season}`
          },
        }}
        linearScaleProps={linearScaleProps}
        linearAxisProps={{
          className: css.linearAxis,
          tickFormat: x => x,
        }}
        barStyle={({ key }) => ({
          fill: seasonColor(key.split('-')[0] - 1),
        })}
        interactionProps={{
          xTickFormat: key => {
            const [season, episode] = key.split('-')
            return `S${season}-E${episode}`
          },
        }}
      />
      {y1Label && (
        <div className={css.yLabelWrap}>
          <span className={css.rotatedLabel}>{y1Label}</span>
        </div>
      )}
    </div>
    {xLabel && (
      <div className={css.xLabelWrap}>
        <span className={css.centeredLabel}>{xLabel}</span>
      </div>
    )}
  </React.Fragment>
)

export default BarViz
