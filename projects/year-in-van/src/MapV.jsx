import React from 'react'
import OverScroll from 'react-over-scroll'

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

const scroll = id => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

import cn from 'classnames'
import { Rewind, Back, Forward, Fastforward } from './components/icons'

const NavBtn = ({ children, disabled, anchor }) => (
  <div
    className={cn(css.navBtn, {
      [css.disabled]: disabled,
    })}
    onClick={() => {
      if (!disabled) scroll(anchor)
    }}
  >
    {children}
  </div>
)

const Nav = ({ pageNum, slides }) => (
  <div className={css.nav}>
    <NavBtn disabled={pageNum === 1} children={<Rewind />} anchor="map/1" />
    <NavBtn
      disabled={pageNum === 1}
      children={<Back />}
      anchor={`map/${pageNum - 1}`}
    />
    <NavBtn
      disabled={pageNum === slides}
      children={<Forward />}
      anchor={`map/${pageNum + 1}`}
    />
    <NavBtn
      disabled={pageNum === slides}
      children={<Fastforward />}
      anchor={`map/${slides}`}
    />
  </div>
)

export const MapV = ({ focus, setFocus, custom, setCustom }) => (
  <OverScroll slides={pages.length} factor={1} anchors="map">
    {(page, progress) => {
      const isOut =
        (page === 0 && progress === 0) ||
        (page === pages.length - 1 && progress === 100)
      const pago = pages[page]
      const heatmaps = pago.heatmaps({ progress, custom })

      return (
        <div className={css.wrap}>
          <Mapbox heatmaps={heatmaps} focus={focus[page] || null} />
          {!isOut && <ProgressBar progress={progress} />}
          <Nav pageNum={page + 1} slides={pages.length} />
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
            custom={custom}
            setCustom={input => {
              if (custom.indexOf(input) === -1) setCustom([...custom, input])
            }}
            rmCustom={input => {
              const index = custom.indexOf(input)
              return setCustom([
                ...custom.slice(0, index),
                ...custom.slice(index + 1),
              ])
            }}
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
  withState('custom', 'setCustom', []),
)(MapV)
