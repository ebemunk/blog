import { doIt } from '../write-db'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000000

xdescribe('doIt', () => {
	it('kuheri', async () => {
		const res = await doIt()
		// expect(list).toMatchSnapshot()
		// console.log(res)
	})
})
