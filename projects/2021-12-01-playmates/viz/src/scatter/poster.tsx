import React from 'react'
import { hot } from 'react-hot-loader'
import { Svg } from 'vizlib'
import StartHighlights from './StartHighlights'
import Viz from './Viz'

const Poster = ({ stage }) => {
  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Svg
        margin={{ left: 30, top: 30, bottom: 10, right: 10 }}
        width={900}
        height={400}
      >
        <Viz stage={stage} subStage={'multiGirl'} />
        {stage === 'start' && <StartHighlights subStage="multiGirl" />}
      </Svg>
    </div>
  )
}

export default hot(module)(Poster)
