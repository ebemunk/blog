import { readFile } from 'fs'

import _ from 'lodash'
import Promise from 'bluebird'
import ProgressBar from 'progress'
import c from 'chalk'
import { connect } from 'pg'

import { getSeasonList, getEpisode } from './scrape-fns'

const log = _.partial(console.log, c.bgGreen('write-db'))
const readFileAsync = Promise.promisify(readFile)
const connectAsync = Promise.promisify(connect, { multiArgs: true })

function getDb(connString) {
  let close
  return connectAsync(connString)
  .spread((client, done) => {
    close = done
    return client
  })
  .disposer(() => {
    if( close ) close()
  })
}

async function writeToDb(rows) {

}