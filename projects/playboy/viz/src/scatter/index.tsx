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
          <p>
            The pink circles represent all the Playmates by year and month.
            Mouseover or tap the circles at any point to get more information
            about the Playmate.
          </p>
          <p>Visit the mypmates link to view the centerfold image.</p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('marilyn')
          }}
          active={stage === 'start' && subStage === 'marilyn'}
        >
          <p>
            Did you know the first woman to be featured in the Playboy magazine
            was <strong>Marilyn Monroe</strong>? The first edition did not have
            a "Playmate of the Month" title, but Monroe was crowned the
            "Sweetheart of the Month".
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('noissue')
          }}
          active={stage === 'start' && subStage === 'noissue'}
        >
          <p>
            On March of 1955, the staff couldn't meet the deadlines to deliver
            the issue, so nothing was released. More information{' '}
            <a
              href="https://web.archive.org/web/20060326233118/http://www.playboy.com/worldofplayboy/faq/collecting.html#4"
              target="_blank"
            >
              on this old FAQ
            </a>
            .
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('multiMonth')
          }}
          active={stage === 'start' && subStage === 'multiMonth'}
        >
          <p>
            For the first few years, some women were Playmates for multiple
            months. <strong>Marilyn Waltz</strong> also appeared under the name
            of Margaret Scott. Here are all the women who were Playmates for
            multiple months:
          </p>
          <p>
            Marilyn Waltz: 3<br />
            Janet Pilgrim: 3<br />
            Margie Harrison: 2<br />
            Marguerite Empey: 2<br />
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('multiGirl')
          }}
          active={stage === 'start' && subStage === 'multiGirl'}
        >
          <p>
            There were 7 issues that featured multiple Playmates. Except for the
            first time in October 1958, all of them were either twins or
            triplets.
          </p>
          <p>
            In total, there are 5 sets of twins and 1 set of triplets that
            became Playmates at the same time.
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstAsian')
          }}
          active={stage === 'start' && subStage === 'firstAsian'}
        >
          <p>
            <strong>China Lee</strong> was the first asian Playmate. Her name is
            pronounced <em>chee-na</em>, coming from the nickname given to her
            by her Spanish-speaking neighbors "Chinita" (which apparently means
            "little Chinese girl"...)
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstBlack')
          }}
          active={stage === 'start' && subStage === 'firstBlack'}
        >
          <p>
            <strong>Jennifer Jackson</strong> was the first black Playmate ever
            to be featured in the magazine.
          </p>
          <p>
            Mere months later, at the height of the Civil Rights Movement in the
            US, the{' '}
            <a
              href="https://en.wikipedia.org/wiki/Civil_rights_movement#Voting_Rights_Act_of_1965"
              target="_blank"
            >
              Voting Rights Act of 1965
            </a>{' '}
            was introduced.
          </p>
          <p>
            HuffPost has a{' '}
            <a
              href="https://www.huffpost.com/entry/exclusive-interview-playmate-jennifer-jackson_n_980502"
              target="_blank"
            >
              very interesting interview
            </a>{' '}
            with her about her experiences.
          </p>
          <p>
            After online backlash for <strong>Ines Rau</strong>, Playboy{' '}
            <a
              href="https://twitter.com/Playboy/status/921155223745306624"
              target="_blank"
            >
              tweeted some of the "feedback" they received
            </a>{' '}
            after featuring a black Playmate.
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('firstTransgender')
          }}
          active={stage === 'start' && subStage === 'firstTransgender'}
        >
          <p>
            In November 2017, <strong>Ines Rau</strong> became the first openly
            transgender Playmate in the history of the magazine.
          </p>
          <p>
            This was however her second appearence, first time in May 2014 with
            the title "Evolution".
          </p>
          <p>
            After backlash, Playboy{' '}
            <a
              href="https://twitter.com/Playboy/status/921155850269536256"
              target="_blank"
            >
              tweeted their support
            </a>{' '}
            for this decision with the caption: "Standing on the right side of
            history".
          </p>
          <p>
            Read more about it on{' '}
            <a
              href="https://edition.cnn.com/2017/10/20/entertainment/ines-rau-playboy/index.html"
              target="_blank"
            >
              CNN's article
            </a>
            .
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('momDaughter')
          }}
          active={stage === 'start' && subStage === 'momDaughter'}
        >
          <p>
            <strong>Carol Eden</strong> and <strong>Simone Eden</strong> are the
            first (and only) Playmates who are mother and daughter.
          </p>
          <p>
            Simone, following in her mother's footsteps in 1960, became a
            Playmate in 1989.
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('otherFirsts')
          }}
          active={stage === 'start' && subStage === 'otherFirsts'}
        >
          <p>
            I highlighted some of the other "firsts" in Playmates' history. Feel
            free to explore them!
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('start')
            setSubStage('hugh')
          }}
          active={stage === 'start' && subStage === 'hugh'}
        >
          <p>
            Hugh Hefner passed away on September 27, 2017. It's reported that he
            has been personally involved in picking Playmates of the Month, and
            the data below suggests that the characteristics of who gets picked
            have started changing radically after his death.
          </p>
          <p>
            Even though it's evident that Playboy has always been progressive,
            this also highlights some of the biases that he might've reinforced
            through his personal touch.
          </p>
          <p>
            Also relevant is this compilation of{' '}
            <a
              href="https://www.usmagazine.com/celebrity-news/pictures/every-former-playmate-whos-spoken-out-against-hugh-hefner/"
              target="_blank"
            >
              every Playmate who's ever spoken out against him
            </a>
            .
          </p>
        </WP>

        <WP onEnter={() => setStage('mateAge')} active={stage === 'mateAge'}>
          <h3>Age</h3>
          <AvgChange stage="mateAge" />
          <p>
            There has been a dramatic increase of about 4 years in the ages of
            Playmates since the first issue.
          </p>
          <p>
            I've drawn here what I call the YIKES zone. 8 Playmates, up until
            1981 were under the age of 18 when photographed and picked as
            Playmates. This would be a felony today. Wikipedia quotes "in the
            early years of the magazine, laws regarding corruption of a minor
            were less well established".
          </p>
          <p>
            There is the interesting story of{' '}
            <strong>Elizabeth Ann Roberts</strong>, who was photographed at the
            age of 16. Hugh Hefner and Roberts' mother were arrested, but case
            was dismissed after they found that Roberts' mother had signed a
            statement saying that her daughter was 18. Here's an interesting{' '}
            <a href="http://content.time.com/time/subscriber/article/0,33009,865757,00.html">
              Time newsclip from 1958
            </a>
            .
          </p>
          <p>
            <strong>Gay Collier</strong>'s birth year is reported as 1949 in
            mypmates, which would make her just below 16 when she was became a
            Playmate. Yet, I didn't find any sources confirming this, and
            Babepedia reports it as 1942, which would make her 23 at the time.
          </p>
        </WP>
        <WP
          onEnter={() => {
            setStage('height')
          }}
          active={stage === 'height'}
        >
          <h3>Height</h3>
          <AvgChange stage="height" />
          <p>
            The average height of Playmates have also increased by about 5%.
            Pretty consistent increase besides a lull between 1995-2000.
          </p>
        </WP>
        <WP onEnter={() => setStage('weight')} active={stage === 'weight'}>
          <h3>Weight</h3>
          <AvgChange stage="weight" />
          <p>
            Weight has similarly seen an increase of about 8%. What is striking
            is how the variance in weight explodes after Hefner's death.
          </p>
          <p>
            It's unclear if this data is self-reported, in which case the
            measurements might be underestimates. Some reported weights seem
            very low.
          </p>
          <p>
            <strong>Ali Chanel</strong> is an obvious outlier, and a welcome one
            for body positivity. Dubbed "Playboy's curviest Playmate", attention
            was immediately focused on her. She talks about her experience and
            reactions in{' '}
            <a
              href="https://www.foxnews.com/entertainment/ali-chanel-playboy-playmate"
              target="_blank"
            >
              her interview with FOX
            </a>
            .
          </p>
        </WP>
        <WP
          onEnter={() => setStage('bust')}
          active={stage === 'bust'}
          style={{ height: '20rem' }}
        >
          <h3>Bust</h3>
          <AvgChange stage="bust" />
        </WP>
        <WP
          onEnter={() => setStage('waist')}
          active={stage === 'waist'}
          style={{ height: '20rem' }}
        >
          <h3>Waist</h3>
          <AvgChange stage="waist" />
        </WP>
        <WP
          onEnter={() => setStage('hips')}
          active={stage === 'hips'}
          style={{ height: '20rem' }}
        >
          <h3>Hips</h3>
          <AvgChange stage="hips" />
        </WP>
        <WP
          onEnter={() => setStage('hair')}
          active={stage === 'hair'}
          style={{ height: '20rem' }}
        >
          <h3>Hair</h3>
        </WP>
        <WP
          onEnter={() => setStage('ethnicity')}
          active={stage === 'ethnicity'}
          style={{ height: '20rem' }}
        >
          <h3>Ethnicity</h3>
        </WP>
        <WP
          onEnter={() => setStage('breasts')}
          active={stage === 'breasts'}
          style={{ height: '20rem' }}
        >
          <h3>Real or Fake</h3>
        </WP>
        <WP
          onEnter={() => setStage('cup')}
          active={stage === 'cup'}
          style={{ height: '20rem' }}
        >
          <h3>Cup Size</h3>
        </WP>
      </div>
    </div>
  )
}

export default hot(module)(Scatter)
