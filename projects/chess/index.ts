import openings from './openings'
import movepaths from './movepaths'

async function init() {
  const data = await fetch('chess/fangol.json').then(r => r.json())
  openings(document.querySelector('#openings-viz'), data.openings)
}

async function initMovepaths() {
  const data = await fetch('chess/movepath.json').then(r => r.json())
  movepaths(document.querySelector('#movepaths-viz'), data.moves)
}

init()
initMovepaths()
