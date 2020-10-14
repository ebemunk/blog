import React from 'react'
import { hsl, color } from 'd3-color'

import data from './data.json'

function rgbToHsl(r, g, b) {
  r /= 255
  g /= 255
  b /= 255
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b)
  var h,
    s,
    l = (max + min) / 2

  if (max == min) {
    h = s = 0 // achromatic
  } else {
    var d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [h, s, l]
}

export default function colors() {
  const usedColors = new Set([
    ...data.flatMap(book =>
      Object.keys(book.colormap).filter(key => book.colormap[key].length > 0),
    ),
  ])

  console.log('used', usedColors)

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {Array.from(usedColors)
        // .sort((a, b) => b.length - a.length)
        // .sort((a, b) => {
        //   const ac = hsl(a.replace(/\s/gi, ''))
        //   const bc = hsl(b.replace(/\s/gi, ''))
        //   console.log('colors are', a, ac, b, bc)
        //   if (isNaN(ac.h) && !isNaN(bc.h)) return 1
        //   if (isNaN(bc.h) && !isNaN(ac.h)) return 1
        //   if (isNaN(ac.h) && isNaN(bc.h)) return bc.l - ac.l
        //   // ac.h = isNaN(ac.h) ? 158 : ac.h
        //   // bc.h = isNaN(bc.h) ? 158 : bc.h
        //   // return bc.h - ac.h
        //   return b.length - a.length
        // })
        .sort((a, b) => {
          const ac = color(a.replace(/\s/gi, ''))
          const bc = color(b.replace(/\s/gi, ''))

          const ah = rgbToHsl(ac.r, ac.g, ac.b)
          const bh = rgbToHsl(bc.r, bc.g, bc.b)

          if (bh[0] === ah[0]) {
            return bh[1] - ah[1]
          }

          return bh[0] - ah[0]
        })
        .map(d => (
          <div
            key={d}
            style={{
              background: d.replace(/\s/gi, ''),
              height: '30px',
              width: '30px',
              margin: '3px',
            }}
          ></div>
        ))}
    </div>
  )
}
