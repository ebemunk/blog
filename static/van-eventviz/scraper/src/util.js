import { partial } from 'ramda'
import chalk from 'chalk'

export function logger(name) {
	if( process.env.NODE_ENV === 'test' ) return () => {}
	return partial(console.log, [chalk.bgGreen.black(name)])
}
