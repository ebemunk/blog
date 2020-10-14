interface SpeakerNode {
  type: 'Speaker'
  data: {
    speakerId: number
  }
}

interface TimestampNode {
  type: 'Timestamp'
  data: {
    seconds: number
  }
}

interface Timestamp {
  Start: number
  End: number
  Bitc: any
}

interface Leaf {
  object: 'leaf'
  text: string
}

interface LeafNode {
  object: 'text'
  leaves: Leaf[]
}

interface ContentNode {
  object: 'block'
  type: 'Content'
  data: {
    Timestamps: Timestamp[]
  }
  nodes: LeafNode[]
}

interface MonologueNode {
  object: 'block'
  type: 'Monologue'
  data: {
    monologueId: number
  }
  nodes: [SpeakerNode, TimestampNode, ContentNode]
}

type Graph = MonologueNode[]

import part1 from '../data/part-1.json'
import part2 from '../data/part-2.json'
import { speakerName } from '../util'

const lengths: {
  [key: string]: [number, number][]
} = {}

let lastTimestampEnd = 0

for (let monologue of part1.draft.nodes) {
  const speakerId = monologue.nodes[0].data.speakerId
  // @ts-ignore
  const speaker = speakerName(part1.draft.speakerMap[speakerId].name)

  const ranges: [number, number][] = []
  // @ts-ignore
  for (let ts of monologue.nodes[2].data.Timestamps) {
    ranges.push([ts.Start, ts.End])

    lastTimestampEnd = Math.max(ts.End, lastTimestampEnd)
  }

  if (!Array.isArray(lengths[speaker])) lengths[speaker] = []

  lengths[speaker].push(...ranges)
}

for (let monologue of part2.draft.nodes) {
  if (monologue.type === 'SplitJobMonologue') {
    continue
  }

  // @ts-ignore
  const speakerId = monologue.nodes[0].data.speakerId
  // @ts-ignore
  const speaker = speakerName(part2.draft.speakerMap[speakerId].name)

  const ranges: [number, number][] = []
  // @ts-ignore
  for (let ts of monologue.nodes[2].data.Timestamps) {
    ranges.push([lastTimestampEnd + ts.Start, lastTimestampEnd + ts.End])
  }

  lengths[speaker].push(...ranges)
}

for (let speaker in lengths) {
  lengths[speaker] = collapseRanges(lengths[speaker])
}

import { writeFileSync } from 'fs'

writeFileSync('./data/speechLen.json', JSON.stringify(lengths))

function collapseRanges(ranges: [number, number][]) {
  const collapsed = []
  let lastEnd = 0
  for (let range of ranges) {
    if (lastEnd === 0) {
      collapsed.push(range)
      lastEnd = range[1]
      continue
    }

    if (range[0] < lastEnd + 2000) {
      collapsed[collapsed.length - 1][1] = range[1]
      lastEnd = range[1]
      continue
    }

    collapsed.push(range)
    lastEnd = range[1]
  }
  return collapsed
}
