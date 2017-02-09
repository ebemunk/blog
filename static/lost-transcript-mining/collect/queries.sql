-- total lines per char per episode per season
select
    season, episode, char_name, count(*) as lines
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