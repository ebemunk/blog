import React, { useState } from 'react'
import { ResponsiveSvg } from 'vizlib'

import Chart from './Chart'
import Highlights from './Highlights'
import { PointSteps, Section, Step } from './types'
import Waypoint, { WP } from './Waypoint'

export function Scrolly({ sections }: { sections: Section[] }) {
  const [step, setStep] = useState<Step>(Step.Explainer)
  const totalSlides = 22
  return (
    <>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'sticky',
            top: '10vh',
            height: '80vh',
            width: '95vw',
            margin: '0 auto',
            zIndex: 0,
          }}
        >
          <ResponsiveSvg margin={{ top: 30, left: 40, right: 20, bottom: 10 }}>
            <Chart step={step} />
            {PointSteps.includes(step) && <Highlights step={step} />}
          </ResponsiveSvg>
        </div>
        <div
          style={{
            maxWidth: '40ch',
            zIndex: 1,
            position: 'relative',
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="scrolly-text"
        >
          <WP
            step={Step.Explainer}
            setStep={setStep}
            number={1}
            total={totalSlides}
          >
            <p>
              The pink dots represent each individual Playmate of the Month.
              Click or Tap the circles at any point to get more information
              about them.
            </p>
          </WP>

          <WP
            step={Step.Marilyn}
            setStep={setStep}
            number={2}
            total={totalSlides}
          >
            <p>
              <strong>Marilyn Monroe</strong> was the first-ever “Sweetheart of
              the Month” before the introduction of the Playmate of the Month
              title. Hugh Hefner had bought previously unpublished nude photos
              of her for a calendar and picked the “sexiest” picture for the
              first centerfold. Although she was not the copyright holder, Ms.
              Monroe did not consent to those images' use in the magazine, and
              she reportedly was not compensated.
            </p>
            <p>
              The hype around her appearance catapulted the magazine to success
              right from the start.
            </p>
          </WP>

          <WP
            step={Step.NoIssue}
            setStep={setStep}
            number={3}
            total={totalSlides}
          >
            <p>
              In March of 1955, the staff couldn't meet the deadlines to deliver
              the issue,{' '}
              <a
                href="https://web.archive.org/web/20060326233118/http://www.playboy.com/worldofplayboy/faq/collecting.html#4"
                target="_blank"
                rel="noopener noreferrer"
              >
                so nothing was released
              </a>
              .
            </p>
          </WP>

          <WP
            step={Step.SameGirlMultipleIssues}
            setStep={setStep}
            number={4}
            total={totalSlides}
          >
            <p>
              For the first few years, some women were Playmates for multiple
              months. Marilyn Waltz also appeared under the name of Margaret
              Scott. Here are all the women who were Playmates for multiple
              months:
            </p>
            Marilyn Waltz: 3<br />
            Janet Pilgrim: 3<br />
            Margie Harrison: 2<br />
            Marguerite Empey: 2<br />
          </WP>

          <WP
            step={Step.Twins}
            setStep={setStep}
            number={5}
            total={totalSlides}
          >
            <p>
              There were 8 issues that featured multiple Playmates. Except for
              the first time in October 1958, all of them were either twins or
              triplets. <strong>Pat Sheehan</strong> and{' '}
              <strong>Mara Corday</strong> in 1958 were the only two that did
              not share the same centerfold image.
            </p>

            <p>
              All others were on the same centerfold image, with their siblings.
            </p>

            <p>
              In total, there are 5 sets of twins and 1 set of triplets that
              became Playmates at the same time and shared the same centerfold.
            </p>

            <p>
              In addition, one set of twins,{' '}
              <strong>Kristina and Karissa Shannon</strong>
              shared the same centerfold, but were chosen Playmates for July and
              August of 2009 on the same issue.
            </p>
          </WP>

          <WP
            step={Step.China}
            setStep={setStep}
            number={6}
            total={totalSlides}
          >
            <p>
              <strong>China Lee</strong> was the first Asian-American Playmate.
              Her name is pronounced <em>chee-na</em>, coming from the nickname
              given to her by her Spanish-speaking neighbors "Chinita" (which
              apparently means "little Chinese girl"...)
            </p>
          </WP>

          <WP
            step={Step.JenniferJackson}
            setStep={setStep}
            number={7}
            total={totalSlides}
          >
            <p>
              <strong>Jennifer Jackson</strong>,{' '}
              <a
                href="https://www.huffpost.com/entry/exclusive-interview-playmate-jennifer-jackson_n_980502"
                target="_blank"
                rel="noopener noreferrer"
              >
                model and now a social worker from Chicago
              </a>
              , was the first Black Playmate ever to be featured in the
              magazine.
            </p>
            <p>
              This was a time at the height of the Civil Rights Movement, and
              the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Civil_rights_movement#Voting_Rights_Act_of_1965"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voting Rights Act of 1965
              </a>{' '}
              would be introduced only months later.
            </p>
            <p>
              Years later, Playboy would{' '}
              <a
                href="https://twitter.com/Playboy/status/921155223745306624"
                target="_blank"
                rel="noopener noreferrer"
              >
                tweet some of the angry letters they received
              </a>
               after featuring a Black Playmate, as well as the support.
            </p>
          </WP>

          <WP
            step={Step.Karen}
            setStep={setStep}
            number={8}
            total={totalSlides}
          >
            <p>
              <strong>Karen McDougal</strong> made headlines when the story of
              her alleged affair with Donald Trump broke in the media 4 days
              before the 2016 election.{' '}
              <a
                href="https://www.newyorker.com/news/news-desk/donald-trump-a-playboy-model-and-a-system-for-concealing-infidelity-national-enquirer-karen-mcdougal"
                rel="noopener noreferrer"
              >
                Read more about that
              </a>{' '}
              in The New Yorker.
            </p>
          </WP>

          <WP
            step={Step.InesRau}
            setStep={setStep}
            number={9}
            total={totalSlides}
          >
            <p>
              In November 2017, <strong>Ines Rau</strong> 
              <a
                href="https://edition.cnn.com/2017/10/20/entertainment/ines-rau-playboy/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                became the first openly transgender Playmate
              </a>{' '}
              in the magazine's history.
            </p>
            <p>
              This was, however, her second appearance, her first image in May
              of 2014 was titled "Evolution."
            </p>
            <p>
              After backlash, Playboy{' '}
              <a
                href="https://twitter.com/Playboy/status/921155850269536256"
                target="_blank"
                rel="noopener noreferrer"
              >
                tweeted their support
              </a>{' '}
              for this decision with the caption: "Standing on the right side of
              history."
            </p>
          </WP>

          <WP
            step={Step.MarshaElle}
            setStep={setStep}
            number={10}
            total={totalSlides}
          >
            <p>
              <strong>Marsha Elle</strong> is a singer-songwriter and a
              motivational speaker based in Miami. She was born with{' '}
              <em>proximal femoral focal deficiency</em>, which required the
              amputation of her right leg, and she's had a prosthetic leg since
              she was 5 years old. After struggling with insecurity for most of
              her life — she didn't wear shorts until she was 23 —{' '}
              <a
                href="https://www.foxnews.com/entertainment/playboy-playmate-marsha-elle"
                target="_blank"
                rel="noopener noreferrer"
              >
                she became the first amputee Playmate
              </a>
              .
            </p>
          </WP>

          <WP
            step={Step.OtherFirsts}
            setStep={setStep}
            number={11}
            total={totalSlides}
          >
            <p>
              Here are some of the other "firsts" in Playmate history, explore
              some of the unusual firsts for Playboy.
            </p>
          </WP>

          <WP
            step={Step.Hefner}
            setStep={setStep}
            number={12}
            total={totalSlides}
          >
            <h2>End of an Era</h2>
            <p>
              Hugh Hefner passed away on September 27, 2017. It's{' '}
              <a
                href="https://money.cnn.com/2017/09/27/media/hugh-hefner/index.html#:~:text=Hefner%20helped%20personally%20select%20monthly%20%22Playmates%2C%22"
                target="_blank"
                rel="noopener noreferrer"
              >
                reported
              </a>{' '}
              that he was personally involved in picking Playmates of the Month,
              and the data below suggests that the characteristics of who gets
              selected have started changing significantly after his death.
            </p>
            <p>
              While Hefner had his fans, it is known that many of those who
              worked with him{' '}
              <a
                href="https://www.vice.com/en/article/bjvyvw/dont-mourn-for-hugh-hefner"
                target="_blank"
                rel="noopener noreferrer"
              >
                had harrowing experiences
              </a>
              , and{' '}
              <a
                href="https://www.usmagazine.com/celebrity-news/pictures/every-former-playmate-whos-spoken-out-against-hugh-hefner/"
                target="_blank"
                rel="noopener noreferrer"
              >
                a lot of Playmates have spoken out against him
              </a>
              .
            </p>
          </WP>
        </div>
      </div>
    </>
  )
}

import doc from '../../data/doc.json'

export default function ScrollyEntry() {
  return (
    <Scrolly
      // @ts-ignore
      sections={doc.scrolly}
    />
  )
}
