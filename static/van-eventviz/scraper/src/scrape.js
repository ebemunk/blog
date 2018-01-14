import axios from 'axios'
import cheerio from 'cheerio'
import * as R from 'ramda'

import { logger } from './util'

const log = logger('scrape')

const baseUrl = 'https://www.straight.com'
const eventsUrl = `${baseUrl}/listings/events`

export default async function scrape(args, opts) {
  const { data } = await axios.get(eventsUrl)
  return listPage(data)
}

export function listPage(html) {
  const $ = cheerio.load(html)
  const events = $('.teaser--summary')

  return events
    .map((i, el) => {
      const $el = $(el)
      const find = e => $el.find(e)
      return {
        date: find('.date-plate').text(),
        image: find('figure a img').attr('src'),
        title: find('.title a').text(),
        url: baseUrl + find('.title a').attr('href'),
        venue: find('.event--venue').text().replace('Where: ', ''),
        tags: find('.venue--tags a').map((i, tag) => $(tag).text()).toArray()
      }
    })
    .toArray()
}
