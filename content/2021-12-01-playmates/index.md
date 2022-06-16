+++
publishDate = "2022-06-14"
title = "Beholder: Beauty in the eyes of Playboy"
slug = "beholder-beauty-in-the-eyes-of-playboy"
tags = ["data visualization", "long form"]
image = "img/playmates.png"
hidden = false
related = ["2021-02-18-lastwords", "2019-01-05-plane-crashes.md"]
shortSummary = "Finding out Playboy's idea of beauty from analyzing the data of 806 Playmates."
responsive = true
+++

We're looking at some risque data this time! I wanted to do something offbeat, but not quite [Last Words in Texas](https://blog.ebemunk.com/last-words-in-texas/)-level soul crushing. So, I gathered some data on Playboy's Playmates of the Month.

Playboy stopped picking the Playmate of the Month starting in 2021, and the 66 year saga came to an end. More, the physical magazine itself was discontinued in [late 2020](https://medium.com/naked-open-letters-from-playboy/an-open-letter-to-our-team-and-partners-b859b1a4c663). There's a rich history behind Playboy, the taboo element, sexiness and beauty. Let's see what the data has to offer!

**Since the subject matter is Playboy and their Playmates of the Month, you should beware that most links might be NSFW. I've taken care to <u>not have any NSFW content on this page</u>.**

⚠️ There are mentions of body measurements, and some content in this article might be triggering to those who have current or past experiences with disordered eating or body dysmorphia.

## Who Reads Playboy?

Turns out, Playboy is not very transparent about their demographics. But, I did find some information about it from their own [media kit from 2004](https://web.archive.org/web/20041019143228/https://www.playboy.com/mediakit/print_demographics.html) and [online demographics](https://web.archive.org/web/20041022052012/http://www.playboy.com/mediakit/online_demographics.html). More than a decade later, these numbers are very outdated, but I think it gives a bit of context into _who Playboy is meant for_. These are inconsistent, and combined with its age, it's best to take these with a huge grain of salt.

<div>
  <div class="viz-title">Reading it for the articles</div>
  <div class="viz-subtitle">Demographics breakdown of the Print (magazine) and Online (playboy.com) versions from 2004. Playboy describes print readers as 
    <strong>"brand conscious"</strong>,
    <strong>"outdoor enthusiasts"</strong>,
    <strong>"trendsetters"</strong> and
    <strong>"socially active"</strong>. Online readers are 
    <strong>"tech savvy"</strong>,
    <strong>"gamers"</strong>,
    <strong>"online shoppers"</strong> and
    <strong>"active & adventurous"</strong>.
  </div>
  <div id="viz-demographics-print"></div>
</div>

## Playmates

Since the first issue on December of 1953, Playboy has picked the Playmate of the Month **812** times. Among them are **806** unique Playmates. Playmates are generally featured in what's known as the "centerfold" of a magazine, where the pages have no break between them.

Every Playmate of the Month is awarded prizes ranging from cash ($25,000) to other discretionary gifts. 2020 was the last year that had 12 Playmates of the Month, and since 2021 the Playmates are picked quarterly.

We'll be talking about body measurements, and in this article you can pick which units you prefer to see these numbers in. You can change this at any time, and the visuals will adjust to your preference.

<div id="viz-units"></div>

<div id="viz-scatter"></div>

<div id="viz-units2"></div>

## The Hourglass

<blockquote>
  <p>The costume and the three-inch high heels were not comfortable at all! The costume was so tight it cut off the circulation in my legs and at the end of the night I could barely walk because my feet were so sore.</p>
  <p>- <a href="https://theoriginalvangoghsearanthology.com/2013/03/10/an-interview-with-sharon-rogers/#:~:text=The%20costume%20and%20the%20three%20inch%20high%20heels%20were%20not%20comfortable%20at%20all!%20The%20costume%20was%20so%20tight%20it%20cut%20off%20the%20circulation%20in%20my%20legs%20and%20at%20the%20end%20of%20the%20night%20I%20could%20barely%20walk%20because%20my%20feet%20were%20so%20sore." target="_blank" rel="noopener noreferrer">Sharon Rogers</a>, about the Bunny costume she had to wear in the Chicago club.</p>
</blockquote>

"The Hourglass Figure" is one of the most <a href="https://pubmed.ncbi.nlm.nih.gov/16818094/" target="_blank" rel="noopener noreferrer">well-known body shapes</a>, and in <a href="https://www.vogue.com/article/playboy-bunnies-hourglass-body-gloria-steinem-hugh-hefner-death-playboy-club-new-york" target="_blank" rel="noopener noreferrer">Playboy</a>, it is favored above others. Yet, there is evidence that the insistence on meeting this standard is responsible for the widespread prevalence of mental disorders surrounding body image, including body dysmorphia and disordered eating, particularly among <a href="https://www.semanticscholar.org/paper/An-Evolutionary-Theory-of-Female-Physical-Singh/00dde6b664c882410fa5e4ed1d7e17f994636793" target="_blank" rel="noopener noreferrer">young women</a>. Research supports that the most commonplace efforts to change the body to conform to beauty standards do not often ultimately lead to positive body image.

<div>
  <div class="viz-title">Breaking the mold</div>
  <div class="viz-subtitle">2020 is the first and only year the hourglass-figure mold was broken. Bust measurements decline through the decades, waist and hips increase. What some call curvy or "thick" is finally welcomed by Playboy in 2020. The <a href="https://en.wikipedia.org/wiki/Bust/waist/hip_measurements" target="_blank" rel="noopener noreferrer">"Ideal"</a> <span data-cms="90">36</span>-<span data-cms="60">24</span>-<span data-cms="90">36</span> shown in red. <a href="https://www.huffpost.com/entry/the-scary-reality-of-a-re_b_845239" target="_blank">Projected dimensions</a> of the Barbie doll in yellow. <br/><br/> Click on the decades to isolate.</div>
  <div id="viz-bwh"></div>
</div>

As harmful as the hourglass ideal is, the popular slim-thick image has also <a href="https://www.sciencedirect.com/science/article/abs/pii/S1740144521001546" target="_blank" rel="noopener noreferrer">been found to have adverse effects on young women</a>.

The controversial measurements for Mattel's Barbie doll are highlighted to show <a href="https://www.chapman.edu/students/health-and-safety/psychological-counseling/_files/eating-disorder-files/13-barbie-facts.pdf" target="_blank" rel="noopener noreferrer">how ridiculous [pdf]</a> the doll's proportions <a href="https://time.com/barbie-new-body-cover-story/" target="_blank" rel="noopener noreferrer">used to be</a>. Mattel, like Playboy, has used the sexualized female form to create a cultural product that both challenged and later maintained specific beauty standards for their time. While Mattel has, in recent years, <a href="https://www.nydailynews.com/life-style/fashion/mattel-remakes-barbie-dolls-include-curvy-body-type-article-1.2512210" target="_blank" rel="noopener noreferrer">introduced a more diverse set of body types for its Barbie dolls</a>, ostensibly for body positivity, this new set has also <a href="https://www.statista.com/statistics/370361/gross-sales-of-mattel-s-barbie-brand/#:~:text=In%202020%2C%20Mattel's%20Barbie%20brand,U.S.%20dollars%20the%20year%20before.&text=Since%20the%20launch%20of%20Mattel's,America%20and%20around%20the%20world." target="_blank" rel="noopener noreferrer">increased their bottom line</a>. Is Playboy following the same path?

## Body-Mass Index

Body-Mass Index, aka BMI relates your weight to your height. As noted in the [CDC page](https://www.cdc.gov/obesity/adult/defining.html), it is a screening tool for weight-related risks. For some healthy people, and especially athletes, BMI is known to be inaccurate. Note that it is a _screening tool_ and not a diagnosis of body fat or health.

[CDC NCHS](https://www.cdc.gov/nchs/data/series/sr_03/sr03-046-508.pdf) has results from 2015-2018 among a sample population, so we can compare the average 20-29 year old woman to the average Playmate.

<div>
  <div class="viz-title">BMI - Straddling the line</div>
  <div class="viz-subtitle">More than half of Playmates are Underweight, 48% are in the Healthy range. There are only 2 other Playmates (<1%) in any other category. The difference of the averages between US women and Playmates is staggering.</div>
  <div id="viz-bmi"></div>
</div>

## Waist-to-Hips Ratio

Waist-to-Hips Ratio, aka WHR is a simple ratio of waist circumference divided by hips circumference. It's been [theorized](https://en.wikipedia.org/wiki/Waist%E2%80%93hip_ratio#As_an_indicator_of_attractiveness) that it has critical bearing on attractiveness. Interestingly, the research done around this also used Playboy model's WHRs in their dataset.

<div>
  <div class="viz-title">The Magic Number</div>
  <div class="viz-subtitle">A Waist-to-Hip Ratio of 0.7, which accounts for ~20% of Playmates is said to be the "perfect" ratio for attractiveness. Highlighted are the "most attractive" WHRs from other cultures/places. No Playmate has ever been above 1.0 WHR.</div>
  <div id="viz-whr"></div>
</div>

[Here is some fantastic reading](https://web.archive.org/web/20211006084217/https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/figur/figur.htm) about "figure" and theories around attractiveness. A quote from it:

> The more traditional the women's role, the more curvaceous was the ideal figure. The greater the economic growth and the women's role in the educational system and employment, the less curvaceous was the ideal body.

## Geography

Let's now take a little break from numbers, and look at some geography. Where are Playmates from? Despite its global reach (as is common with most US-based media), **41** countries have had Playmates outside of the US, and they account for only ~18% of the total.

<div>
  <div class="viz-title">Birthplace of Playmates</div>
  <div class="viz-subtitle">Only 18% of Playmates were born outside of the US. Focus on the regions of the world where no Playmate was born in.</div>
  <div id="viz-birthplace"></div>
</div>

Important thing to highlight here isn't "how many Playmates came from which countries?", but "what regions of the world have never had Playmates?". Africa is almost completely left out besides **Ida Ljungqvist** from Tanzania. Middle eastern countries have never been represented, and most of Asia remains empty. **United Kingdom** and **Germany** lead among the European countries, and **Brazil** is the favorite in South America.

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

Not surprising, as Playboy is headquartered in Beverly Hills, California and has largely carried some of the west coast sensibilities when it comes to beauty. **Vermont** and **Delaware** are the only 2 states that have never had Playmates. Also, **Hawaii** has had more Playmates than **Wyoming**, **South Dakota**, **Iowa**, **West Virginia** and **New Hampshire** combined.

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
  <div class="viz-subtitle">Playmates ordered by their distance to the average Playmate. The most and least average top 5 Playmates split the age of the magazine into almost perfect quarters. The top 5 most average are from older issues, whereas the top 5 least average are from 2003 and later.</div>
  <div id="viz-mostaverage"></div>
</div>

<blockquote>
  <p>
    I was just excited for everyone to see [the photos] and just to start making people uncomfortable and shaking some things up.
  </p>
  <p>
 - <a href="https://headtopics.com/us/ali-chanel-on-being-playboy-s-curviest-playmate-i-think-the-world-is-ready-to-accept-all-bodies-16446535#:~:text=I%20was%20just%20excited%20for%20everyone%20to%20see%20them%20and%20just%20to%20start%20making%20people%20uncomfortable%20and%20shaking%20some%20things%20up%20*laughs*" target="_blank" rel="noopener noreferrer">Ali Chanel</a>
  </p>
</blockquote>

In addition, even the "averageness" of Playmates has been steadily decreasing every year, especially after Hefner's death. Recent Playmates are much less likely to be "average."

<div>
  <div class="viz-title">Difference from Average per Year</div>
  <div class="viz-subtitle">Playmates have been increasingly different from the "Most Average Playmate" through the years.</div>
  <div id="viz-mostaverage-years"></div>
</div>

For the nerds among you, this is the _euclidian distance_ from the average. I also computed the _cosine similarity_ out of curiosity. Ask me about it on Twitter.

## lena.jpg

Another tidbit for the geeks: if you've ever worked with computer image processing, you have most likely come across `lena.jpg`. [It's one of the most used images in computer history](https://web.archive.org/web/19970704201816/http://www.playboy.com/news/lena/lena.html). This iconic image is a crop of **Lena Sjooblom**'s (now Forsen) 1972 November centerfold!

The usage has been [criticized](http://www.cs.umd.edu/users/oleary/faculty/node8.html), as "Suggestive pictures used in lectures on image processing ... convey the message that the lecturer caters to the males only". I have certainly come across this image when I was studying in university around 2010s. Does it still appear in lectures? Let me know!

## Individuals All

It's clear that Hefner's death has significantly impacted who appears in Playboy. The world in which Playmates lived, a reality that was masterfully cropped out of photoshoots and public relations campaigns, has started to be reflected in the types of women featured. It has changed Playboy's beauty standards ever so slightly, but it is a more inclusive shift nonetheless. One question remains to be answered: is this shift towards inclusion sincere or merely performative? Many a brand has made an effort to be more inclusive in their messaging but often fall short. A giveaway here is that this change has been led by primarily white models. The body positivity movement in Playboy — as is also the case in many other areas — has been <a href="https://www.refinery29.com/en-gb/2021/03/10389843/body-positivity-neutrality-movement-history" target="_blank" rel="noopener noreferrer">co-opted and made palatable</a> to their audience via white women.

What these data points can't illustrate is that behind all the flash and glamour of being a Playmate of the Month and living in the Playboy Mansion, these women are like any of us. They <a href="https://m.imdb.com/name/nm0584428/trivia" target="_blank" rel="noopener noreferrer">went to college</a>, struggled with <a href="https://en.wikipedia.org/wiki/Star_Stowe" target="_blank" rel="noopener noreferrer">drug abuse</a> and <a href="https://cfox.com/news/8089075/bc-playboy-model-kelly-tough/" target="_blank" rel="noopener noreferrer">overcame it</a>, <a href="https://www.vaildaily.com/news/playboy-playmate-mother-teresa-of-haiti-skips-oscars/" target="_blank" rel="noopener noreferrer">established philanthropic foundations</a>, used their fortune to <a href="https://en.wikipedia.org/wiki/Jayde_Nicole" target="_blank" rel="noopener noreferrer">open restaurants</a> and <a href="https://www.imdb.com/name/nm5330841/bio#:~:text=She%20helped%20organize,children%20with%20cancer." target="_blank" rel="noopener noreferrer">help those in need</a>, <a href="https://www.foxnews.com/entertainment/playboy-playmate-marsha-elle#:~:text=She%20endured%20years%20of%20insecurity%20and%20didn%E2%80%99t%20wear%20shorts%20until%20age%2023." target="_blank" rel="noopener noreferrer">had insecurities</a>, <a href="https://en.wikipedia.org/wiki/Patricia_McClain" target="_blank" rel="noopener noreferrer">got interested in politics</a>, <a href="https://thehollywoodtimes.today/model-and-humanitarian-jordan-emanuel-raising-awareness-and-educating-individuals-about-mental-illness/" target="_blank" rel="noopener noreferrer">grappled with depression</a>, led quiet lives and <a href="https://en.wikipedia.org/wiki/Karen_McDougal#Affair_with_Donald_Trump" target="_blank" rel="noopener noreferrer">not so quiet lives</a>. They were into <a href="https://411mania.com/movies/411mania-com-interviews-playboy-october-playmate-of-the-month-pamela-horton/#:~:text=Pamela%20Horton%3A%20I%E2%80%99ve%20played,It%20was%20enjoyable%20overall." target="_blank" rel="noopener noreferrer">LoL and Diablo 3</a>, <a href="https://secreteast.ca/2015/02/from-manuels-to-melrose-stephanie-brantons-campaign-for-playmate-of-the-year/#:~:text=%E2%80%9CI%20can%20honestly%20say%20that%20I%E2%80%99ve%20wanted%20to%20be%20Playmate%20my%20whole%20life%2C%20I%20don%E2%80%99t%20know%20if%20that%20%C2%A0would%20mean%20more%20to%20anyone%20else.%E2%80%9D" target="_blank" rel="noopener noreferrer">dreamed of becoming Playmates</a> and <a href="https://abcnews.go.com/Entertainment/horrific-murder-playboy-playmate-verge-hollywood-stardom-flaw/story?id=66193166#:~:text=From%20Dairy%20Queen%20to%20the%20Playboy%20Mansion" target="_blank" rel="noopener noreferrer">worked at Dairy Queen</a>. They were victims of <a href="https://www.iheart.com/podcast/256-the-naked-podcaster-30941512/episode/playboy-model-7-times-who-went-52719725/" target="_blank" rel="noopener noreferrer">domestic violence</a>, wanted to <a href="https://gallimore985544.livejournal.com/139896.html#:~:text=Q.%20What%20are,a%20bigger%20school." target="_blank" rel="noopener noreferrer">become broadcasters</a>, were <a href="https://www.latimes.com/archives/la-xpm-1998-mar-15-me-29162-story.html" target="_blank" rel="noopener noreferrer">single moms that got sued by Playboy</a>, and on and on.

They were and are real people who had a real impact on others around them, good and bad. It's worth noting this before we find ourselves worshiping or shunning models in this industry.

On December 2, 2021, Playboy announced its first-ever Creative Director In Residence <a href="https://www.plbygroup.com/news-releases/news-release-details/playboy-names-cardi-b-first-ever-creative-director-residence" target="_blank" rel="noopener noreferrer">as Cardi B</a>. In choosing the musician, the magazine signaled a commitment to leaving its old formula and its limited perspective squarely in the past. Just how far will this development push Playboy and their Playmates? We will have to wait and see.

<script src="build/bundle.js"></script>
<!--
<script src="http://localhost:9001/bundle.js"></script>
-->
