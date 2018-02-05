import caporal from 'caporal'

import packageJson from './package.json'
import scrape from './src/scrape'
import details from './src/details'
import writeJson from './src/writeJson'

caporal
  .version(packageJson.version)

  .command('scrape', 'scrape georgia straight events')
  .action(scrape)

  .command('details', 'retrieve details for scraped events')
  .action(details)

  .command('writeJson', 'write json to myjson.com')
  .action(writeJson)

caporal.parse(process.argv)
