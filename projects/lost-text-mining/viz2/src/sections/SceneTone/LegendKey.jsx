import React from 'react'
import ReactDOM from 'react-dom'
import { Manager, Reference } from 'react-popper'
import classnames from 'classnames'

import Tooltip from 'components/Tooltip'
import withTooltip from 'hoc/withTooltip'

import toneScales from './toneScales'
import legendDescription from './legendDescription'

import css from './Legend.css'

const LegendKey = ({
  //
  tone,
  selection,
  tol,
  tooltipVisible,
  toggleTooltip,
}) => (
  <React.Fragment>
    <Manager>
      <Reference>
        {({ ref }) => (
          <div
            className={css.tone}
            key={tone}
            onClick={() => tol(tone)}
            ref={ref}
            onMouseEnter={() => toggleTooltip(true)}
            onMouseLeave={() => toggleTooltip(false)}
          >
            <div
              className={classnames(css.box, {
                [css.selected]: selection[tone],
              })}
              style={{
                backgroundColor: selection[tone]
                  ? toneScales[tone](1)
                  : 'transparent',
                borderColor: toneScales[tone](1),
              }}
            />
            <div
              className={classnames(css.key, {
                [css.selected]: selection[tone],
              })}
            >
              {tone}
            </div>
          </div>
        )}
      </Reference>
      {tooltipVisible &&
        ReactDOM.createPortal(
          <Tooltip placement="top">{legendDescription[tone]}</Tooltip>,
          document.querySelector('body'),
        )}
    </Manager>
  </React.Fragment>
)

export default withTooltip(LegendKey)
