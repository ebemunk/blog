export function totalLinesByChar() {
	return `
		select char_name, count(*) as lines
		from dialog
		where type='dialog' and char_name is not null
		group by char_name
		order by lines desc
	;`
}

export function allLines(char_name) {
	return `
		select string_agg(line, E'\n' order by season, episode, seq) as text
		from dialog
		where type='dialog' and char_name='${char_name}'
		group by char_name
	;`
}

export function episodeText(season, episode) {
	return `
		select string_agg(line, ' ' order by seq) as text
		from dialog
		where type='dialog' and season=${season} and episode=${episode} and line!=''
		group by season,episode
		order by season,episode
	;`
}

export function allEpisodes() {
	return `
		select distinct season, episode
		from dialog
		order by season, episode asc
	;`
}
