import { readFile } from 'fs'
import Promise from 'bluebird'

const readFileAsync = Promise.promisify(readFile)

async function get(url) {
  let data
  if( url.includes('Transcripts') ) {
    data = await readFileAsync(`${__dirname}/seasons.html`, 'utf8')
  } else if( url.includes('episode') ) {
    data = await readFileAsync(`${__dirname}/episode.html`, 'utf8')
  }
  return { data }
}

export default {
  get
}