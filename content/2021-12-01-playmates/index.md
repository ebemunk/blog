+++
publishDate = "2021-08-31"
title = "Beholder: Beauty in the eyes of Playboy"
slug = "beholder-beauty-in-the-eyes-of-playboy"
tags = ["data visualization", "playboy", "long form"]
image = "img/plane-crashes.png"
hidden = false
related = ["2019-01-05-plane-crashes.md", "2016-02-27-chess-2mil.md"]
shortSummary = "Analyzing the last statements of 454 executed people in Texas."
responsive = true
+++

We're looking at some steamy data this time! I wanted to do something offbeat, but not quite [Last Words in Texas](https://blog.ebemunk.com/last-words-in-texas/)-level soul crushing. So, I gathered some data on Playboy's Playmates of the Month.

There's a rich history behind Playboy, the taboo element, sexiness and beauty. Let's see what the data has to offer!

**Since the subject matter is Playboy and their Playmates of the Month, you should beware that most links might be NSFW. I've taken care to <u>not have any NSFW content on this post</u>.**

The two primary sources for the data here is [mypmates.club](https://mypmates.club/) and [Babepedia](https://www.babepedia.com/). Babepedia has a bit more information, whereas mypmates seems to be a Playboy affiliate site. When there were disagreements about the data, I went with the values in mypmates.

## Who Reads Playboy?

Turns out, Playboy is not very transparent about their demographics. But, I did find some information about who reads playboy from their own [media kit from 2004](https://web.archive.org/web/20041019143228/https://www.playboy.com/mediakit/print_demographics.html). More than a decade later, these values are very outdated, but I think it gives a bit of context into _who Playboy is meant for_.

<div>
  <div class="viz-title">Reading it for the articles</div>
  <div class="viz-subtitle">Demographics breakdown of the magazine (printed) from 2004. Playboy describes them as 
    <strong>brand conscious</strong>,
    <strong>outdoor enthusiasts</strong>,
    <strong>trendsetters</strong> and
    <strong>socially active</strong>.
  </div>
  <div id="viz-demographics-print"></div>
</div>

Playboy also has information about their [online demographics](https://web.archive.org/web/20041022052012/http://www.playboy.com/mediakit/online_demographics.html). The values here are inconsistent, and combined with it's age, it's best to take these with a huge grain of salt.

<div>
  <div class="viz-title">Browsing for the articles</div>
  <div class="viz-subtitle">Demographics breakdown of playboy.com (online) from 2004. Playboy describes them as 
    <strong>tech savvy</strong>,
    <strong>gamers</strong>,
    <strong>online shoppers</strong> and
    <strong>active & adventurous</strong>. Employment adds up to 105%, Household Income adds up to 112% <span style="font-style: normal;">🤷‍♀️</span>.
  </div>
  <div id="viz-demographics-online"></div>
</div>

## Playmates

Since the first issue on December of 1953, Playboy has picked the Playmate of the Month **812** times. Among them are **806** unique Playmates. Playmates are generally featured in what's known as the "centerfold" of a magazine, where the pages have no break between them.

Every Playmate of the Month is awarded prizes ranging from cash ($25,000) to other discretionary gifts. 2020 was the last year that had 12 Playmates of the Month, and since 2021 the Playmates are picked quarterly.

We'll be talking about body measurements, and in this article you can pick which units you prefer to see these numbers in. You can change this at any time, and the visuals will adjust to your preference.

<div id="viz-units"></div>

<div data-scrolly="start">

The pink circles represent all the Playmates by year and month. Mouseover or tap the circles at any point to get more information about the Playmate.

Visit the mypmates link to view the centerfold image.

</div>

<div data-scrolly="marilyn">

Did you know the first woman to be featured in the Playboy magazine was **Marilyn Monroe**? The first edition did not have a "Playmate of the Month" title, but Monroe was crowned the "Sweetheart of the Month".

</div>

<div data-scrolly="noissue">

On March of 1955, the staff couldn't meet the deadlines to deliver the issue, so nothing was released. More information [on this old FAQ](https://web.archive.org/web/20060326233118/http://www.playboy.com/worldofplayboy/faq/collecting.html#4).

</div>

<div data-scrolly="multiMonth">

For the first few years, some women were Playmates for multiple months. **Marilyn Waltz** also appeared under the name of Margaret Scott. Here are all the women who were Playmates for multiple months:

Marilyn Waltz: 3<br />
Janet Pilgrim: 3<br />
Margie Harrison: 2<br />
Marguerite Empey: 2<br />

</div>

<div data-scrolly="multiGirl">

There were 7 issues that featured multiple Playmates. Except for the first time in October 1958, all of them were either twins or triplets.

In total, there are 5 sets of twins and 1 set of triplets that became Playmates at the same time.

</div>

<div data-scrolly="firstAsian">

**China Lee** was the first asian Playmate. Her name is pronounced _chee-na_, coming from the nickname given to her by her Spanish-speaking neighbors "Chinita" (which apparently means "little Chinese girl"...)

</div>

<div data-scrolly="firstBlack">

**Jennifer Jackson** was the first black Playmate ever
to be featured in the magazine.

Mere months later, at the height of the Civil Rights Movement in the
US, the [Voting Rights Act of 1965](https://en.wikipedia.org/wiki/Civil_rights_movement#Voting_Rights_Act_of_1965) was introduced.

HuffPost has a [very interesting interview](https://www.huffpost.com/entry/exclusive-interview-playmate-jennifer-jackson_n_980502) with her about her experiences.

After online backlash for **Ines Rau**, Playboy [tweeted some of the "feedback" they received](https://twitter.com/Playboy/status/921155223745306624) after featuring a black Playmate.

</div>

<div data-scrolly="firstTransgender">

In November 2017, **Ines Rau** became the first openly transgender Playmate in the history of the magazine.

This was however her second appearence, first time in May 2014 with the title "Evolution".

After backlash, Playboy [tweeted their support](https://twitter.com/Playboy/status/921155850269536256) for this decision with the caption: "Standing on the right side of history".

Read more about it on [CNN's article](https://edition.cnn.com/2017/10/20/entertainment/ines-rau-playboy/index.html).

</div>

<div data-scrolly="momDaughter">

**Carol Eden** and **Simone Eden** are the first (and only) Playmates who are mother and daughter.

Simone, following in her mother's footsteps in 1960, became a Playmate in 1989.

</div>

<div data-scrolly="trump">

**Karen McDougal** made headlines when her alleged affair with Trump, and its subsequent "catch and kill" of it's story was made public 4 days before the election in 2016. [Read more about that](https://www.newyorker.com/news/news-desk/donald-trump-a-playboy-model-and-a-system-for-concealing-infidelity-national-enquirer-karen-mcdougal) in The New Yorker.

</div>

<div data-scrolly="otherFirsts">

I highlighted some of the other "firsts" in Playmates' history. Feel free to explore them!

</div>

<div data-scrolly="hugh">

Hugh Hefner passed away on September 27, 2017. It's reported that he has been personally involved in picking Playmates of the Month, and the data below suggests that the characteristics of who gets picked have started changing radically after his death.

Even though it's evident that Playboy has always been progressive, this also highlights some of the biases that he might've reinforced through his personal touch.

Also relevant is this compilation of [every Playmate who's ever spoken out against him](https://www.usmagazine.com/celebrity-news/pictures/every-former-playmate-whos-spoken-out-against-hugh-hefner/).

</div>

<div data-scrolly="mateAge">

There has been a dramatic increase of about 4 years in the ages of Playmates since the first issue.

I've drawn here what I call the YIKES zone. 8 Playmates, up until 1981 were under the age of 18 when photographed and picked as Playmates. This would be a felony today. Wikipedia quotes "in the early years of the magazine, laws regarding corruption of a minor were less well established".

There is the interesting story of **Elizabeth Ann Roberts**, who was photographed at the age of 16. Hugh Hefner and Roberts' mother were arrested, but case was dismissed after they found that Roberts' mother had signed a statement saying that her daughter was 18. Here's an interesting [Time newsclip from 1958](http://content.time.com/time/subscriber/article/0,33009,865757,00.html).

</div>

<div data-scrolly="height">

Playmates have always been taller than the average woman, but they have gotten even taller throught time, about a 5% increase since 1954.

The average height of women in the US was 162.6 cm or 5'4" [between 2015-2018](https://www.cdc.gov/nchs/data/series/sr_03/sr03-046-508.pdf).

</div>

<div data-scrolly="weight">

Weight has similarly seen an increase of about 8%. What is striking is how the variance in weight explodes after Hefner's death.

It's unclear if this data is self-reported, in which case the measurements might be underestimates. Some reported weights seem very low.

**Ali Chanel** is an obvious outlier, and a welcome one for body positivity. Dubbed "Playboy's curviest Playmate", attention was immediately focused on her. She talks about her experience and reactions in [her interview with FOX](https://www.foxnews.com/entertainment/ali-chanel-playboy-playmate).

</div>

<div data-scrolly="bust">

There has been a significant drop in bust sizes, 9.6% decrease overall.

This is interesting, because most sources online claim that bust size, especially in the US has actually _gone up_, but without citing clear sources.

Between September 2012 until Hefner's death, there was an upper cap on bust size. We start seeing huge variance once again, like the early days, after his death.

</div>

<div data-scrolly="waist">

The highest change in body measurements are for waist, a whopping 11% increase with way more larger Playmates being featured especially after 2017.

Even with that, the average waist measurement of women in the US was 92.1 cm or 36.3" [between 2015-2018](https://www.cdc.gov/nchs/data/series/sr_03/sr03-046-508.pdf). If we plot it on this graph, it would extend beyond the top axis. In other words, **no Playmate has ever been at the US average for waist measurement**.

Having a smaller waist is the most important distinction between Playmates and the US average.

</div>

<div data-scrolly="hips">

Yet another example of explosion of variance after Hefner's death, hip measurements have seen a minor 2% increase, yet most of that increase is carried by the post-2017 Playmates with much higher measurements than in the history of Playmates.

**Buffy Tyler** is the strong outlier here, with the smallest waist measurement ever by far.

</div>

<div data-scrolly="hair">

Without looking at the data, my bias would've been that Playmates would be majority blond. It's not the case, as there is almost the same amount of blond and brown hair.

That said, many sources claim that blond hair is much rarer than brown or black hair, by an order of magnitude. If that's true, then blondes are definitely overrepresented among Playmates.

</div>

<div data-scrolly="ethnicity">

Despite featuring a black Playmate early in their publication, and receiving backlash for it, Playboy undoubtedly prefers white women, with a 90% majority.

Too bad I have no data on the ethnicity of Playboy's demographics, but I would bet money that this Playmate distribution closely mirrors reader ethnicities as well.

Also despite their progressive image, only 2019 and 2020 had 40% non-white Playmates, the most it's ever been in it's 67-year history.

</div>

<div data-scrolly="breasts">

This was another surprise for me. You can clearly see that enhanced
breasts came into prominence starting around 1995 and peaked around
2010s before fading away again.

</div>

<div data-scrolly="cup">

US average is reported to be DD cup.

I'm not quite sure how these data points were gathered to be honest,
so approach with healthy skepticism.

</div>

<div id="viz-scatter"></div>

This was a high-level look into the patterns and quirks of our Playmate population. Let's now dig into some specifics which I found to be relevant in many respects. Before we proceed, you can once again make a selection to see the results in your preferred units.

<div id="viz-units2"></div>

## The Hourglass

"The Hourglass Figure" is one the most well-known body shapes. All across media, including in Playboy, it's shown to be the most desirable. Yet, there is evidence that this insistance is responsible for the [widespread body dissatisfaction and eating disorders in young women](https://www.semanticscholar.org/paper/An-Evolutionary-Theory-of-Female-Physical-Singh/00dde6b664c882410fa5e4ed1d7e17f994636793), and that _"losing body weight by dieting may not lead to positive body image as weight loss does not significantly alter the nature of fat distribution"_.

<div>
  <div class="viz-title">Breaking the mold</div>
  <div class="viz-subtitle">2020 is the first and only year the hourglass-figure mold was broken. Bust measurements decline through the decades, waist and hips increase. Thicc is finally embraced in 2020. The "Ideal" <span data-cms="90">90</span>-<span data-cms="60">60</span>-<span data-cms="90">90</span> shown in red. <a href="https://www.huffpost.com/entry/the-scary-reality-of-a-re_b_845239" target="_blank">Projected dimensions</a> of the Barbie doll in yellow. Click on the decades to isolate.</div>
  <div id="viz-bwh"></div>
</div>

It is encouraging to see that 2020s have broken this mold. Both waist and hip measurements have gotten larger, to accommodate the other common body shapes, like the pear and the rectangle. Playboy is finally warming up to thiccness.

I plotted the controversial measurements for the Barbie doll to highlight [how ridiculous](https://www.chapman.edu/students/health-and-safety/psychological-counseling/_files/eating-disorder-files/13-barbie-facts.pdf) the proportions [used to be](https://time.com/barbie-new-body-cover-story/).

## Body-Mass Index

Body-Mass Index, aka BMI relates your weight to your height. As noted in [CDC page](https://www.cdc.gov/obesity/adult/defining.html), it is a screening tool for weight-related risks. For some healthy people, and especially athletes, BMI is known to be inaccurate. Note that it is a _screening tool_ and not a diagnosis of body fat or health.

[CDC NCHS](https://www.cdc.gov/nchs/data/series/sr_03/sr03-046-508.pdf) has results from 2015-2018 among a sample population, so we can compare the average 20-29 year old woman to the average Playmate.

<div>
  <div class="viz-title">Straddling the line</div>
  <div class="viz-subtitle">More than half of Playmates are Underweight, 48% are in the Healthy range. There are only 2 other Playmates (<1%) in any other category. The difference of the averages between US women and Playmates is staggering.</div>
  <div id="viz-bmi"></div>
</div>

## Waist-to-Hips Ratio

Waist-to-Hips Ratio, aka WHR is a simple ratio of waist circumference divided by hips circumference. It's been [theorized](https://en.wikipedia.org/wiki/Waist%E2%80%93hip_ratio#As_an_indicator_of_attractiveness) that it has critical bearing on attractiveness. Interestingly, the research done around this also used Playboy model's WHRs in their dataset.

<div>
  <div class="viz-title">The Magic Number</div>
  <div class="viz-subtitle">A Waist-to-Hip Ratio of 0.7, which accounts for 26% of Playmates is said to be the "perfect" ratio for attractiveness. Highlighted are the "most attractive" WHRs from other cultures/places.</div>
  <div id="viz-whr"></div>
</div>

[Here is some fantastic reading](https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/figur/figur.htm) about "figure" and theories around attractiveness. A quote from it:

> The more traditional the women's role, the more curvaceous was the ideal figure. The greater the economic growth and the women's role in the educational system and employment, the less curvaceous was the ideal body.

Is the pressure on attractiveness in a modern society a result of some of the many forms of patriarchal oppression?

## Geography

Let's now take a little break from numbers, and look at some geography. Where are Playmates from? Despite it's global reach (as is common with most US-based media), **41** countries have had Playmates outside of the US, and they account for only ~18% of the total.

<div>
  <div class="viz-title">Birthplace of Playmates</div>
  <div class="viz-subtitle">Only 18% of Playmates were born outside of the US. Focus on the regions of the world where no Playmate was born in.</div>
  <div id="viz-birthplace"></div>
</div>

Important thing to highlight here isn't "how many Playmates came from which countries?", but "what regions of the world have never had Playmates?". Africa is almost completely ignored besides **Ida Ljungqvist** from Tanzania. Middle eastern countries have never had one, and most of Asia remains barren. **United Kingdom** and **Germany** lead among the European countries, and **Brazil** is the favorite in South America.

Below is a different view of the same data for those curious about the individual Playmates.

<div>
  <div class="viz-title">Birthplace of Playmates</div>
  <div class="viz-subtitle">Hover/tap over the dots to view details.</div>
  <div id="viz-birthplace-bins"></div>
</div>

We can't ignore ~82% of the data though, so let's see the State's breakdown of birthplaces.

<div>
  <div class="viz-title">Californication</div>
  <div class="viz-subtitle">West coast - best coast for Playmates. Vermont and Delaware are the only states that have never had Playmates.</div>
  <div id="viz-birthplace-usa"></div>
</div>

Not surprising, as Playboy is headquartered in Beverly Hills, California and has largely carried some of the west coast sensibilities when it comes to beauty. I know that some my friends from the US have rivalries among their home states, so here's a tidbit: **Vermont** and **Delaware** are the only 2 states that have never had Playmates. Also, **Hawaii** has had more Playmates than **Wyoming**, **South Dakota**, **Iowa**, **West Virginia** and **New Hampshire** combined.

Below a similar chart as the previous one, for the detail-oriented.

<div>
  <div class="viz-title">Birthplace in the US</div>
  <div class="viz-subtitle">Hover/tap over the dots to view details.</div>
  <div id="viz-birthplace-bins-usa"></div>
</div>

## The "Most Average" Playmates

We focused on how the "Average US Woman 20-29" differs from the Playmates, but what about within the group? Who's the "averagest" Playmate, and who's the least average? To find out, I first calculated the average values across all Playmates for their weight, height, body measurements, hair color and ethnicity. Then, I ordered them by their _distance_ from this average.

<div>
  <div class="viz-title">Most/Least Average Playmates</div>
  <div class="viz-subtitle">Playmates ordered by their distance to the average of their data points. Old-School vs New-School. Top 5 most average are all from older issues, whereas the top 5 least average are all from 2000 and later.</div>
  <div id="viz-mostaverage"></div>
</div>

Not surprising that **Ali Chanel** is the least average Playmate, as she was an outlier in most categories. I am happy to see that since the 2000s, Playboy has been pushing its own boundaries and including people with much more diverse characteristics.

<div>
  <div class="viz-title">Difference from Average per Year</div>
  <div class="viz-subtitle">Playmates have been increasingly "different" from the "Most Average Playmate" through the years.</div>
  <div id="viz-mostaverage-years"></div>
</div>

For the nerds among you, this is the _euclidian distance_ from the average. I also computed the _cosine similarity_ out of curiosity. Ask me about it on Twitter.

## k-means Body Shapes

I admit, this is the most gratuitous analysis here, but I wanted to see what an [unsupervised learning algorithm](https://en.wikipedia.org/wiki/K-means_clustering) would say about our population of Playmates, specifically body shapes.

This is probably a coincidence and not to be taken seriously (seriously!), but was cool to see.

Below visualization was inspired by the [MVClustViz](https://www.igi-global.com/article/mvclustviz/103841) visualization.

<div>
  <div class="viz-title">k-means for body shape?</div>
  <div class="viz-subtitle">Finding 3 clusters for bust, waist and hips measurements. Cluster 1 is for triangle, or "pear" shape. Cluster 2 is square, and Cluster 3 is hourglass.</div>
  <div id="viz-kmeans"></div>
</div>

It's interesting that k-means can find these 3 clusters which correspond pretty well with some common body shapes.

## Fin

Thanks for going down another rabbit hole with me! I hope this was informative and entertaining. It's not a secret that women who appear in Playboy are far removed from the average person, even though they tout the "girl next door" vibe.

I hope the trend in embracing more diverse body types and characteristics continues into the future, a future where women don't feel the obscene pressure to conform to unreasonable standards set forth by random people, one where we are all beautiful.

<div id="viz-trends"></div>

<script src="http://localhost:9001/bundle.js"></script>
<!-- <script src="/build/bundle.js"></script> -->
