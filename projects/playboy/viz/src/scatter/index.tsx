import * as React from 'react'
import { hot } from 'react-hot-loader'

import { ResponsiveSvg } from 'vizlib'
import { STAGES } from './util'
import Viz from './Viz'

const Scatter = () => {
  const [stage, setStage] = React.useState<typeof STAGES[number]>('start')
  console.log('scatter rendering')

  const stageIndex = STAGES.indexOf(stage)

  return (
    <div
      style={{
        border: '2px solid red',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '10vh',
          border: '2px solid blue',
          height: '80vh',
          width: '70vw',
        }}
      >
        <ResponsiveSvg margin={{ left: 30, top: 30, bottom: 10, right: 10 }}>
          <Viz stage={stage} />
        </ResponsiveSvg>
      </div>
      <div
        style={{
          height: '100vh',
          marginLeft: '70vw',
        }}
      >
        <select
          onChange={e => {
            // for debugging only
            // @ts-ignore
            setStage(e.target.value)
          }}
          value={stage}
        >
          {STAGES.map(opt => (
            <option key={opt} value={opt} label={opt} />
          ))}
        </select>
        <button
          onClick={() => {
            setStage(s =>
              stageIndex > 0
                ? STAGES[stageIndex - 1]
                : STAGES[STAGES.length - 1],
            )
          }}
        >
          &lt;
        </button>
        <button
          onClick={() => {
            setStage(s =>
              stageIndex < STAGES.length - 1
                ? STAGES[stageIndex + 1]
                : STAGES[0],
            )
          }}
        >
          &gt;
        </button>
      </div>
      <div
        style={{
          height: '100vh',
          marginLeft: '70vw',
        }}
      >
        goodbye
      </div>
    </div>
  )
}

export default hot(module)(Scatter)
