import React from 'react'
import './App.css'

import Viz from './Viz'
import Colors from './Colors'
import HowToRead from './HowToRead'

const P = ({ children, style, ...rest }) => (
  <p
    style={{
      color: 'white',
      maxWidth: '1000px',
      fontSize: '20px',
      fontFamily: '"Roboto Condensed"',
      ...style,
    }}
    {...rest}
  >
    {children}
  </p>
)

function App() {
  return (
    <div
      className="App"
      style={{
        background: '#2f2f2f',
        minWidth: `${(400 + 60) * 5}px`,
        padding: '20px',
        // position: 'relative',
      }}
    >
      <div style={{ display: 'flex' }}>
        <HowToRead />
        <div
          style={{
            // position: 'absolute',
            // left: '550px',
            // top: '30px',
            textAlign: 'left',
            color: 'white',
            fontFamily: '"Caramond Georgia"',
            fontWeight: 'bold',
            fontSize: '72px',
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: '"Goudy Bookletter 1911"',
              letterSpacing: '4px',
            }}
          >
            <div
              className="title-color"
              style={{
                marginRight: '1rem',
                marginBottom: '1rem',
              }}
            >
              Color
            </div>{' '}
            in Books
          </div>
          <P>
            This is an exploration of colors seen in Project Gutenberg's Top 25
            "Best Books Ever" list. Specifically, these are the CSS Named Colors
            which all modern browsers support, like 'Green' or 'Red' to
            'Blanched Almond' and 'Light Golden Rod Yellow'. There are 147 such
            colors. We read the book, from start to end (visualized clockwise)
            and note every occurrence of one of these 147 colors.
          </P>
          <P>
            At the end, we are faced with a color profile for each individual
            book, almost a unique "retinal scan". Does it tell us anything? Who
            knows. Maybe it will inspire you to read one of these classics, or
            compare those you have read to go "Ah, that's right!".
          </P>
          <P>Let me know what you think by tweeting me @ebemunk.</P>
        </div>
        <div style={{ maxWidth: '390px' }}>
          <div
            style={{
              textAlign: 'left',
              color: 'white',
              fontSize: '16px',
              fontFamily: '"Roboto Condensed"',
              fontWeight: 600,
            }}
          >
            All present CSS Named Colors (53 out of 147):
          </div>
          <Colors />
        </div>
      </div>
      <Viz />
    </div>
  )
}

export default App
