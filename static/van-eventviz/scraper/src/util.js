import { partial, partialRight } from 'ramda'
import { createLogger, format, transports } from 'winston'
import { config } from 'dotenv'

import SlackTransport from './transport/SlackTransport'
import NoopTransport from './transport/NoopTransport'

config()

const { SLACK_WEBHOOK_URL } = process.env

export const logger = (opts) => createLogger({
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports:
    process.env.NODE_ENV === 'test' ? [new NoopTransport()] : [
    new transports.Console({
      level: 'verbose'
    }),
    new SlackTransport({
      level: 'info',
      webhook_url: SLACK_WEBHOOK_URL,
      username: 'Daily Scraper Dude',
      icon_emoji: ':japanese_ogre:',
			text: '',
			...opts.slack
    })
  ],
})

export const prettyJson = partialRight(JSON.stringify, [null, 2])
