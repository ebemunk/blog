import React from 'react'
import OverScroll from 'react-over-scroll'

import Mapbox from './Mapbox'
import pages from './pagesx'

import css from './MapV.css'

const ProgressBar = ({ progress }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      height: '1rem',
      width: '100vw',
    }}
  >
    <div
      style={{
        width: `${progress}%`,
        height: '100%',
        backgroundColor: 'red',
      }}
    />
  </div>
)

export const MapV = ({ focus, setFocus }) => (
  <OverScroll slides={pages.length} factor={1}>
    {(page, progress) => {
      const isOut =
        (page === 0 && progress === 0) ||
        (page === pages.length - 1 && progress === 100)
      const pago = pages[page]
      const heatmaps = pago.heatmaps({ progress })

      return (
        <div className={css.wrap}>
          <Mapbox heatmaps={heatmaps} focus={focus[page] || null} />
          {!isOut && <ProgressBar progress={progress} />}
          <pago.children
            heatmaps={heatmaps}
            isOut={isOut}
            progress={progress}
            focus={focus[page]}
            setFocus={label =>
              setFocus({
                ...focus,
                [page]: focus[page] === label ? null : label,
              })
            }
          />
        </div>
      )
    }}
  </OverScroll>
)

import { hot } from 'react-hot-loader'
import { compose, withState, pure } from 'recompose'

export default compose(
  hot(module),
  pure,
  withState('focus', 'setFocus', {}),
)(MapV)
