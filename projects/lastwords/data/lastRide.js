const fs = require('fs/promises')
const polyline = require('@mapbox/polyline')

const json = require('./polunsky-to-huntsville-google.json')

const run = async () => {
  const encoded = json.routes[0].overview_polyline.points
  const decoded = polyline.decode(encoded)
  await fs.writeFile(
    __dirname + '/lastRide.json',
    JSON.stringify(decoded, null, 2)
  )
}

run()
