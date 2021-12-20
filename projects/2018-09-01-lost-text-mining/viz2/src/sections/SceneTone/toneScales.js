import * as d3 from 'd3'

const angerScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'rgb(255,0,0)'])

const fearScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'rgb(255,100,255)'])

const joyScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'rgb(255,255,0)'])

const sadnessScale = d3
  .scaleLinear()
  .domain([0.5, 1])
  .range(['transparent', 'rgb(100,100,255)'])

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
