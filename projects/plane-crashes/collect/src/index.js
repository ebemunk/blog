import { default as cli } from 'commander'

import { default as packageJson } from '../package.json'
// import {
// 	scrape,
// 	parse,
// 	writeDb,
// 	personality,
// 	tone,
// 	writeForViz
// } from './commands'

cli.version(packageJson.version)

cli
  .command('help', { isDefault: true })
  .description('help text')
  .action(() => {
    cli.help()
  })

// cli
// .command('scrape')
// .description('scrape episode html')
// .option('-c, --concurrency <num>', 'promise concurrency', Infinity)
// .action(scrape)

cli.parse(process.argv)
