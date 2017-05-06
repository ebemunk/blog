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

-- dialog table
CREATE TABLE public.dialog
(
  id SERIAL NOT NULL,
  season integer NOT NULL,
  episode integer NOT NULL,
  seq integer NOT NULL,
  act integer NOT NULL,
  scene integer NOT NULL,
  flashback boolean NOT NULL,
  flashsideways boolean NOT NULL,
  type character varying NOT NULL,
  char_name character varying DEFAULT NULL,
  line text DEFAULT NULL,
  directions json DEFAULT '[]'::json,
  raw text DEFAULT NULL
)

-- watson persoanlity insights
CREATE TABLE public.personality
(
  id SERIAL NOT NULL,
  char_name character varying DEFAULT NULL,
  profile json DEFAULT '{}'::json
)
