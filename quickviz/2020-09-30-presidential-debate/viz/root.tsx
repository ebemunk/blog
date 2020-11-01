import * as React from 'react'
import { render } from 'react-dom'

import SpeechRanges from './SpeechRanges'
import Pies from './Pies'
import PerSecondSpeech from './PerSecondSpeech'
import PolarSpeechRanges from './PolarSpeechRanges'

const Root = () => {
  return (
    <div className="normal">
      <h1>
        ca·coph·o·ny - <small>a harsh discordant mixture of sounds.</small>
      </h1>
      <p>
        The first of the 2020 Presidential debates, held in September 29 in
        Cleveland has been described as <em>disorderly</em> and <em>chaotic</em>
        . Here's the timeline of the debate and when everbody spoke. We're not
        focusing on who interrupted who, but when they{' '}
        <u>spoke at the same time</u>.
      </p>

      <SpeechRanges />

      <div style={{ marginTop: '4rem' }} />

      <PerSecondSpeech
        width={2000}
        height={150}
        margin={{
          bottom: 30,
          left: 75,
          right: 25,
        }}
      />

      <div style={{ marginTop: '4rem' }} />

      <Pies width={1500} />

      <div style={{ marginTop: '4rem' }} />

      <div className="meta">
        <p className="madeBy">Made by ebemunk.</p>
        <p>
          <span
            style={{
              whiteSpace: 'nowrap',
            }}
          >
            Data from <em>Rev.com</em>
          </span>
          's debate transcript, which includes the transcript in millisecond
          precision, chunked into seconds. Processed with JS and visualized with
          React+d3.
        </p>
      </div>
    </div>
  )
}

const Polar = () => {
  return (
    <div className="polar">
      <PolarSpeechRanges width={2000} height={2000} />
      <div
        style={{
          position: 'absolute',
          top: '22rem',
          left: '50%',
          transform: 'translate(-50%,0)',
          width: '100%',
          maxWidth: 1000,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>ca·coph·o·ny -</h1>
        <h2>a harsh discordant mixture of sounds.</h2>
        <div
          style={{
            display: 'flex',
          }}
        >
          <p
            style={{
              flexBasis: '100%',
            }}
          >
            The first of the 2020 Presidential debates, held in September 29 in
            Cleveland has been described as <em>disorderly</em> and{' '}
            <em>chaotic</em>. Here's the timeline of the debate and when
            everbody spoke. We're not focusing on who interrupted who, but when
            they <u>spoke at the same time</u>.
          </p>
        </div>
        <div style={{ marginTop: '3rem' }} />

        <Pies width={1150} top={90} />

        <div className="meta">
          <p className="madeBy">Made by ebemunk.</p>
          <p>
            <span
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              Data from <em>Rev.com</em>
            </span>
            's debate transcript, which includes the transcript in millisecond
            precision, chunked into seconds. Processed with JS and visualized
            with React+d3.
          </p>
        </div>
      </div>
    </div>
  )
}

const Picker = () => {
  if (window.location.search.includes('polar')) {
    return <Polar />
  }

  return <Root />
}

export default function (element) {
  // return render(<Root />, element)
  return render(<Picker />, element)
}
