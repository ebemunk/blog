-- total lines by char
select char_name, count(*) as lines
from dialog
where type='dialog' and char_name is not null
group by char_name
order by lines desc
;

-- total lines per char per episode per season
select season, episode, char_name, count(*) as lines
from dialog
where type='dialog'
group by season, episode, char_name
order by season, episode, lines desc
;

-- char per episode per season
select distinct season, episode, char_name from dialog
where type='dialog'
order by season, episode, char_name asc
;

-- all spoken dialog prefixed with char name by episode
select season, episode, string_agg(char_name || ': ' || line, E'\n' order by seq)
from dialog
where type='dialog'
group by season,episode
order by season,episode
;

-- all dialog for each char ordered chronologically
select char_name, string_agg(line, E'\n' order by season, episode, seq)
from dialog
where type='dialog'
group by char_name
;

-- chars in every scene
select season, episode, act, scene, array_agg(distinct char_name)
from dialog
where type='dialog'
group by season, episode, act, scene
;