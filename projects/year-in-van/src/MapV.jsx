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

const Text = ({ text, progress }) => (
  <div
    style={{
      position: 'fixed',
      bottom: (progress / 100) * window.innerHeight,
      width: '30rem',
      fontSize: '1rem',
      border: '3px solid red',
    }}
  >
    {text}
  </div>
)

const Page = ({
  page: { heatmaps, text },
  setFocus,
  focus = null,
  isOut,
  progress,
}) => (
  <div className={css.wrap}>
    <Mapbox heatmaps={heatmaps} focus={focus} />
    {!isOut && <Text text={text} progress={progress} />}
    {!isOut && <ProgressBar progress={progress} />}
    <Legend keys={heatmaps} onClick={setFocus} focus={focus} />
  </div>
)

export const MapV = ({ focus, setFocus }) => (
  <OverScroll slides={pages.length} factor={1}>
    {(page, progress) => (
      <Page
        page={pages[page]}
        isOut={
          (page === 0 && progress === 0) ||
          (page === pages.length - 1 && progress === 100)
        }
        progress={progress}
        focus={focus[page]}
        setFocus={label =>
          setFocus({
            ...focus,
            [page]: focus[page] === label ? null : label,
          })
        }
      />
    )}
  </OverScroll>
)

import { hot } from 'react-hot-loader'
import { compose, withState, pure } from 'recompose'

export default compose(
  hot(module),
  pure,
  withState('focus', 'setFocus', {}),
)(MapV)
