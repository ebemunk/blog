import openings from './openings'

async function init() {
  const data = await fetch('chess/fangol.json').then(r => r.json())
  console.log('data', data)
  openings(document.querySelector('#openings-viz'), data.openings)
}

init()

console.log('aayaz')
