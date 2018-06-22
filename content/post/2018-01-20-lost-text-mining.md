+++
date = "2018-01-20T02:47:00-07:00"
draft = false
title = "LOST it"
slug = "lost-text-mining"
tags = ["LOST", "data visualization", "text mining"]
image = "img/visual-look.png"
+++

I wanted to do something like this for a long time, and finally I think it's at a point where I can release this into the wild.

## Meta

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit, diam et luctus feugiat, tellus ante lacinia tortor, a fringilla risus lorem at mauris.

<div id="word-count"></div>

Duis ac lorem leo. Quisque non lacus vestibulum, pharetra sem sed, aliquam libero. Nunc condimentum risus vitae tortor dignissim, sed pulvinar velit ullamcorper. Praesent cursus ligula vel tellus aliquam euismod. Integer augue lacus, tempor quis luctus ac, laoreet vel eros. Praesent quis neque felis. Aenean porta aliquet leo sed viverra.

## Characters

Aenean elementum eros elit, et lacinia enim varius in. Quisque gravida, sapien ultrices tristique commodo, risus neque gravida turpis, id efficitur orci nisl id augue. Nam eros nunc, consectetur non dictum sit amet, ultrices in dui.

<div id="char-word-histogram"></div>

Vivamus magna tortor, auctor id leo in, hendrerit interdum justo. Mauris vel risus nec risus molestie lobortis id eu ex.

## Personalities

Maecenas ullamcorper auctor tellus, dictum euismod ipsum pellentesque id. Etiam mollis a ante ac tempor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

<div id="personality-selector"></div>
<div id="personality"></div>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat placerat odio, a pulvinar diam congue tristique. Praesent ornare placerat sapien a pellentesque. Proin eu viverra turpis.

## Speakers

Pellentesque at ex et dolor mattis scelerisque. Vestibulum aliquam, nulla vel porttitor faucibus, sapien turpis feugiat augue, ac tincidunt purus sem nec nisl. Etiam quis ornare lectus. Morbi ultrices, ante vel consequat mattis, diam mauris scelerisque dui, nec tempus lectus ante eget lectus.

<div id="lines-per-char"></div>

Nam pulvinar et felis at maximus. Vestibulum risus erat, laoreet vitae dolor et, pellentesque tincidunt odio. In sit amet nunc elementum purus faucibus facilisis eu eget dolor.

## Flashbacks and Flashsideways

Pellentesque at ex et dolor mattis scelerisque. Vestibulum aliquam, nulla vel porttitor faucibus, sapien turpis feugiat augue, ac tincidunt purus sem nec nisl. Etiam quis ornare lectus.

<div id="flashbacks"></div>

Nam pulvinar et felis at maximus. Vestibulum risus erat, laoreet vitae dolor et, pellentesque tincidunt odio. In sit amet nunc elementum purus faucibus facilisis eu eget dolor. Vivamus sed volutpat tellus.

## Co-occurrence

Pellentesque at ex et dolor mattis scelerisque. Vestibulum aliquam, nulla vel porttitor faucibus, sapien turpis feugiat augue, ac tincidunt purus sem nec nisl. Etiam quis ornare lectus.

<div id="char-cooccurrence"></div>

Nam pulvinar et felis at maximus. Vestibulum risus erat, laoreet vitae dolor et, pellentesque tincidunt odio. In sit amet nunc elementum purus faucibus facilisis eu eget dolor. Vivamus sed volutpat tellus.

## Refs

https://en.wikipedia.org/wiki/Big_Five_personality_traits
https://console.bluemix.net/docs/services/personality-insights/science.html#science
http://lotrproject.com/statistics/books/sentimentanalysis
http://lotrproject.com/statistics/books/chapters
https://jezebel.com/every-single-person-on-lost-ranked-from-most-to-least-1546174780 bernard vs sawyer
http://www.tylervigen.com/literature-statistics

- [ ] Number of Characters per episode

  - how many (which) characters appear in each episode

- [ ] Words per char

  - how many words (on avg/total) a char says when they speak

- [ ] Word complexity per char

  - char word usage tendencies (do they use big words, exclams ...)

- [ ] Reading level

  - does it change across chars? is it consistent throughout?

- [ ] Emotions per char

  - sentiment analysis on char lines?

- [ ] Stage directions per char

- [ ] Char closeness (co-occurrence)

  - which chars appear together often (network/edge graph)

- [ ] Word bubble
  - total, per season, per episode, per char

// number of episodes
s1 24/25
s2 23/24
s3 22/23
s4 13/14
s5 16/17
s6 17/18

Episode / Season (bar chart of total words per episode/season)

- word count
- unique words
- unique word density

Character Mentions (line/bar chart for all seasons)

- how many times char names are mentioned by others

Word Map

- most common / least common words

Co-Occurrence (force directed graph)

- filtered by episode selector

Sentiment Analysis (long horizontal stacked bars)

- per episode
- filtered by ep selector

Episode Lengths (vertical stacked bar)

- word / char count
- stacks represent scenes/acts
- all eps together

Population (vertical bar or pie)

- men vs women
- any other discriminator?

Flashbacks / Flashsideways (horizontal thin stacked bars)

- 1 bar per ep
- also combined % change of a part being flash/

<script src="http://localhost:9001/bundle.js"></script>
<!-- <script src="bundle.js"></script> -->
