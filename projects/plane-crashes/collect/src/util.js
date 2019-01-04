import fs from 'fs'

import Promise from 'bluebird'
import * as R from 'ramda'
import chalk from 'chalk'
import axios from 'axios'

export async function readDir(dir) {
  return Promise.fromCallback(cb => fs.readdir(dir, 'utf-8', cb))
}

export async function readFile(file) {
  return Promise.fromCallback(cb => fs.readFile(file, 'utf-8', cb))
}

export async function writeFile(file, data) {
  return Promise.fromCallback(cb => fs.writeFile(file, data, cb))
}

// JSON.stringify(_, null, 2)
export const prettyJson = R.partialRight(JSON.stringify, [null, 2])

// console.log(name, ...)
export function logger(name) {
  if (process.env.NODE_ENV === 'test') return () => {}
  return R.partial(console.log, [chalk.bgGreen.black(name)])
}

export async function download(url, path) {
  const { data } = await axios.get(url)
  return writeFile(path, data)
}
