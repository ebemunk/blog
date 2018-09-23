+++
date = "2018-09-01"
draft = false
title = "One Year in Vancouver: Visualizing Events"
slug = "one-year-in-van"
tags = ["data visualization", "maps", "vancouver", "georgia straight"]
image = "img/year-in-van.png"
+++

We're looking at the year of 2018 in Vancouver through the lens of event listings on the Georgia Straight Events [^gse] page. I find their list extremely useful and use it all the time to find cool things to do, and notice a great deal of events happening all over the city. I have collected all the events over the course of 2018 and wanted to make a "map of the city" from this data.

<!-- prettier-ignore -->
[^gse]: Georgia Straight Events Calendar: https://www.straight.com/listings/events

This visualization is somewhat unconventional, keep scrolling down to navigate between sets of data. You can also use the buttons to navigate between them. What we're looking at are heatmaps of events, which are coming from the postings on Georgia Straight. Click on the legend to focus on a single item, and click again to unfocus.

Even though this will work OK for devices smaller than tablets, I'd recommend viewing it in larger screens for best experience.

<div id="map"></div>

Hope that gave you a new perspective on Vancouver! Would love to see other heatmaps you make, please feel free to share the URL in the comments. Lets examine few more things I found interesting among the data.

## Start Date

The events contain information about their start and end dates. Looking at variations in days of the week and months are quite revealing.

<div id="day-of-week"></div>

There's an interesting ramp-up effect to Saturday, when most events start off. I think this combined with the sharp decline on Sunday says something about how Vancouverites make use of their weekend: Saturdays for fun stuff, Sundays to chill.

## Locations

This chart shows the top locations that events take place in. Some were surprising to see, others not so much.

<div id="places"></div>

## Technical Details

The Georgia Straight Events page is a great resource, but it's very hard to navigate and browse. I scraped their list twice a day through 2018, and gathered geographical location data using Google Geocoding API. Luckily the page contains Schema.org metadata which makes it easier to parse. These visualizations only include those events for which I could get geographical data for.

In trying to make a more functional use of this data, I created ["Go Do Some Shit"](https://blog.ebemunk.com/van-events/), where you can view the events listing on a map, filter events by date and type. I'd like to hear your thoughts on it, if you decide to check it out.

The visualizations were made with React, Mapbox, and d3. [Here](https://github.com/ebemunk/blog/tree/master/projects/van-eventviz/scraper) is the source for the scraper, and [here](https://github.com/ebemunk/blog/tree/master/projects/year-in-van) is the source for the visualizations on this page.

<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.48.0/mapbox-gl.css' rel='stylesheet' />

<script src="http://localhost:9001/bundle.js"></script>
<!-- <script src="bundle.js"></script> -->

<style>
#map {
  margin: 3rem 0;
}
</style>
