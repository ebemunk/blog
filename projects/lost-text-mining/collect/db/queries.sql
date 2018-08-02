
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
