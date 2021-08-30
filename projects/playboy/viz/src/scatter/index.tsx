import * as React from 'react'
import { hot } from 'react-hot-loader'
import { createUseStyles } from 'react-jss'
import { Waypoint } from 'react-waypoint'

import { ResponsiveSvg } from 'vizlib'
import StartHighlights from './StartHighlights'
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
  <Waypoint topOffset="33%" bottomOffset="60%" {...rest}>
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

const useStyles = createUseStyles({
  wrap: {
    border: '2px solid red',
    position: 'relative',
    display: 'flex',
  },
  viz: {
    position: 'sticky',
    top: '10vh',
    border: '2px solid blue',
    height: '80vh',
    flexBasis: '100%',
    maxWidth: '100%',
  },
  story: {
    flexBasis: '30%',
    maxWidth: '30%',
  },
  '@media (max-width: 1023px)': {
    wrap: {
      flexWrap: 'wrap',
    },
    viz: {
      top: '20vh',
      flexBasis: '100%',
      height: '60vh',
    },
    story: {
      flexBasis: '100%',
    },
  },
})

const SUB_STAGES = [
  'start', //
  'noissue',
  'marilyn',
  'multiMonth',
  'multiGirl',
  'firstBlack',
  'firstAsian',
  'firstLatino',
  'firstTransgender',
  'momDaughter',
  'otherFirsts',
] as const

const Scatter = () => {
  const [stage, setStage] = React.useState<typeof STAGES[number]>('start')
  const [subStage, setSubStage] =
    React.useState<typeof SUB_STAGES[number]>('start')

  console.log('scatter rendering', { stage, subStage })

  const stageIndex = STAGES.indexOf(stage)
  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      <div className={classes.viz}>
        <ResponsiveSvg margin={{ left: 30, top: 30, bottom: 10, right: 10 }}>
          <Viz stage={stage} />
          {stage === 'start' && <StartHighlights subStage={subStage} />}
        </ResponsiveSvg>
      </div>

      <div className={classes.story}>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('start')
          }}
          active={stage === 'start' && subStage === 'start'}
        >
          hi
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('marilyn')
          }}
          active={subStage === 'marilyn'}
        >
          marilyn was the first, she was "Sweetheart of the Month"
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('noissue')
          }}
          active={subStage === 'noissue'}
        >
          there was no March 1955 issue{' '}
          <a
            href="https://web.archive.org/web/20060326233118/http://www.playboy.com/worldofplayboy/faq/collecting.html#4"
            target="_blank"
          >
            here
          </a>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('multiMonth')
          }}
          active={subStage === 'multiMonth'}
        >
          some girls were playmates for multiple months
          <br />
          Margie Harrison: 2<br />
          Marilyn Waltz: 3<br />
          Marguerite Empey: 2<br />
          Janet Pilgrim: 3<br />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('multiGirl')
          }}
          active={subStage === 'multiGirl'}
        >
          5 sets of twins, 1 set of triplets. only 1 month where 2 girls were
          unrelated
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstBlack')
          }}
          active={subStage === 'firstBlack'}
        >
          first black playmate was Jennifer Jackson
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstAsian')
          }}
          active={subStage === 'firstAsian'}
        >
          first asian playmate was China Lee
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstLatino')
          }}
          active={subStage === 'firstLatino'}
        >
          first latino playmate was Ester Cordet
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstTransgender')
          }}
          active={subStage === 'firstTransgender'}
        >
          first transgender Ines Rau also does not have a page on babepedia
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('momDaughter')
          }}
          active={subStage === 'momDaughter'}
        >
          Carol Eden (1960) and Simone Eden (1989) were mom-dau
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('otherFirsts')
          }}
          active={subStage === 'otherFirsts'}
        >
          Explore some of the other "firsts" in playmates.
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
        <WP
          onEnter={() => setStage('bust')}
          active={stage === 'bust'}
          style={{ height: '20rem' }}
        >
          bust
        </WP>
        <WP
          onEnter={() => setStage('waist')}
          active={stage === 'waist'}
          style={{ height: '20rem' }}
        >
          waist
        </WP>
        <WP
          onEnter={() => setStage('hips')}
          active={stage === 'hips'}
          style={{ height: '20rem' }}
        >
          hips
        </WP>
        <WP
          onEnter={() => setStage('hair')}
          active={stage === 'hair'}
          style={{ height: '20rem' }}
        >
          hair
        </WP>
        <WP
          onEnter={() => setStage('ethnicity')}
          active={stage === 'ethnicity'}
          style={{ height: '20rem' }}
        >
          ethnicity
        </WP>
        <WP
          onEnter={() => setStage('breasts')}
          active={stage === 'breasts'}
          style={{ height: '20rem' }}
        >
          breasts
        </WP>
        <WP
          onEnter={() => setStage('theCup')}
          active={stage === 'theCup'}
          style={{ height: '20rem' }}
        >
          theCup
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
