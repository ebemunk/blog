import React from 'react'
import classnames from 'classnames'

import { seasonColor } from 'utils'
import BarChart from 'components/BarChart'

import css from './BarViz.css'

const BarViz = ({
  data,
  y0Label,
  y1Label,
  xLabel,
  linearAxisProps,
  ...otherProps
}) => (
  <React.Fragment>
    <div className={css.labels}>
      <div className={css.yLabelWrap}>
        <span className={css.rotatedLabel}>{y0Label}</span>
      </div>
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
        linearAxisProps={{
          className: css.linearAxis,
          tickFormat: x => x,
          ...linearAxisProps,
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
        {...otherProps}
      />
      <div className={css.yLabelWrap}>
        <span className={css.rotatedLabel}>{y1Label}</span>
      </div>
    </div>
    <div className={css.xLabelWrap}>
      <span className={css.xLabel}>{xLabel}</span>
    </div>
  </React.Fragment>
)

export default BarViz
