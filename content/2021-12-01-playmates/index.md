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

**Since the subject matter is Playboy and their Playmates of the Month, you should beware that most links will be NSFW. I've taken care to <u>not have any NSFW content on this post</u>.**

The two primary sources for the data here is [mypmates.club](https://mypmates.club/) and [Babepedia](https://www.babepedia.com/). Babepedia has a bit more information, whereas mypmates seems to be a Playboy affiliate site. When there were disagreements about the data, I went with the values in mypmates.

## Who Reads Playboy?

Turns out, Playboy is not very transparent with their demographics (not sure if this is common among other magazines). But, I did find some information about who reads playboy from their own [media kit from 2004](https://web.archive.org/web/20041019143228/https://www.playboy.com/mediakit/print_demographics.html). More than a decade later, obviously these values are outdated, but I think it gives a bit of context into _who Playboy is meant for_.

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

Playboy also has information for their [online demographics](https://web.archive.org/web/20041022052012/http://www.playboy.com/mediakit/online_demographics.html). The values here are inconsistent, and combined with it's age, it's best to take these with a huge grain of salt.

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

**806** unique Playmates.

We'll be talking about body measurements, and in this article you can pick which units you prefer to see these numbers in. You can change this at any time, and the visuals will adjust to your preference.

<div id="viz-units"></div>

<div id="viz-scatter"></div>

This was a high-level look into the patterns and quirks of our Playmate population. Let's now dig into some specifics which I found to be relevant in many respects. Before we proceed, you can once again make a selection to see the results in your preferred units.

<div id="viz-units2"></div>

## The Hourglass

"The Hourglass Figure" is the most well-known body shapes. All across the media (including Playboy) it's shown to be the most desirable body shape. Yet, there is evidence that this insistance in the media is responsible for the [widespread body dissatisfaction and eating disorders in young women](https://www.semanticscholar.org/paper/An-Evolutionary-Theory-of-Female-Physical-Singh/00dde6b664c882410fa5e4ed1d7e17f994636793), and that "losing body weight by dieting may not lead to positive body image as weight loss does not significantly alter the nature of fat distribution".

<div>
  <div class="viz-title">Breaking the mold</div>
  <div class="viz-subtitle">2020 is the first and only year the hourglass-figure mold was broken. Bust measurements decline through the decades, waist and hips increase. Thicc is finally embraced in 2020. The "Ideal" <span data-cms="90">90</span>-<span data-cms="60">60</span>-<span data-cms="90">90</span> shown in red. <a href="https://www.huffpost.com/entry/the-scary-reality-of-a-re_b_845239" target="_blank">Projected dimensions</a> of the Barbie doll in yellow.</div>
  <div id="viz-bwh"></div>
</div>

It is encouraging to see that 2020s have seen the breaking of this mold somewhat. Both waist and hip measurements have gotten larger, to accommodate the other common body shapes, like the pear and the rectangle. "Thicc" seems to be finally embraced in the modern world by Playboy.

I plotted the controversial measurements for the Barbie doll to highlight [how ridiculous](https://www.chapman.edu/students/health-and-safety/psychological-counseling/_files/eating-disorder-files/13-barbie-facts.pdf) the proportions are for the quintessential toy for young girls.

## Body-Mass Index

Body-Mass Index, aka BMI relates your weight to your height. As noted in [CDC page](https://www.cdc.gov/obesity/adult/defining.html), it is a screening tool for weight-related risks. For some healthy people, and especially athletes, BMI is known to be inaccurate. Note that, it is a _screening tool_ and not a diagnosis of body fat or health.

That said, it's useful to see trends in BMI among Playmates, especially since it can be relatively accurate for populations. [CDC NCHS](https://www.cdc.gov/nchs/data/series/sr_03/sr03-046-508.pdf) has results from 2015-2018 among a sample population, so we can compare the average 20-29 year old woman to the average Playmate.

<div>
  <div class="viz-title">Straddling the line</div>
  <div class="viz-subtitle">More than half of Playmates are Underweight, 48% are in the Healthy range. There are only 2 other playmates (<1%) in any other category. The difference of the averages between US women and Playmates is staggering.</div>
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
  <div class="viz-subtitle">Only 18% of Playmates were born outside of the US. Focus on the regions of the world where no Playmate was born in. What does this say about Playboy?</div>
  <div id="viz-birthplace"></div>
</div>

Important thing to highlight here isn't "how many playmates came from which countries?", but "what regions of the world have never had Playmates?". Africa is almost completely ignored besides **Ida Ljungqvist** from Tanzania. Middle eastern countries have never had one, and most of Asia remains barren. **United Kingdom** and **Germany** lead among the European countries, and **Brazil** is the favorite in South America.

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

Not surprising, as Playboy is headquartered in Beverly Hills, California and has largely carried some of the west coast sensibilities when it comes to beauty. I know that some my friends from the US have rivalries among their home states, so here's a tidbit: **Vermont** and **Delaware** are the only 2 states that have never had Playmates. Also, **Hawaii** has had more playmates than **Wyoming**, **South Dakota**, **Iowa**, **West Virginia** and **New Hampshire** combined.

Below a similar chart as the previous one, for the detail-oriented.

<div>
  <div class="viz-title">Birthplace in the US</div>
  <div class="viz-subtitle">Hover/tap over the dots to view details.</div>
  <div id="viz-birthplace-bins-usa"></div>
</div>

## The "Most Average" Playmates

We focused on how the "Average US Woman 20-29" differs from the Playmates, but what about within the group? Who's the "averagest" Playmate, and who's the least average? To calculate, I first calculated the average values across all Playmates for their weight, height, body measurements, hair color and ethnicities. Then, I ordered them by their _distance_ from this average.

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

## k-means What?

I admit, this is the most gratuitous analysis here, but I wanted to see what an [unsupervised learning algorithm](https://en.wikipedia.org/wiki/K-means_clustering) would say about our population of Playmates, specifically body shapes.

This is probably a coincidence and not to be taken seriously (seriously!), but was cool to see.

Below visualization was inspired by the [MVClustViz](https://www.igi-global.com/article/mvclustviz/103841) visualization.

<div>
  <div class="viz-title">k-means for body shape?</div>
  <div class="viz-subtitle">Finding 3 clusters for bust, waist and hips measurements. Cluster 1 is for triangle, or "pear" shape. Cluster 2 is square, and Cluster 3 is hourglass.</div>
  <div id="viz-kmeans"></div>
</div>

## Outro

Thanks for reading

<div id="viz-trends"></div>

<script src="http://localhost:9001/bundle.js"></script>
<!-- <script src="/build/bundle.js"></script> -->
