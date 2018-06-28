-- derived data views
-- just for simple querying

create or replace view total_lines_by_char as
	select char_name, count(*) as lines
		from dialog
		where type='dialog' and char_name is not null
		group by char_name
		order by lines desc
;

create or replace view all_lines_by_char as
	select char_name, string_agg(line, E'\n' order by season, episode, seq) as text
		from dialog
		where type='dialog'
		group by char_name
;

create or replace view episodes as
	select distinct season, episode
		from dialog
		order by season, episode asc
;

create or replace view chars as
	select distinct char_name
	from dialog
	where char_name is not null
;
