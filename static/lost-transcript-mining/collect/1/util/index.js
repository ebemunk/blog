import fs from 'fs'

import Promise from 'bluebird'
import R from 'ramda'
import chalk from 'chalk'

export async function readFile(file) {
  return Promise.fromCallback(cb => fs.readFile(file, 'utf-8', cb))
}

export async function writeFile(file, data) {
  return Promise.fromCallback(cb => fs.writeFile(file, data, cb))
}

// JSON.stringify(_, 2, null)
export const prettyJson = R.partialRight(JSON.stringify, [2, null])

// console.log(name, ...)
export function logger(name) {
  return R.partial(console.log, c.bgGreen(name))
}
