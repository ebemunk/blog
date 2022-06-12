import { format } from 'd3'
import { useLayoutEffect, useState } from 'react'

export const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const MONTHS_FULL = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const PLAYMATE_PINK = 'rgb(255, 157, 167)'

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useLayoutEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    // Add event listener
    window.addEventListener('resize', handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return windowSize
}

export const cm2in = num => (num ? num / 2.54 : null)
export const in2cm = num => (num ? num * 2.54 : null)
export const kg2lb = num => (num ? num / 0.45359237 : null)

export const formatFeetIn = num => {
  const feet = Math.floor(num / 12)
  const formatter = format('.0f')

  if (!feet) return `${formatter(num)}"`

  return `${feet}'${formatter(num % 12)}"`
}
