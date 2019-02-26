delete from mylists
where charity_id = $1 and user_id = $2;


-- select name, mission, tagline, category, cause, rating, img
-- from charities where name = 'WildAid';
-- -- join mylists m on m.charity_id = ch.ch_id 
-- -- where m.user_id = $2;



select ch_id, name, mission, tagline, category, cause, rating, img
from charities ch
join mylists m on m.charity_id = ch.ch_id 
where m.user_id = $2;



