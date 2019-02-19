update giveusers
set email = $2, 
    wants_statement = $3, 
    wants_updates = $4
where giveuser_id = $1;

