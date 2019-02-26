select name, ch.ch_id, mission, tagline, category, cause, rating, img
from charities ch
join mylists m on m.charity_id = ch.ch_id
where m.user_id = $1