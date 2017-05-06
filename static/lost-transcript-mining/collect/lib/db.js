export function insertObj(obj, table = 'dialog') {
	const cols = Object.keys(obj)
	.join(',')
	const valOrder = Object.keys(obj)
	.map((v, i) => `$${i+1}`)
	.join(',')
	const sql = `
		INSERT INTO ${table}
		(${cols})
		VALUES
		(${valOrder})
	`
	return [
		sql,
		Object.values(obj)
	]
}
