import React, { useState } from 'react'

export default function MobileWarning() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        background: 'rgba(0,0,0,0.8)',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        textAlign: 'center',
      }}
    >
      <p>
        I noticed that you might be on a mobile device. This interactive
        visualization is not designed for browsers with less than 768px width.
      </p>
      <p>
        There is a static image with all the visualizations available, which
        would suit mobile devices better.
      </p>
      <a href="/plane-crashes/STATIC.png" style={{ fontSize: '1.3rem' }}>
        Take me to the image
      </a>
      <span>or</span>
      <a href="#" onClick={() => setOpen(false)} style={{ fontSize: '1.3rem' }}>
        Dismiss
      </a>
    </div>
  )
}
