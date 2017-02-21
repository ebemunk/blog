import { insertObj } from './db'

describe('insertObj', () => {
	it('provide correct sql', () => {
		expect(insertObj({
			faf: 'etet',
			lolol: 'yaya',
			directions: [
				'some', 'things'
			]
		})).toMatchSnapshot()
	})
})
