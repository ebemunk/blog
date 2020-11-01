import { writeFileSync } from 'fs'
import got from 'got'

const parts = [
  'https://www.rev.com/transcript-editor/shared/C-8bDp99BJeCjsjMD_TLZx3mzKMYLQlRNcIpn01gIDIitp25MT_XakH7HIktIkzYjsjgbemzC1JlO5zsFuPOVzteEGE',
  'https://www.rev.com/transcript-editor/shared/Q9Rg-GXXv0j4Lr42SWtShbjYi7XYyidz4UdyhtdMObqUKk7CEp-FSLuVlp1gdJztrCO_rqrjyqj0INo3riGtB9X5rpo',
]

async function retrieve() {
  for (let [i, url] of parts.entries()) {
    const resp = await got(url)

    const [firstPart, rest] = resp.body.split('model: ')
    const [string, lastPart] = rest.split('authenticated:  false')

    const clean = string.trim().slice(0, -1)

    writeFileSync(`./data/part-${i + 1}.json`, clean)
  }
}

retrieve()
