
export function insert(row) {
	const sql = `
		INSERT INTO dialog
		(season, episode, seq, type, char_name, line, directions, raw)
		VALUES
		($1, $2, $3, $4, $5, $6, $7, $8)
	`
	return [
		sql,
		[
			row.season,
			row.episode,
			row.seq,
			row.type,
			row.char_name,
			row.line,
			JSON.stringify(row.directions),
			row.raw
		]
	]
}
