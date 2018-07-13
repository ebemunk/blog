import * as d3 from 'd3'

const angerScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'red'])

const fearScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'purple'])

const joyScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'yellow'])

const sadnessScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'blue'])

const analyticalScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'pink'])

const confidentScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'white'])

const tentativeScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'green'])

const toneScale = {
  anger: angerScale,
  fear: fearScale,
  joy: joyScale,
  sadness: sadnessScale,
  analytical: analyticalScale,
  confident: confidentScale,
  tentative: tentativeScale,
}

export default toneScale
