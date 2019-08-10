+++
date = "2019-08-10"
title = "One Century of Plane Crashes"
slug = "century-of-plane-crashes"
tags = ["data visualization", "plane crashes"]
image = "img/plane-crashes.png"
hidden = false
related = ["2016-02-27-chess-2mil.md", "2018-09-01-lost-text-mining.md"]
+++

A data exploration of 100 years of plane crash data. I discovered the [ASN Aviation Safety Database](http://aviation-safety.net/database/) some time ago, and knew almost instantly that I would have to dig deep on this one. The earliest crash is from August 2nd, 1919 and the latest record I have is from August 1st, 2019. There are approximately 22 thousand crash records.

Planes and aviation represent a great chunk of our progress in technology and manufacturing, as well as bringing the world closer to us, with novel means of not just travel, but other endeavors like war and scientific research.

What can I find among the crashes? Working on this project was quite eye opening for me, and I hope it gives you something to think about as well. Let's go.

## One Century of Aviation Safety

As we look deeper into this dataset, I would ask you to keep in mind that we are focusing exclusively on crashes. The statistics, therefore, are closely tied to only the flights that end in crashes. The big picture to remind yourself is that this is a tiny portion of successful flights that occur on the daily. In 2018, which was somewhat of an outlier in itself, there were about [1 crash per 300 million flights](https://www.theguardian.com/world/2019/jan/02/plane-crash-deaths-jump-sharply-in-2018-but-fatalities-still-rare). [The odds of being struck by lightning](https://www.weather.gov/safety/lightning-odds) **twice** in your lifetime is still 20% higher than being in a flight that's involved in a crash.

<div id="viz-years"></div>

## Fatalities

Focusing on fatalities seem like a morbid curiosity; examining the terrifying and tragic deaths caused by plane crashes seems almost insulting. I was hesitant to look at this until I saw the numbers. Beyond the big crashes that make the news and are emblazed in our minds as the great tragedies they are, looking at it from this perspective is almost reassuring.

<div id="viz-fat-hist"></div>

The second bar highlights the point I'm trying to make above: more than 2/3rds of crashes result in no fatalities at all. This is on top of the fact that we are focusing explicitly on crashes. I think this highlights why air travel is considered one of the safest forms of travel, even when looking only at crashes, your chances of survival are quite good.

Below we look at trends over the 100 years. The widening gap between occupants and fatalities are encouraging, highlighted by the diminishing rate of fatalities per occupant on the right.

<div id="viz-fat-avg"></div>

## Flight Phases

[Flight phases](https://www.skybrary.aero/index.php/Flight_Phase_Taxonomy) refer to the "set of terms used by <abbr title="International Civil Aviation Organization">ICAO</abbr> to categorize the operational phase during which an aircraft accident and incident happened". Coloquially it is the many stages of a flight, such as Taxiing, Takeoff and Landing.

I wanted to know if there was a "most dangerous" phase of a flight, and any relation to crashes or fatalities.

<div id="viz-phase"></div>

## Nature

It might be obvious, but planes are flown for many purposes. I think most people's exposure to planes and "flight" in general are in the form of commercial flights. You buy your ticket, go to the airport for a few hours, fly to your destination and that's that.

Here's a table showing the many different "natures" of flights. It's notable that the majority of the flights are for military purposes. Seeing the percentage of crashes in relation to their nature and the average fatalities for that category was eye opening for me.

<div id="viz-nature"></div>

Notice that "Passenger" flights have consistently higher average fatalities than any other category - this is because the total occupants for these flights are almost always higher.

## Classifications

[Aviation accident classification](https://en.wikipedia.org/wiki/Accident_classification) are categories that have been developed to enable statistical analysis of accidents and "incidents" - dangerous situations that happen that don't necessarily result in an accident.

I wanted to see how these accidents are linked to one other. Are there commonalities? Certain pairs or groups of classifications occurring more frequently together than others? The visualization below gives a sense of how these classifications relate. Mouse over the bubbles to highlight its connections and to change the bar chart to the right.

<div id="viz-classifications-force"></div>

## Damage and Fate

An interesting piece of data that was available was the damage to the aircraft, as well as it's fate. You can see that about 70% of crashes result in the aircraft being damaged beyond repair, and 30% of them are ultimately repaired. This makes sense as these are extremely expensive vehicles.

<div id="viz-damage-fate"></div>

<div id="viz-damage-matrix"></div>

## Operators

When it comes to flight operators, we see a strong demarcation between military and non-military intent. What's striking is that throughout most of it's history, up until around 1975, US with it's different branches saw much higher crashes than the norm. This of course does not mean USAAF, USAF or US Navy are bad at flying planes, but I suspect (assuming crash rates are reasonably similar) that this corresponds with the number of successful flights. This highlights the importance of aviation and air dominance, especially in wartime.

<div id="viz-operator-by-year"></div>

## Manufacturers

Manufacturing planes is a fickle multi-million dollar venture, even the slightest negative PR can end a company and people's lives are at stake. So who's planes are flying the skies, and who are crashing through the years? What do you think of when you hear [Boeing 737 MAX](https://en.wikipedia.org/wiki/Boeing_737_MAX_groundings)? What about Douglas DC-3? Below is a ridge plot of crashes by manufacturer, with "top 20" most crashes.

<div id="viz-maker"></div>

## Plane Age

Who produces the most resilient planes? Because of their cost and complexity in manufacturing, you probably want to get the most use out of a plane you pay [$20,000 to $85,000,000](https://www.thebalancecareers.com/how-much-do-airplanes-cost-282581) for.

The violin plot below shows the distribution of the age of planes, which is the number of years from its first flight to when it crashed. More than the specific numbers, the shape of the plot is telling. It's clear that some, such as commercial and hobby manufacturers, go for longevity and result in thicker distributions. Others show a much more tapered distribution.

<div id="viz-plane-age"></div>

## Geodata

Extracting geographical data was a bit tough for this dataset, but I was able to get approximate locations for most of the crashes. I thought it'd be interesting to plot the crash locations on a map. Everyone is familiar with the [Bermuda Triangle and how it's "cursed"](https://www.reddit.com/r/Showerthoughts/comments/43kwjy/while_growing_up_the_bermuda_triangle_seemed_like/). Does this distribution surprise you?

<div id="map-crashes-heatmap"></div>

Finally here's a map of all departure locations. Click on the dots to focus and see the outgoing flights. I suggest not thinking too much if you have a flight coming up soon and wanted to check out your departure airport!

<div id="map-departure-arcs"></div>

## Technical Details

I gathered the data from [ASN Aviation Safety Database](http://aviation-safety.net/database/) and put it in a PostgreSQL database. This database contains ~**22,000** records of plane crashes with varying richness of data, most of it presented in the graphs above. I made the visualizations with React and d3, which I increasingly find to be a great way of producing interactive viz. Maps with Mapbox and DeckGL. You can see the project code [here](https://github.com/ebemunk/blog/tree/master/projects/plane-crashes).

Don't forget - this data contains only crashes! This is important when thinking about percentages and relative scalar values. "Operator X crashed more than Y, so they must be careless" kind of thinking would not be appropriate, as we don't know how many successful flights took place.

## Outro

I hope this gave you a new perspective on aviation and flight safety. If you're into the history, statistics or trivia, I would love to hear from you in the comments. What else can you determine from these visualizations? What else does this make you wonder about? I welcome any discussion and thoughts you have.

<div id="mobile-warning"></div>

<script src="http://localhost:9001/main.js"></script>
<!-- <script src="/plane-crashes/main.js"></script> -->

<style>
  @media screen and (max-width: 750px) {
    article {
      width: 750px;
      min-width: 750px;
    }
  }
</style>
