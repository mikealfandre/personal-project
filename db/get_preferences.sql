select giveuser_id, email, wants_statement, wants_updates 
from giveusers
where giveuser_id = $1;
