export function totalLinesByChar() {
  return 'select * from total_lines_by_char;'
}

export function allLines(char_name) {
  return `select text from all_lines_by_char where char_name='${char_name}';`
}

export function episodeText(season, episode) {
  return `select text from episode_text where season=${season} and episode=${episode};`
}

export function allScenes() {
  return 'select * from scene_text;'
}

export function sceneTone() {
  return 'select * from scene_tone;'
}

export function wordCount() {
  return 'select * from word_count;'
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

export function linesPerChar() {
  return `
		select season, episode, char_name, count(*) as lines from dialog
		where type='dialog'
		group by season, episode, char_name
		order by season, episode, lines desc
	;`
}

export function charWordFrequencies() {
  return 'select * from total_words_by_char;'
}

export function personalities() {
  return 'select * from personality;'
}

export function charCooccurrence() {
  return `
		with s as (
			select
				distinct char_name, season, episode, scene
			from dialog
			where type='dialog'
			group by season, episode, scene, char_name
			order by season, episode, scene
		)
		select a.season, a.episode, a.char_name as "from_char", b.char_name as "to_char", count(*) as "val"
		from s a
		inner join s b
			on a.season = b.season
			and a.episode = b.episode
			and a.scene = b.scene
			and a.char_name<b.char_name
		group by a.season, a.episode, a.char_name, b.char_name
		order by season,episode;
	`
}
