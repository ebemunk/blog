import React, { useState } from 'react'
import { ResponsiveSvg } from 'vizlib'
import { useWindowSize } from '../../../util'
import Link from '../Link'
import Measurement from '../Measurement'
import AvgChange from './AvgChange'
import Chart from './Chart'
import Highlights from './Highlights'
import { PointSteps, Step } from './types'
import Waypoint from './Waypoint'

export default function Scrolly({
  initialStep = Step.Explainer,
}: {
  initialStep?: Step
}) {
  const [step, setStep] = useState<Step>(initialStep)
  const totalSlides = 21
  const ws = useWindowSize()
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
            zIndex: 2,
            position: 'relative',
            pointerEvents: 'none',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: ws.width < 768 ? '1rem' : '70px',
          }}
          className="scrolly-text"
        >
          <Waypoint
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
          </Waypoint>

          <Waypoint
            step={Step.Marilyn}
            setStep={setStep}
            number={2}
            total={totalSlides}
          >
            <p>
              <strong>Marilyn Monroe</strong> was the first-ever "Sweetheart of
              the Month" before the introduction of the Playmate of the Month
              title. Hugh Hefner had bought previously unpublished nude photos
              of her for a calendar and picked the "sexiest" picture for the
              first centerfold. Although she was not the copyright holder, Ms.
              Monroe did not consent to those images' use in the magazine, and
              she reportedly was not compensated.
            </p>
            <p>
              The hype around her appearance catapulted the magazine to success
              right from the start.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.NoIssue}
            setStep={setStep}
            number={3}
            total={totalSlides}
          >
            <p>
              In March of 1955, the staff couldn't meet the deadlines to deliver
              the issue,{' '}
              <Link href="https://web.archive.org/web/20060326233118/http://www.playboy.com/worldofplayboy/faq/collecting.html#4">
                so nothing was released
              </Link>
              .
            </p>
          </Waypoint>

          <Waypoint
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
            <br />
          </Waypoint>

          <Waypoint
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
              <strong>Kristina and Karissa Shannon</strong> shared the same
              centerfold, but were chosen Playmates for July and August of 2009
              on the same issue.
            </p>
          </Waypoint>

          <Waypoint
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
          </Waypoint>

          <Waypoint
            step={Step.JenniferJackson}
            setStep={setStep}
            number={7}
            total={totalSlides}
          >
            <p>
              <strong>Jennifer Jackson</strong>,{' '}
              <Link href="https://www.huffpost.com/entry/exclusive-interview-playmate-jennifer-jackson_n_980502">
                model and now a social worker from Chicago
              </Link>
              , was the first Black Playmate ever to be featured in the
              magazine.
            </p>
            <p>
              This was a time at the height of the Civil Rights Movement, and
              the{' '}
              <Link href="https://en.wikipedia.org/wiki/Civil_rights_movement#Voting_Rights_Act_of_1965">
                Voting Rights Act of 1965
              </Link>{' '}
              would be introduced only months later.
            </p>
            <p>
              Years later, Playboy would{' '}
              <Link href="https://twitter.com/Playboy/status/921155223745306624">
                tweet some of the angry letters they received
              </Link>{' '}
              after featuring a Black Playmate, as well as the support.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Karen}
            setStep={setStep}
            number={8}
            total={totalSlides}
          >
            <p>
              <strong>Karen McDougal</strong> made headlines when the story of
              her alleged affair with Donald Trump broke in the media 4 days
              before the 2016 election.{' '}
              <Link href="https://www.newyorker.com/news/news-desk/donald-trump-a-playboy-model-and-a-system-for-concealing-infidelity-national-enquirer-karen-mcdougal">
                Read more about that
              </Link>{' '}
              in The New Yorker.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.InesRau}
            setStep={setStep}
            number={9}
            total={totalSlides}
          >
            <p>
              In November 2017, <strong>Ines Rau</strong>{' '}
              <Link href="https://edition.cnn.com/2017/10/20/entertainment/ines-rau-playboy/index.html">
                became the first openly transgender Playmate
              </Link>{' '}
              in the magazine's history.
            </p>
            <p>
              This was, however, her second appearance, her first image in May
              of 2014 was titled "Evolution."
            </p>
            <p>
              After backlash, Playboy{' '}
              <Link href="https://twitter.com/Playboy/status/921155850269536256">
                tweeted their support
              </Link>{' '}
              for this decision with the caption: "Standing on the right side of
              history."
            </p>
          </Waypoint>

          <Waypoint
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
              her life - she didn't wear shorts until she was 23 -{' '}
              <Link href="https://www.foxnews.com/entertainment/playboy-playmate-marsha-elle">
                she became the first amputee Playmate
              </Link>
              .
            </p>
          </Waypoint>

          <Waypoint
            step={Step.OtherFirsts}
            setStep={setStep}
            number={11}
            total={totalSlides}
          >
            <p>
              Here are some of the other "firsts" in Playmate history, explore
              some of the unusual firsts for Playboy.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Hefner}
            setStep={setStep}
            number={12}
            total={totalSlides}
          >
            <h2>End of an Era</h2>
            <p>
              Hugh Hefner passed away on September 27, 2017. It's{' '}
              <Link href="https://money.cnn.com/2017/09/27/media/hugh-hefner/index.html#:~:text=Hefner%20helped%20personally%20select%20monthly%20%22Playmates%2C%22">
                reported
              </Link>{' '}
              that he was personally involved in picking Playmates of the Month,
              and the data below suggests that the characteristics of who gets
              selected have started changing significantly after his death.
            </p>
            <p>
              While Hefner had his fans, it is known that many of those who
              worked with him{' '}
              <Link href="https://www.vice.com/en/article/bjvyvw/dont-mourn-for-hugh-hefner">
                had harrowing experiences
              </Link>
              , and{' '}
              <Link href="https://www.usmagazine.com/celebrity-news/pictures/every-former-playmate-whos-spoken-out-against-hugh-hefner/">
                a lot of Playmates have spoken out against him
              </Link>
              .
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Age}
            setStep={setStep}
            number={13}
            total={totalSlides}
          >
            <h2>Age</h2>
            <AvgChange step={Step.Age} />
            <p>
              There has been an <strong>increase of about 4 years</strong> in
              the ages of Playmates since the first issue.
            </p>
            <p>
              Note the highlighted area in red. Eight Playmates were under the
              age of 18 when photographed. By today's laws, this would be a
              felony. In the 1950s, Hefner was taken to court for{' '}
              <Link href="https://www.newyorker.com/magazine/2006/03/20/the-girls-next-door-2">
                contributing to the delinquency of a minor
              </Link>
              . Still, the case was dismissed as the child had written
              permission from her mother.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Height}
            setStep={setStep}
            number={14}
            total={totalSlides}
          >
            <h2>Height</h2>
            <AvgChange step={Step.Height} />
            <p>
              Playmates have always been taller than the average American woman,
              but they have gotten even taller through time, about a{' '}
              <strong>5% increase</strong> since 1954.
            </p>
            <p>
              The average height of women in the US was{' '}
              <Measurement metric="162.6 cm" imperial={`5'4"`} />{' '}
              <Link href="https://www.cdc.gov/nchs/data/series/sr_03/sr03-046-508.pdf">
                between 2015-2018 [pdf]
              </Link>
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Weight}
            setStep={setStep}
            number={15}
            total={totalSlides}
          >
            <h2>Weight</h2>
            <AvgChange step={Step.Weight} />
            <p>
              Weight has similarly seen an <strong>increase of about 8%</strong>
              . The average weight after Hefner's death strays sharply from the
              average prior, strongly suggesting Hefner favored women of a
              certain size.
            </p>
            <p>
              <strong>Ali Chanel</strong>, dubbed "Playboy's curviest Playmate,"
              is regarded as a champion of body positivity and has{' '}
              <Link href="https://www.foxnews.com/entertainment/ali-chanel-playboy-playmate">
                encouraged
              </Link>{' '}
              others to accept their bodies as they are.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Bust}
            setStep={setStep}
            number={16}
            total={totalSlides}
          >
            <h2>Bust</h2>
            <AvgChange step={Step.Bust} />
            <p>
              There has been a significant drop in bust sizes,{' '}
              <strong>9.6% decrease</strong> overall.
            </p>
            <p>
              This is interesting, because most sources online claim that bust
              size, especially in the US has actually <em>gone up</em>, but
              without citing clear sources.
            </p>
            <p>
              Between September 2012 and Hefner's death, there was an
              inexplicable upper cap on bust size. After his death, we start
              seeing huge variance again, like in the early days.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Waist}
            setStep={setStep}
            number={17}
            total={totalSlides}
          >
            <h2>Waist</h2>
            <AvgChange step={Step.Waist} />
            <p>
              The most significant change among body measurements is the waist,
              with an <strong>11% increase</strong>. Playmates with larger waist
              measurements are featured more often after 2017. About 13% of the
              women were above <Measurement metric="71.2 cm" imperial={`28"`} />{' '}
              after Hefner's death, compared to &lt;1% beforehand.
            </p>

            <p>
              Even with that, the average waist measurement of women in the US
              was <Measurement metric="92.1 cm" imperial={`36"`} /> between
              2015-2018.{' '}
              <strong>
                No Playmate has ever been at the US average for waist
                measurement
              </strong>
              .
            </p>

            <p>
              Having a smaller waist is the most statistically significant
              distinction between Playmates and the US average.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Hips}
            setStep={setStep}
            number={18}
            total={totalSlides}
          >
            <h2>Hips</h2>
            <AvgChange step={Step.Hips} />
            <p>
              Hip measurements have seen a <strong>minor 2% increase</strong>,
              yet most of that increase is carried by the post-2017 Playmates
              with much higher measurements than in the history of the magazine.
            </p>
            <p>
              In fact, 20% of the Playmates had larger hips in the period after
              Hefner's death than at any other point in the magazine's history.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Hair}
            setStep={setStep}
            number={19}
            total={totalSlides}
          >
            <h2>Hair color</h2>
            <p>
              Some of the most famous faces from Playboy, like Marilyn Monroe,
              Pamela Anderson, and Anna Nicole Smith, were all blond.
            </p>
            <p>
              But there is an almost equal occurrence of brown and blond hair in
              the magazine. Black hair, however, is underrepresented.
            </p>
            <p>
              Especially in the US, having light hair has become the "beauty
              standard," with{' '}
              <Link href="https://books.google.ca/books?id=3asbkganD14C&q=What+percent+of+adults+are+naturally+blond%3F&pg=PA52&redir_esc=y#v=onepage&q=What%20percent%20of%20adults%20are%20naturally%20blond%3F&f=false">
                48% of White college women dyeing their hair blond or blonder
              </Link>
              , higher than any other color. In fact, a survey in 2003 reported
              that only 4% of adults in the US are naturally blond. So we see a
              considerable overrepresentation of blonds in the magazine. This
              might also be a reason why black hair is underrepresented.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Enhancements}
            setStep={setStep}
            number={20}
            total={totalSlides}
          >
            <h2>Cosmetic Enhancements</h2>
            <p>
              Essential to the conversation surrounding Playboy's view of beauty
              is the lengths that many individuals went to achieve it. Cosmetic
              enhancements by way of surgical procedures are quite common among
              Playmates.
            </p>
            <p>
              In this case, we can clearly see that enhanced breasts came into
              prominence starting around 1985 and peaked around 2010 before
              fading away again. This is doubly interesting when you consider
              that bust sizes have steadily gone down over the years.
            </p>
          </Waypoint>

          <Waypoint
            step={Step.Ethnicity}
            setStep={setStep}
            number={21}
            total={totalSlides}
          >
            <h2>Ethnicity</h2>
            <p>
              Historically, the magazine has reinforced the{' '}
              <Link href="https://www.npr.org/sections/codeswitch/2019/02/06/685506578/is-beauty-in-the-eyes-of-the-colonizer">
                colonizer perspective
              </Link>{' '}
              and constructs the "All-American Beauty" as a blond, skinny, white
              woman, with 90% of its Playmates being white. It featured a single
              Black woman for the first time in 1965, and it did not feature a
              Black woman again for four years.
            </p>
            <p>
              Playboy's exclusion of BIPOC individuals from its pages impacts
              more than just its readers. The "blast radius" of its influence
              continues to negatively impact BIPOC communities, especially young
              women, and will likely continue to affect them for years to come.
            </p>
            <p>
              Also, despite their progressive image, only 2019 and 2020 had 40%
              non-white Playmates, the most it has ever been in its 67-year
              history. In fact, these are the only years that reflect the{' '}
              <Link href="https://en.wikipedia.org/wiki/Race_and_ethnicity_in_the_United_States#:~:text=2019%20U.S.%20Census%20Bureau%20Estimates%5B15%5D">
                actual population distribution in the United States
              </Link>
              .
            </p>
            <p>
              In contrast, Hefner{' '}
              <Link href="https://people.com/music/hugh-hefner-dead-playboy-after-dark-music-performances/#:~:text=Mostly%20importantly%2C%20the%20publishing%20giant%20used%20his%20outlet%20to%20give%20equal%20airtime%20to%20African%2DAmerican%20artists%2C%20allowing%20Ike%20and%20Tina%20Turner%2C%20James%20Brown%2C%20B.B.%20King%20and%20Motown%E2%80%99s%20Marvin%20Gaye%20and%20Smokey%20Robinson%20an%20all%2Dtoo%2Drare%20opportunity%20to%20share%20their%20talent%20and%20message%20with%20the%20country.">
                gave equal airtime
              </Link>{' '}
              to Black artists in his TV show "Playboy After Dark."
            </p>
          </Waypoint>
        </div>
      </div>
    </>
  )
}

export function ScrollyJustChart({ initialStep }: { initialStep: Step }) {
  return (
    <div
      style={{
        // height: '350px',
        // width: '60%',
        width: '100%',
        height: '500px',
        margin: '0 auto',
      }}
    >
      <ResponsiveSvg margin={{ top: 30, left: 40, right: 20, bottom: 10 }}>
        <Chart step={initialStep} playmateCircleSize={3} />
        {PointSteps.includes(initialStep) && <Highlights step={initialStep} />}
      </ResponsiveSvg>
    </div>
  )
}
