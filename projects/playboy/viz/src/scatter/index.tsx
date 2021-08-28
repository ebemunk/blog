import * as React from 'react'
import { hot } from 'react-hot-loader'
import { Waypoint } from 'react-waypoint'

import { ResponsiveSvg } from 'vizlib'
import { STAGES } from './util'
import Viz from './Viz'

const WP = ({
  children,
  style,
  active,
  ...rest
}: {
  children: React.ReactNode
  style?: React.CSSProperties
  active?: boolean
} & React.ComponentProps<typeof Waypoint>) => (
  <Waypoint topOffset="40%" bottomOffset="80%" {...rest}>
    <div
      style={{
        padding: '1rem',
        background: 'green',
        marginTop: '10rem',
        marginBottom: '10rem',
        opacity: active ? 1 : 0.3,
        ...style,
      }}
    >
      {children}
    </div>
  </Waypoint>
)

const Scatter = () => {
  const [stage, setStage] = React.useState<typeof STAGES[number]>('start')
  console.log('scatter rendering')

  const stageIndex = STAGES.indexOf(stage)

  return (
    <div
      style={{
        border: '2px solid red',
        position: 'relative',
        display: 'flex',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: '10vh',
          border: '2px solid blue',
          height: '80vh',
          flexBasis: '70%',
        }}
      >
        <ResponsiveSvg margin={{ left: 30, top: 30, bottom: 10, right: 10 }}>
          <Viz stage={stage} />
        </ResponsiveSvg>
      </div>

      <div style={{ flexBasis: '30%' }}>
        <WP onEnter={() => setStage('start')} active={stage === 'start'}>
          hi
        </WP>
        <WP
          onEnter={() => setStage('mateAge')}
          active={stage === 'mateAge'}
          style={{ height: '10rem' }}
        >
          age
        </WP>
        <WP
          onEnter={() => {
            setStage('height')
          }}
          active={stage === 'height'}
          style={{ height: '15rem' }}
        >
          height
        </WP>
        <WP
          onEnter={() => setStage('weight')}
          active={stage === 'weight'}
          style={{ height: '20rem' }}
        >
          weight
        </WP>

        <div
          style={{
            height: '100vh',
            flexBasis: '30%',
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
      </div>
    </div>
  )
}

export default hot(module)(Scatter)
