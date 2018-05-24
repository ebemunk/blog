import { Transport } from 'winston'

export default class SlackTransport extends Transport {
  constructor(opts) {
    super(opts)
  }

  log(info, callback) {
    callback()
  }
}
