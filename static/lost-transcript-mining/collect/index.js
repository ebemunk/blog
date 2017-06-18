import { default as cli } from 'commander'

import { default as packageJson } from './package.json'
import {
	scrape,
	parse,
	writeDb,
	personality,
	tone
} from './commands'

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
.description('scrape episode html')
.option('-c, --concurrency <num>', 'promise concurrency', Infinity)
.action(scrape)

cli
.command('parse')
.description('parse episode html and save as json')
.option('-c, --concurrency <num>', 'promise concurrency', Infinity)
.action(parse)

cli
.command('write-db')
.description('write parsed jsons to db')
.option('-c, --concurrency <num>', 'promise concurrency', Infinity)
.action(writeDb)

cli
.command('personality')
.description('write parsed jsons to db')
.option('-c, --concurrency <num>', 'promise concurrency', Infinity)
.action(personality)

cli
.command('tone')
.description('get tone analysis for all episodes')
.action(tone)

cli.parse(process.argv)
