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

Turns out, Playboy is not very transparent with their demographics (not sure if this is common among other magazines). But, I did find some information about who reads playboy on their own [media kit from 2004](https://web.archive.org/web/20041019143228/https://www.playboy.com/mediakit/print_demographics.html). More than a decade later, obviously these values are outdated, but I think it gives a bit of context into _who Playboy is meant for_.

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

We'll be talking about body measurements, and in this article you can pick which units you prefer to see these numbers in. You can change this at any time, and the visuals will adjust to your preference.

<div id="viz-units"></div>

<div id="viz-scatter"></div>

This was a high-level look into the patterns and quirks of our Playmate population. Let's now dig into some specifics which I found to be relevant in many respects. Before we proceed, you can once again make a selection to see the results in your preferred units.

<div id="viz-units2"></div>

## The Hourglass

"The Hourglass Figure" is the most well-known body shapes. All across the media (including Playboy) it's shown to be the most desirable body shape. Yet, there is evidence that this insistance in the media is responsible for the <a href="https://www.semanticscholar.org/paper/An-Evolutionary-Theory-of-Female-Physical-Singh/00dde6b664c882410fa5e4ed1d7e17f994636793" target="_blank">widespread body dissatisfaction and eating disorders in young women</a>, and that "losing body weight by dieting may not lead to positive body image as weight loss does not significantly alter the nature of fat distribution".

<div>
  <div class="viz-title">Breaking the mold</div>
  <div class="viz-subtitle">2020 is the first and only year the hourglass-figure mold was broken. Bust measurements decline through the decades, waist and hips increase. Thicc is finally embraced in 2020. The "Ideal" <span data-cms="90">90</span>-<span data-cms="60">60</span>-<span data-cms="90">90</span> shown in red. <a href="https://www.huffpost.com/entry/the-scary-reality-of-a-re_b_845239" target="_blank">Projected dimensions</a> of the Barbie doll in yellow.</div>
  <div id="viz-bwh"></div>
</div>

It is encouraging to see that 2020s have seen the breaking of this mold somewhat. Both waist and hip measurements have gotten larger, to accommodate the other common body shapes, like the pear and the rectangle. "Thicc" seems to be finally embraced in the modern world by Playboy.

I plotted the controversial measurements for the Barbie doll to highlight <a href="https://www.chapman.edu/students/health-and-safety/psychological-counseling/_files/eating-disorder-files/13-barbie-facts.pdf" target="_blank">how ridiculous</a> the proportions are for the quintessential toy for young girls.

## BMI

Body-Mass Index, aka BMI relates your weight to your height. As noted in [CDC page](https://www.cdc.gov/obesity/adult/defining.html), it is a screening tool for weight-related risks. For some healthy people, and especially athletes, BMI is known to be inaccurate. Note that, it is a _screening tool_ and not a diagnosis of body fat or health.

That said, it's useful to see trends in BMI among Playmates, especially since it can be relatively accurate for populations. [CDC NCHS](https://www.cdc.gov/nchs/data/series/sr_03/sr03-046-508.pdf) has results from 2015-2018 among a sample population, so we can compare the average 20-29 year old woman to the average Playmate.

<div>
  <div class="viz-title">Straddling the line</div>
  <div class="viz-subtitle">More than half of Playmates are Underweight, 48% are in the Healthy range. There are only 2 other playmates (<1%) in any other category. The difference of the averages between US women and Playmates is staggering.</div>
  <div id="viz-bmi"></div>
</div>

## WHR

## Geography

Let's now take a little break from numbers, and look at the geography. Where are Playmates from? Despite it's global reach (as is common with most US-based media),

<div>
  <div class="viz-title">birthplace</div>
  <div class="viz-subtitle">yeah
  </div>
  <div id="viz-birthplace"></div>
</div>

dadaaad da d ad

<div>
  <div class="viz-title">birthplace</div>
  <div class="viz-subtitle">yeah
  </div>
  <div id="viz-birthplace-bins"></div>
</div>

dadaaad da d ad

<div>
  <div class="viz-title">usa birthplace</div>
  <div class="viz-subtitle">yeah
  </div>
  <div id="viz-birthplace-usa"></div>
</div>

dadaaad da d ad

<div>
  <div class="viz-title">usa birthplace</div>
  <div class="viz-subtitle">yeah
  </div>
  <div id="viz-birthplace-bins-usa"></div>
</div>

lorem ipsum falan

<div>
  <div class="viz-title">kmeans</div>
  <div class="viz-subtitle">yeah
  </div>
  <div id="viz-kmeans"></div>
</div>

yummy yummy

<div>
  <div class="viz-title">most average</div>
  <div class="viz-subtitle">yeah
  </div>
  <div id="viz-mostaverage"></div>
</div>

yummy yummy

<div id="viz-trends"></div>

<script src="http://localhost:9001/bundle.js"></script>
<!-- <script src="/build/bundle.js"></script> -->
