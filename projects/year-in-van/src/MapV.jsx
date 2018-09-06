import React from 'react'

import OverScroll from 'react-over-scroll'

import Legend from './Legend'
import Mapbox from './Mapbox'
import pages from './pages'

import css from './MapV.css'

const ProgressBar = ({ progress }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      height: '5px',
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

      return (
        <div className={css.wrap}>
          <Mapbox heatmaps={pages[page]} focus={focus} />
          {/* {!isOut && (
            <div
              style={{
                position: 'fixed',
                bottom: (progress / 100) * window.innerHeight,
                width: '500px',
                border: '3px solid red',
              }}
            >
              halllow
            </div>
          )} */}
          {!isOut && <ProgressBar progress={progress} />}
          <Legend
            keys={pages[page]}
            onClick={label => setFocus(focus === label ? null : label)}
            focus={focus}
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
  withState('focus', 'setFocus', null),
  pure,
)(MapV)
