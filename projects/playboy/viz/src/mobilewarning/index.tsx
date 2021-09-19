import React, { useState } from 'react'
import { hot } from 'react-hot-loader'
import { useWindowSize } from '../util'

const BottomNag = ({ children }) => (
  <div
    style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'rgba(0,0,0,0.75)',
      padding: '3rem',
    }}
  >
    {children}
  </div>
)

const MobileWarning = () => {
  const [dismissed, setDismissed] = useState(false)
  const ws = useWindowSize()

  if (ws.width >= 768) return null

  if (dismissed) return null

  return (
    <BottomNag>
      <p>
        This post is best viewed on 768px or wider resolution.{' '}
        {ws.width < 768 && ws.height >= 768 && (
          <>
            Turn your device to landscape mode for a better viewing experience.
          </>
        )}
      </p>
      <p>
        You can also view it in image format{' '}
        <a href="https://blog.ebemunk.com/beholder-beauty-in-the-eyes-of-playboy/poster.png">
          here
        </a>
        .
      </p>
      <p>
        <a
          href=""
          onClick={e => {
            e.preventDefault()
            setDismissed(true)
          }}
        >
          Yeah whatever (dismiss).
        </a>
      </p>
    </BottomNag>
  )
}

export default hot(module)(MobileWarning)
