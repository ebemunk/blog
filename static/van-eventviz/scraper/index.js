import caporal from 'caporal'

import packageJson from './package.json'
import scrape from './src/scrape'

caporal
.version(packageJson.version)

.command('scrape', 'scrape georgia straight events')
.action(scrape)

caporal.parse(process.argv)
