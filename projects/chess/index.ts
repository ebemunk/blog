import openings from './openings'

async function init() {
  const data = await fetch('chess/fangol.json').then(r => r.json())
  openings(document.querySelector('#openings-viz'), data.openings)
}

init()
