import * as React from 'react'
import { hot } from 'react-hot-loader'
import { createUseStyles } from 'react-jss'
import { Waypoint } from 'react-waypoint'
import * as d3 from 'd3'

import { ResponsiveSvg } from 'vizlib'
import StartHighlights from './StartHighlights'
import { formatFeetIn, loessKey, STAGES, STAGE_UNITS } from './util'
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
        padding: '0.5rem',
        background: 'rgba(255,255,255,0.2)',
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
    // border: '2px solid red',
    position: 'relative',
    display: 'flex',
    marginBottom: '1rem',

    '& h3': {
      marginTop: 0,
    },
    '& p': {
      lineHeight: 1.3,
    },
    '& p:last-of-type': {
      marginBottom: 0,
    },
  },
  viz: {
    position: 'sticky',
    top: '10vh',
    // border: '2px solid blue',
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
  'trump',
  'otherFirsts',
  'hugh',
] as const

import loess from '../../loess.json'
import { TiArrowUpThick, TiArrowDownThick } from 'react-icons/ti'
import { Store } from '../store'

const AvgChange = ({ stage }: { stage: typeof STAGES[number] }) => {
  const units = Store.useState(s => s.units)
  const linreg = loess.find(d => d.key === loessKey(stage, units)).loess.fitted

  const first = linreg[0]
  const last = linreg[linreg.length - 1]

  const diff = last - first
  const pct = d3.format('.0%')(diff / first)
  const avgFormat = stage === 'height' ? formatFeetIn : d3.format('.1f')
  const unitfmt = stage === 'height' ? ',' : ` ${STAGE_UNITS[units][stage]},`

  return (
    <div
      style={{
        marginBottom: '1rem',
      }}
    >
      {pct}
      {diff > 0 ? <TiArrowUpThick /> : <TiArrowDownThick />}
      <span
        style={{
          fontSize: '0.9rem',
          color: 'lightgray',
        }}
      >
        ({avgFormat(diff)}
        {unitfmt} 1954: {avgFormat(first)}
        {unitfmt} 2020: {avgFormat(last)}
        {unitfmt.replace(',', '')})
      </span>
    </div>
  )
}

const ScrollyText = ({ id }) => {
  const [el, setEl] = React.useState(null)

  React.useEffect(() => {
    const element = document.querySelector(`div[data-scrolly="${id}"]`)
    if (!element) return
    setEl(element)
    element.remove()
  }, [])

  if (!el) return null

  return <div dangerouslySetInnerHTML={{ __html: el.innerHTML }} />
}

const Scatter = () => {
  const [stage, setStage] = React.useState<typeof STAGES[number]>('start')
  const [subStage, setSubStage] =
    React.useState<typeof SUB_STAGES[number]>('start')

  const classes = useStyles()

  return (
    <div className={classes.wrap}>
      <div className={classes.viz}>
        <ResponsiveSvg margin={{ left: 30, top: 30, bottom: 10, right: 10 }}>
          <Viz stage={stage} subStage={subStage} />
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
          <ScrollyText id="start" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('marilyn')
          }}
          active={stage === 'start' && subStage === 'marilyn'}
        >
          <ScrollyText id="marilyn" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('noissue')
          }}
          active={stage === 'start' && subStage === 'noissue'}
        >
          <ScrollyText id="noissue" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('multiMonth')
          }}
          active={stage === 'start' && subStage === 'multiMonth'}
        >
          <ScrollyText id="multiMonth" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('multiGirl')
          }}
          active={stage === 'start' && subStage === 'multiGirl'}
        >
          <ScrollyText id="multiGirl" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstAsian')
          }}
          active={stage === 'start' && subStage === 'firstAsian'}
        >
          <ScrollyText id="firstAsian" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstBlack')
          }}
          active={stage === 'start' && subStage === 'firstBlack'}
        >
          <ScrollyText id="firstBlack" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstTransgender')
          }}
          active={stage === 'start' && subStage === 'firstTransgender'}
        >
          <ScrollyText id="firstTransgender" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('momDaughter')
          }}
          active={stage === 'start' && subStage === 'momDaughter'}
        >
          <ScrollyText id="momDaughter" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('trump')
          }}
          active={stage === 'start' && subStage === 'trump'}
        >
          <ScrollyText id="trump" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('otherFirsts')
          }}
          active={stage === 'start' && subStage === 'otherFirsts'}
        >
          <ScrollyText id="otherFirsts" />
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('hugh')
          }}
          active={stage === 'start' && subStage === 'hugh'}
        >
          <ScrollyText id="hugh" />
        </WP>

        <WP onEnter={() => setStage('mateAge')} active={stage === 'mateAge'}>
          <h3>Age</h3>
          <AvgChange stage="mateAge" />
          <ScrollyText id="mateAge" />
        </WP>

        <WP
          onEnter={() => {
            setStage('height')
          }}
          active={stage === 'height'}
        >
          <h3>Height</h3>
          <AvgChange stage="height" />
          <ScrollyText id="height" />
        </WP>

        <WP onEnter={() => setStage('weight')} active={stage === 'weight'}>
          <h3>Weight</h3>
          <AvgChange stage="weight" />
          <ScrollyText id="weight" />
        </WP>

        <WP onEnter={() => setStage('bust')} active={stage === 'bust'}>
          <h3>Bust</h3>
          <AvgChange stage="bust" />
          <ScrollyText id="bust" />
        </WP>

        <WP onEnter={() => setStage('waist')} active={stage === 'waist'}>
          <h3>Waist</h3>
          <AvgChange stage="waist" />
          <ScrollyText id="waist" />
        </WP>

        <WP onEnter={() => setStage('hips')} active={stage === 'hips'}>
          <h3>Hips</h3>
          <AvgChange stage="hips" />
          <ScrollyText id="hips" />
        </WP>

        <WP onEnter={() => setStage('hair')} active={stage === 'hair'}>
          <h3>Hair</h3>
          <ScrollyText id="hair" />
        </WP>

        <WP
          onEnter={() => setStage('ethnicity')}
          active={stage === 'ethnicity'}
        >
          <h3>Ethnicity</h3>
          <ScrollyText id="ethnicity" />
        </WP>

        <WP onEnter={() => setStage('breasts')} active={stage === 'breasts'}>
          <h3>Real or Fake</h3>
          <ScrollyText id="breasts" />
        </WP>

        <WP
          onEnter={() => setStage('cup')}
          active={stage === 'cup'}
          style={{ marginBottom: '20rem' }}
        >
          <h3>Cup Size</h3>
          <ScrollyText id="cup" />
        </WP>
      </div>
    </div>
  )
}

export default hot(module)(Scatter)
