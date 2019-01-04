import { default as cli } from 'commander'

import { default as packageJson } from '../package.json'
import scrapePages from './commands/scrapePages'
import scrapeRecords from './commands/scrapeRecords'

cli.version(packageJson.version)

cli
  .command('help', { isDefault: true })
  .description('help text')
  .action(() => {
    cli.help()
  })

cli
  .command('scrapePages')
  .description('scrape pages')
  .action(scrapePages)

cli
  .command('scrapeRecords')
  .description('scrape records')
  .action(scrapeRecords)

cli.parse(process.argv)