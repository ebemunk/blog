import { writeFileSync } from 'fs'
import { max, range } from 'd3-array'

import speechLen from '../data/speechLen.json'
import { speakerNameToId } from '../util'

const maxLen = max(
  // @ts-ignore
  Object.keys(speechLen).flatMap(key => speechLen[key].flatMap(d => d)),
)

const seconds: {
  [key: string]: Set<number>
} = range(0, maxLen, 1000).reduce(
  (obj, cur) => ({ ...obj, [Math.floor(cur / 1000)]: new Set() }),
  {},
)

for (let name in speechLen) {
  // @ts-ignore
  for (let msRange of speechLen[name]) {
    let sRange = range(
      Math.floor(msRange[0] / 1000),
      Math.floor(msRange[1] / 1000),
      1,
    )

    if (sRange.length < 1) {
      sRange = [Math.floor(msRange[0] / 1000), Math.floor(msRange[1] / 1000)]
    }

    for (let second of sRange) {
      seconds[second].add(speakerNameToId(name))
    }
  }
}

const secondsJson: {
  [key: string]: number[]
} = {}

for (let set in seconds) {
  secondsJson[set] = Array.from(seconds[set])
}

writeFileSync('./data/per-second-speech.json', JSON.stringify(secondsJson))
