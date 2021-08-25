import React from 'react'
import debounce from 'lodash/debounce'

export default function useDimensions(
  opts: {
    debounceMs: number
  } = {
    debounceMs: 300,
  },
) {
  const ref = React.useRef<any>(null)
  const [dims, setDims] = React.useState({
    width: 0,
    height: 0,
  })
  const observer = React.useRef<ResizeObserver>()

  React.useEffect(() => {
    const resized = debounce(() => {
      if (!ref.current) return

      setDims({
        width: ref.current.offsetWidth,
        height: ref.current.offsetHeight,
      })
    }, opts.debounceMs)

    const ro = new ResizeObserver((_entries, obs) => {
      observer.current = obs
      resized()
    })

    resized()

    if (ref.current) {
      ro.observe(ref.current)
    }

    return () => {
      if (!observer.current) return

      observer.current.disconnect()
    }
  }, [])

  return [ref, dims] as const
}
