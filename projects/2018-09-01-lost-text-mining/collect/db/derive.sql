-- run after dialog table is populated
-- derivative data

create table episode_text as
	select season, episode, string_agg(line, ' ' order by seq) as text
		from dialog
		where type='dialog'
		group by season, episode
		order by season, episode
;

create table tsvector_simple as
	select season, episode, to_tsvector('simple', text) as text
		from episode_text
;

create table tsvector_en as
	select season, episode, to_tsvector('english', text) as text
		from episode_text
;

do $$
declare r record;
begin
for r in
	select season, episode, text from tsvector_simple
loop
	insert into word_count
		select r.season, r.episode, sum(nentry) as total, count(*) as uniq
			from ts_stat('select text from tsvector_simple where season='||r.season||' and episode='||r.episode);
end loop;
end $$;

create table total_words_by_char as
	select
		char_name,
		sum(array_length(regexp_split_to_array(text, '\s'), 1)) as words
	from
		all_lines_by_char
	group by
		char_name
;
