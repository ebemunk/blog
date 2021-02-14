import openings from './openings'
import movepaths from './movepaths'
import heatmap from './heatmap'
import castling from './castling'
import endings from './endings'
import bar from './bar'
import line from './line'

import './style.css'
import { range } from 'd3'

async function init() {
  const data = await fetch('build/data.json').then(r => r.json())
  // console.log(data)
  openings(document.querySelector('#openings-viz'), data.openings)
  heatmap(document.querySelector('#heatmap-chart'), data.heatmaps)
  castling(data.Castling, data.totalGames)
  endings(data.GamesEndingWith, data.totalGames)
  bar(
    document.querySelector('#game-lengths-viz'),
    Object.entries(data.GameLengths),
    {
      width: 700,
      height: 500,
    }
  )
  bar(
    document.querySelector('#game-lengths-viz-200'),
    Object.entries(data.GameLengths).filter(d => +d[0] <= 200),
    {
      width: 700,
      height: 500,
    }
  )
  bar(document.querySelector('#wins-viz'), Object.entries(data.Results), {
    width: 400,
    height: 250,
    xDom: ['White', 'Black', 'Draw', 'NA'],
    xPadding: 0.2,
    xUnit: 'Wins By',
    yUnit: 'Won',
  })

  let tot = 0
  const cumGameLengths = range(457).map(d => {
    const gl = data.GameLengths[d] ?? 0
    tot += gl
    return [d, tot]
  })

  line(
    document.querySelector('#material-count-viz'),
    Object.entries(data.MaterialCount)
      .filter(d => +d[0] <= 250)
      .map(d => {
        const div = tot - cumGameLengths?.[+d[0]]?.[1] ?? 1
        const ret = [+d[0], d[1] / div]
        return ret
      }),
    {
      width: 700,
      height: 500,
      yUnit: 'Average Material',
    }
  )

  line(
    document.querySelector('#material-diff-viz'),
    Object.entries(data.MaterialDiff)
      .filter(d => +d[0] <= 250)
      .map(d => {
        const div = tot - cumGameLengths?.[+d[0]]?.[1] ?? 1
        const ret = [+d[0], d[1] / div]
        return ret
      }),
    {
      width: 700,
      height: 500,
      yUnit: 'Average Material Difference',
      yDomain: [-1.5, 1.5],
      yTickValues: [-1.5, -1, -0.5, 0, 0.5, 1, 1.5],
    }
  )
}

async function initMovepaths() {
  const data = await fetch('build/movepath.json').then(r => r.json())
  movepaths(document.querySelector('#movepaths-viz'), data.moves)
}

init()
initMovepaths()
