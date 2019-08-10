import { default as cli } from 'commander'

import { default as packageJson } from '../package.json'
import scrapePages from './commands/scrapePages'
import scrapeRecords from './commands/scrapeRecords'
import parse from './commands/parse'
import writeDB from './commands/writeDB'
import parseDB from './commands/parseDB'
import writeViz from './commands/writeViz'
import geo from './commands/geo'

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

cli
  .command('parse')
  .description('parse records')
  .action(parse)

cli
  .command('writeDB')
  .description('write records to db')
  .action(writeDB)

cli
  .command('parseDB')
  .description('parse records from db')
  .action(parseDB)

cli
  .command('writeViz')
  .description('write viz data')
  .action(writeViz)

cli
  .command('geo')
  .description('write viz data')
  .action(geo)

cli.parse(process.argv)
