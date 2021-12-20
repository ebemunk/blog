import axios from 'axios'
import cheerio from 'cheerio'
import { map } from 'bluebird'

import { getPool, insertObj } from './db'
import { prettyJson, logger } from './util'

const baseUrl = 'https://www.straight.com'
const eventsUrl = `${baseUrl}/listings/events`

const log = logger({
  slack: {
    username: 'Scraper Dude',
    icon_emoji: ':japanese_ogre:',
  },
})

export default async function scrape(args, opts) {
  log.verbose({
    type: 'env',
    env: process.env,
  })
  const pool = getPool()
  let page = 0
  let events = []
  let totalEvents = 0
  let totalSaves = 0
  do {
    events = await parsePage(page)
    const saves = await map(events, e => save(pool, e))
    totalSaves += saves.filter(e => e).length
    totalEvents += events.length
    log.verbose({
      type: 'page',
      page,
      events: events.length,
      saveCount: saves.filter(e => e).length,
    })
    page++
    // events = []
  } while (events.length)
  log.info({
    type: 'scrape',
    pages: page,
    totalEvents,
    totalSaves,
  })
}

export async function parsePage(page) {
  const { data } = await axios.get(`${eventsUrl}?page=${page}`)
  const $ = cheerio.load(data)
  return $('article.cf.event')
    .map((i, el) => {
      const $el = $(el)
      const find = e => $el.find(e)
      return {
        date: find('.date-tag')
          .text()
          .trim(),
        image: find('.card--rounded a img').attr('src'),
        title: find('.title a').text(),
        url: baseUrl + find('.title a').attr('href'),
        id: find('.title a')
          .attr('href')
          .split('/')
          .pop(),
        venue: find('.event--venue')
          .text()
          .trim(),
        tags: find('.event--tags a')
          .map((i, tag) => $(tag).text())
          .toArray(),
      }
    })
    .toArray()
}

export async function save(pool, event) {
  try {
    return await pool.query(
      ...insertObj(
        {
          id: event.id,
          evt: event,
        },
        'events',
      ),
    )
  } catch (e) {
    // 23505 = unique_violation
    if (e.code === '23505') {
      log.verbose({
        type: 'unique_violation',
        eventId: event.id,
      })
    } else {
      e.event = event
      log.verbose({
        type: 'db save error',
        e,
      })
    }
    return false
  }
}
