select name, ch.id, mission, tagline, category, cause, rating, img
from charities ch
join mylists m on m.charity_id = ch.id
where m.user_id = $1