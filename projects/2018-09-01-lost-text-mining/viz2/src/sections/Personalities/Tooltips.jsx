import React from 'react'
import { format } from 'd3'
import classnames from 'classnames'

import Tooltip from 'components/Tooltip'

import css from './Tooltips.css'

const Tooltips = ({
  low,
  lowDesc,
  label,
  desc,
  points,
  high,
  highDesc,
  trait_id,
}) => (
  <React.Fragment>
    {lowDesc && (
      <Tooltip placement="left-end" className={css.tooltip}>
        <div className={css.title}>{low}</div>
        <div>{lowDesc}</div>
      </Tooltip>
    )}
    <Tooltip placement="bottom" className={classnames(css.tooltip, css.wide)}>
      <div className={classnames(css.title, css.centered)}>{label}</div>
      {desc && (
        <div className={css.desc}>
          {trait_id.slice(0, 4) !== 'big5' && (
            <em>Individuals who score high:</em>
          )}{' '}
          {desc}
        </div>
      )}
      <div className={css.points}>
        {points.sort((a, b) => a.value > b.value).map(point => (
          <div className={css.percentile} key={point.color}>
            <div
              className={css.legend}
              style={{ backgroundColor: point.color }}
            />{' '}
            <div>{format('.1%')(point.value)}</div>
          </div>
        ))}
      </div>
    </Tooltip>
    {highDesc && (
      <Tooltip placement="right-end" className={css.tooltip}>
        <div className={css.title}>{high}</div>
        <div>{highDesc}</div>
      </Tooltip>
    )}
  </React.Fragment>
)

export default Tooltips
