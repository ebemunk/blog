import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import css from './Labels.css'

const Labels = ({
  left,
  right,
  bottom,
  top,
  children,
  title,
  className,
  ...otherProps
}) => (
  <div className={classnames(css.wrap, className)} {...otherProps}>
    <div className={css.title}>{title}</div>
    <div className={css.labels}>
      <div className={css.xLabelWrap}>
        <span className={css.xLabel}>{top}</span>
      </div>
      <div className={css.yLabels}>
        <div className={css.yLabelWrap}>
          <span className={css.rotatedLabel}>{left}</span>
        </div>
        {children}
        <div className={css.yLabelWrap}>
          <span className={css.rotatedLabel}>{right}</span>
        </div>
      </div>
      <div className={css.xLabelWrap}>
        <span className={css.xLabel}>{bottom}</span>
      </div>
    </div>
  </div>
)

Labels.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  bottom: PropTypes.node,
  top: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.node,
}

export default Labels
