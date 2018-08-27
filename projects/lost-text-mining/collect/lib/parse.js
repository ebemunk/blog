import cheerio from 'cheerio'
import * as R from 'ramda'

import { logger } from '../util'

const log = logger('lib/parse')

function getEpisodeLinks(el) {
  return el
    .parent()
    .next('ol')
    .children()
    .children()
    .filter('a')
    .get()
}

function parseEpisodeLink(el) {
  return {
    url: el.attribs.href,
    title: el.attribs.title.replace(' transcript', ''),
  }
}

export function parseIndex(html) {
  const $ = cheerio.load(html)
  const seasons = R.range(1, 7)

  const getSeasonElem = s => $(`#Season_${s}`)
  const parseEpisodeLinks = R.map(parseEpisodeLink)

  return R.pipe(
    R.map(getSeasonElem),
    R.map(getEpisodeLinks),
    R.map(parseEpisodeLinks),
  )(seasons)
}

export function getLines(html) {
  const $ = cheerio.load(html)
  return (
    $('#toc')
      // everything after table of contents
      .nextAll()
      // only hr h2 and p tag
      .filter((i, el) => ['hr', 'h2', 'p'].includes(el.tagName))
      .map((i, el) => ({
        tagName: el.tagName,
        text: $(el)
          .text()
          .trim()
          .replace(/\n/g, ''),
      }))
      .get()
  )
}

export function parseLine({ tagName, text }) {
  switch (tagName) {
    case 'hr':
      return {
        type: 'scene',
      }

    case 'h2':
      return {
        type: 'act',
      }

    case 'p': {
      const stageDirection = text.match(/^\[([^\]]+)\]?(?: (.+))?$/)

      if (stageDirection) {
        return {
          type: 'stageDirection',
          raw: text,
          line: stageDirection[1],
        }
      } else {
        const parsed = parseText(text)
        if (!parsed) return false
        return {
          type: 'dialog',
          raw: text,
          ...parsed,
        }
      }
    }
  }
}

export function parseText(text) {
  let line = text
  // everything inside square brackets or paranthesis is a direction
  let directions = []
    // [ and ]
    .concat(text.match(/\[([^\]]+)\]\.?/g))
    // ( and )
    .concat(text.match(/\(([^\]]+)\)\.?/g))
    // remove falsy
    .filter(Boolean)
    // strip and remove from source text
    .map(str => {
      line = line.replace(str, '').replace('  ', ' ')
      return str.replace(/[\[\]\(\)]/g, '').replace(/\.$/, '')
    })

  const charLine = line.trim().match(/^(.+?)\:\s*(.+)?$/)
  if (!charLine) {
    // special case handling

    // missing semicolon
    if (line.includes('KATE  Hi, Cassidy.')) {
      return parseLine({
        tagName: 'p',
        text: 'KATE: Hi, Cassidy.',
      })
    }
    // missing brackets
    if (
      line.includes('Eva hands the picture to Nadia') ||
      line.includes('Flashback - 32 days ago.') ||
      line.includes('Keamy sits down')
    ) {
      return parseLine({
        tagName: 'p',
        text: `[${line}]`,
      })
    }
    // missing opening bracket
    if (line.includes('On-Island - Sayid is')) {
      return parseLine({
        tagName: 'p',
        text: `[${line}`,
      })
    }
    log('unparseable line:', text, '\n')
    return
  }
  const char_name = charLine[1].trim().toUpperCase()
  line = charLine[2] || ''
  // replace line with subtitle if it exists
  directions
    .map(direction => {
      const sub = direction.match(/Subtitled?: (.+)/)
      // replace line with subtitle and remove direction
      if (sub && sub[1]) {
        line = sub[1]
        return false
      }
      return direction
    })
    .filter(Boolean)

  // clean up line
  line = line
    .replace(/\.\.\.?/g, '… ')
    .replace(/\s\s+/g, ' ')
    .trim()

  return {
    char_name,
    line,
    directions,
  }
}

export function countActsAndFlashbacks(lines) {
  let act = 0
  let scene = 0
  let flashback = false
  let flashsideways = false
  let flashforward = false

  return lines.map(line => {
    if (line.type === 'act') {
      flashback = false
      flashsideways = false
      flashforward = false
      act++
      scene++
    }

    if (line.type === 'scene') {
      flashback = false
      flashsideways = false
      flashforward = false
      scene++
    }

    if (/^[Ff]lashback/.test(line.line)) {
      flashback = true
    }

    if (/^Flash sideway/.test(line.line)) {
      flashsideways = true
    }

    if (/^Flash-forward/.test(line.line)) {
      flashforward = true
    }

    return {
      ...line,
      act,
      scene,
      meta: {
        flashback,
        flashsideways,
        flashforward,
      },
    }
  })
}
