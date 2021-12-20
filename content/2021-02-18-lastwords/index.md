+++
publishDate = "2021-04-03"
title = "Last Words in Texas"
slug = "last-words-in-texas"
tags = ["data visualization", "long form", "text mining"]
image = "img/last-words-in-texas.png"
shortSummary = "Analyzing the last statements of 454 executed people in Texas."
related = ["2018-12-29-chess-part2.md", "2019-01-05-plane-crashes.md"]
responsive = true
+++

In July of 1976, the US Supreme Court set forth the framework that states must follow to comply with the ban on _cruel and unusual punishment_ in the Eighth Amendment with the _[Gregg v. Georgia decision](https://en.wikipedia.org/wiki/Gregg_v._Georgia#Decision_of_the_Court)_. Since then, **1532 people were executed in the United States**. Death penalty and executions are subject to local laws and not every state carries them out to the same extent [(map)](https://en.wikipedia.org/wiki/Capital_punishment_in_the_United_States#/media/File:Death_penalty_in_the_United_States_with_hiatuses.svg).

Texas carries out the majority of these executions, having executed more people than the next top 6 states combined. It's also where the [first execution by lethal injection in the world](https://en.wikipedia.org/wiki/Capital_punishment_in_Texas) took place. In Texas, capital crimes generally involve [murders](https://en.wikipedia.org/wiki/Capital_punishment_in_Texas#Capital_crimes).

<div>
	<div class="viz-title">Executions since 1976</div>
	<div class="viz-subtitle">Texas has executed more people than the next top 6 states combined. This accounts for 37% of total executions carried out in the US.</div>
	<div id="executionTotals" class="viz"></div>
</div>

The execution procedure varies from state to state, but in Texas, inmates are given the chance to make a last statement right before execution. These statements are made public in the [Death Row Information](https://www.tdcj.texas.gov/death_row/dr_executed_offenders.html) page of the Texas Department of Criminal Justice (TDCJ).

An interesting dataset; I wanted to see what I could learn from it by looking at the very last words of people sentenced to death (who've spent many years [in isolation for 20+ hours a day](https://www.themarshallproject.org/2017/07/23/condemned-to-death-and-solitary-confinement)). Though the crimes are heinous, I wanted to acknowledge that these are still human beings, [some possibly innocent](https://deathpenaltyinfo.org/policy-issues/innocence).

<div>
	<div class="viz-title">Choosing to speak</div>
	<div class="viz-subtitle">Of the 570 executions carried out in Texas between 1982 to 2021, only 20% declined to make a last statement.</div>
	<div id="lastStatementRatio" class="viz"></div>
</div>

Few statements have both verbal and/or written components, and I've included them all in this analysis.

## Words

The simplest statistic we can look into here are the individual words that comprise these final statements. What would you say, if it were you? I suppose this also depends on [who's in the room to witness](https://www.tdcj.texas.gov/divisions/vs/viewing_executions.html) your execution. Let's see:

<div>
	<div class="viz-title">Love knows no bounds</div>
	<div class="viz-subtitle">Top 100 most commonly used words in last statements.</div>
	<div id="most-common-words" class="viz"></div>
</div>

Interesting. It looks much more hopeful and positive than I would've imagined. <span class="wordFreq">**love**</span> is the most commonly used word, surrounded by <span class="wordFreq">**family**</span>, <span class="wordFreq">**sorry**</span>, <span class="wordFreq">**forgive**</span> and terms like <span class="wordFreq">**death**</span>, <span class="wordFreq">**pain**</span>, <span class="wordFreq">**kill**</span> are uttered much less. Even religious terms are secondary in these statements. <span class="wordFreq">**hate**</span> appears ~20 times less than it's opposite.

## Length

What about the length of statements? Is there a limit to them? Can you try to _filibuster_ your own execution? Would you bother, after spending years and years in isolation on death row?

Considering that [the average rate of speech in the US is about 150 words per minute](http://www.ncvs.org/ncvs/tutorials/voiceprod/tutorial/quality.html), most last statements take less than a minute. By the same calculation, the longest statement could've taken around 8.5 minutes.

<div>
	<div class="viz-title">Word Count</div>
	<div class="viz-subtitle">Majority of last statements are under 100 words, and take less than a minute to deliver.</div>
	<div id="statement-lengths" class="viz"></div>
</div>

## Phrases

One way to identify phrases (without going all-in linguist) is with [**n-grams**](https://en.wikipedia.org/wiki/N-gram). It's a convenient way to isolate unique phrases in text and speech. In this case, I've picked _n=3_, also called a trigram. This is useful as it will provide a bit more context into the most common words we've seen above.

<div>
	<div class="viz-title">Trigrams</div>
	<div class="viz-subtitle">Most commonly used 3-word phrases in last statements. Click to zoom.</div>
	<div id="trigrams" class="viz"></div>
</div>

This trigrams visualization was inspired by ["Web Trigrams"](https://www.chrisharrison.net/index.php/Visualizations/WebTrigrams) by [Chris Harrison](https://www.chrisharrison.net/).

**I love you**, **I am sorry**, **love you all**, **thank you for** all make sense to me. Make sure to play around and see if you can spot other unique phrases. For more on this, check out ["Death in Texas"](https://jonmillward.com/blog/psychological-subtleties/death-in-texas-analyzing-the-last-words-of-478-death-row-prisoners/) by [Jon Millward](https://jonmillward.com/blog/).

## Sentiment

The first thing to note is that TDCJ redacts profanity from the text of the last statements. Still, it's replaced with some kind of notice of the redaction, with phrases like _[Profanity directed toward staff.]_ and _[Portion of statement omitted due to profanity]_. Only **3** statements among 454 contain any such notation. There are rarely swear words flying around. This is further evidenced by the overall sentiment of last statements, which tend to lean towards positive.

<div>
	<div class="viz-title">Ending on a positive note</div>
	<div class="viz-subtitle">More than 50% of the statements have positive sentiment.</div>
	<div id="statementSentiment" class="viz"></div>
</div>

Google's [Cloud Natural Language](https://cloud.google.com/natural-language) provides sentiment analysis for text. What's interesting here is that it can identify "entities" in text. Here are some select "people" entities, with their average sentiment and the average "salience", which is a measure of the word's importance in the text.

<div>
	<div class="viz-title">God and Satan and everything in between</div>
	<div class="viz-subtitle">Sentiment towards groups in the criminal justice system are generally negative, but positive towards individuals.</div>
	<div id="person-sentiment" class="viz"></div>
</div>

It's easy to get caught up in the exact numbers, but here we see a portrait of which people are referenced in last statements and under what light. Lots of family members are mentioned with goodbyes. <span class="statementSentiment">**warden**</span> generally has a positive sentiment whereas people involved in the criminal justice system such as <span class="statementSentiment">**judge**</span>, <span class="statementSentiment">**police**</span>, <span class="statementSentiment">**investigators**</span> and <span class="statementSentiment">**jury**</span> are spoken to in a more negative light.

An interesting finding here is that the individual <span class="statementSentiment">**officers**</span> have a positive sentiment, whereas <span class="statementSentiment">**police**</span> as an institution of people have a far more negative tone.

I imagine the negative sentiment of <span class="statementSentiment">**victim**</span> is because it's often spoken about in a sad, remorseful, indignant or apologetic tone. <span class="statementSentiment">**irene**</span> of course is one of the most positively mentioned names... Wait what? Who's Irene?

## Irene?

This is one of the things I never saw in any of the other related projects I found researching this. Irene? I came across the name Irene when messing around with the data quite often. Let's see the top 5 mentions by name:

<div>
	<div class="viz-title">Who is Irene?</div>
	<div class="viz-subtitle">Top 5 first name mentions. An outlier in the data tells a story of compassion.</div>
	<div id="firstNames" class="viz"></div>
</div>

**Jesus:** pretty obvious, considering the [demographics of Texas](https://en.wikipedia.org/wiki/Demographics_of_Texas#Religion) this isn't a shocker.\
**John:** [one of most common names in the US](<https://en.wikipedia.org/wiki/John_(given_name)#Name_statistics>).\
**Jack:** ok, I'd imagine that it was up there with John.\
**Father:** is sometimes a religious minister, sometimes god or "Heavenly Father".

But **Irene**? [The 632nd most popular name in the US](<https://en.wikipedia.org/wiki/Irene_(given_name)>) appears 18 times in the last statements of 454 executed people in Texas? I had to dig. Are these 18 different "Irene"s, or could it be 1 person?

Irene in some statements appears as "Irene Wilcox". Some searching led me to [TDCJ Chaplains' Network](http://www.preciousheart.net/chaplaincy/Prison_Ministries.htm). Her husband's name: **Jack**. It seems that Irene and Jack were [TDCJ Chaplains](https://www.tdcj.texas.gov/TDCJ_chaplains.html) that offered spiritual counselling.

Sadly, Irene [passed away in 2013](https://www.newhopefh.com/obituary/irene-wilcox) but I find it interesting that someone - who has clearly touched so many of these people and left a lasting impression - showing such compassion can come up as an outlier in otherwise mundane data.

## Stays of Execution

In the US, [all death sentences are stayed automatically](https://en.wikipedia.org/wiki/Stay_of_execution) until reviewed by an Appeals Court. Executions are stayed (i.e. postponed until a later date for reexamination) quite frequently: one-third of people executed went through [more than one death date](https://www.themarshallproject.org/2021/02/10/what-120-executions-tell-us-about-criminal-justice-in-america). Sometimes executions are stayed mere hours before an execution, and in one case the inmate had already been strapped to the gurney with [the needle in his arms](https://www.straightdope.com/21341822/when-someone-is-executed-by-lethal-injection-do-they-swab-off-the-arm-first) when the stay of execution came through.

<div>
	<div class="viz-title">The final (-final) date</div>
	<div class="viz-subtitle">Since 2010, 81 inmates received more than 1 execution date, awaiting their execution date at least twice.</div>
	<div id="numStays" class="viz"></div>
</div>

The combination of years of extended isolation and the multiple stays in addition to the stress of the court process is said to cause the [Death row syndrome](http://jaapl.org/content/33/2/153). Suicide rate on death row is [**10x** the rate for US in total, and **6x** the rate of the US prison population](https://en.wikipedia.org/wiki/Death_row_phenomenon).

I wanted to get a visual sense of the timelines involved, as well as the reasons for stays. A clerical error delaying an execution must be hard to handle.

<div>
	<div class="viz-title">Holding your breath</div>
	<div class="viz-subtitle">All inmates that received at least 3 stays. Stays are usually given on the day of the execution.</div>
	<div id="stays" class="viz"></div>
</div>

## Innocence and Exoneration

In the beginning, I suggested some people might've been innocent and still executed. This is more than pure speculation, there is [strong evidence](https://tcadp.org/get-informed/wrongful-execution/) that up to 10 people might've been [wrongfully executed](https://deathpenaltyinfo.org/policy-issues/innocence/executed-but-possibly-innocent) in Texas. Courts rarely go back to review capital cases after execution, and defense lawyers must move onto advocate for other people.

On the other side of the coin, since 1972, **16** people convicted of capital crimes were [later exonerated](https://deathpenaltyinfo.org/policy-issues/innocence-database?filters%5Bstate%5D=Texas) on appeals.

<div>
	<div class="viz-title">Reasons for exoneration</div>
	<div class="viz-subtitle">Reasons contributing to the exoneration of those initially convicted of capital crimes. False Accusations and Official Misconduct are leading reasons for exonerations in Texas.</div>
	<div id="exonerations" class="viz"></div>
</div>

You can read more about the exonerations [here](https://deathpenaltyinfo.org/policy-issues/innocence/description-of-innocence-cases).

## One Last Ride

I invite you to take a moment to reflect on an inmate's last journey, given the information above. Capital punishment is a polarizing issue with strong feelings and evidence for both sides. Still, it might be valuable to take 60 seconds and see what goes through your mind.

<div id="lastRide"></div>

Thanks for reading, if you've made it this far! This dataset is analyzed by many others before me, and a google search will get you a lots of other gems. Here's one I like, definitely check out ["Bye, Warden"](https://www.arcgis.com/apps/Cascade/index.html?appid=cf10a403e053440985db6e839d1dcccb) by [Genevieve Milliken](https://genevievemilliken.com/).

<script>
	window.HMR_WEBSOCKET_PORT = 8080
</script>

<!--
<script type="module" src="//localhost:8080/index.js"></script>
-->
<script type="module" src="build/index.js"></script>
<link rel="stylesheet" href="build/index.css">
<link rel="stylesheet" href="build/leaflet.css">
