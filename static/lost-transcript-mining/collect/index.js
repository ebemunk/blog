import { default as cli } from 'commander'

import { default as packageJson } from './package.json'
import { scrape, writeDb, lol } from './commands'

cli
.version(packageJson.version)

cli
.command('help', {isDefault: true})
.description('help text')
.action(() => {
	cli.help()
})

cli
.command('scrape')
.description('scrape transcripts and save as json')
.option('-c, --concurrency <num>', 'promise concurrency', Infinity)
.option('--use-cache', 'use local cache', Infinity)
.action(scrape)

cli
.command('write-db')
.description('write scraped episodes to db')
.option('-c, --concurrency <num>', 'promise concurrency', Infinity)
.action(writeDb)

cli
.command('watson')
.description('call watson api')
.action(lol)

cli.parse(process.argv)
