export function totalLinesByChar() {
	return 'select * from total_lines_by_char;'
}

export function allLines(char_name) {
	return `select text from all_lines_by_char where char_name='${char_name}';`
}

export function episodeText(season, episode) {
	return `select text from episode_text where season=${season} and episode=${episode};`
}

export function allEpisodes() {
	return 'select * from episodes;'
}

export function episodeLengths() {
	return `
		select
			season,
			episode,
			sum(array_length(regexp_split_to_array(line, '\\s'),1)) as words,
			sum(length(line)) as chars
		from dialog
		where type='dialog'
		group by season, episode
		order by season, episode
	;`
}

export function flashbacksAndSideways() {
	return `
		select
			season,
			episode,
			array_to_json(array_agg(meta->'flashback' order by seq asc)) as flashback,
			array_to_json(array_agg(meta->'flashsideways' order by seq asc)) as flashsideways,
			array_agg(length(line)) as chars
		from dialog
		where type='dialog'
		group by season, episode
		order by season, episode
	;`
}
