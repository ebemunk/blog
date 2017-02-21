export function insertObj(obj) {
	const cols = Object.keys(obj)
	.join(',')
	const valOrder = Object.keys(obj)
	.map((v, i) => `$${i+1}`)
	.join(',')
	const sql = `
		INSERT INTO dialog
		(${cols})
		VALUES
		(${valOrder})
	`
	return [
		sql,
		Object.values(obj)
	]
}
