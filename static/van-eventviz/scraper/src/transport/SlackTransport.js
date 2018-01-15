import { Transport } from 'winston'
import { post } from 'axios'

export default class SlackTransport extends Transport {
  constructor(opts) {
    super(opts)
    this.opts = opts
  }

  log(info, callback) {
    const {
      webhook_url,
      text,
      ...opts
    } = this.opts

    post(webhook_url, {
      ...opts,
      text: text(info),
    })
    callback()
  }
}
