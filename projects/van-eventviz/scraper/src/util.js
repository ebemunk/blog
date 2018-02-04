import { readFile as fsReadFile } from 'fs'

import { partial, partialRight, omit } from 'ramda'
import { createLogger, format, transports } from 'winston'
import { config } from 'dotenv'
import Promise from 'bluebird'

import SlackTransport from './transport/SlackTransport'
import NoopTransport from './transport/NoopTransport'

config()

const { SLACK_WEBHOOK_URL } = process.env

export const prettyJson = partialRight(JSON.stringify, [null, 2])

export const logger = opts =>
  createLogger({
    format: format.combine(format.timestamp(), format.json()),
    transports:
      process.env.NODE_ENV === 'test'
        ? [new NoopTransport()]
        : [
            new transports.Console({
              level: 'verbose',
            }),
            new SlackTransport({
              level: 'info',
              webhook_url: SLACK_WEBHOOK_URL,
              username: 'Cucumber',
              icon_emoji: ':eggplant:',
              text: log => {
                return [
                  `*${log.message.type}* _${log.timestamp}_`,
                  '```',
                  prettyJson(omit(['type'], log.message)),
                  '```',
                ].join('\n')
              },
              ...opts.slack,
            }),
          ],
  })

export const readFile = file =>
  Promise.fromCallback(cb => fsReadFile(file, 'utf-8', cb))

export const qs = obj =>
  Object.keys(obj)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join('&')
