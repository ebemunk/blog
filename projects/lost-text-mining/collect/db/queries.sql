
-- char per episode per season
select distinct season, episode, char_name from dialog
where type='dialog'
order by season, episode, char_name asc
;

-- chars in every scene
select season, episode, act, scene, array_agg(distinct char_name)
from dialog
where type='dialog'
group by season, episode, act, scene
;

CREATE OR REPLACE VIEW public.wordsandchars AS
 SELECT dialog.season,
    dialog.episode,
    sum(array_length(regexp_split_to_array(dialog.line, '\s'::text), 1)) AS words,
    sum(length(dialog.line)) AS chars
   FROM dialog
  WHERE dialog.type::text = 'dialog'::text
  GROUP BY dialog.season, dialog.episode
  ORDER BY dialog.season, dialog.episode;
