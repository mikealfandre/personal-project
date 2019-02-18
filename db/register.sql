insert into giveusers (email, password, wants_statement, wants_updates)
values(${email}, ${password}, true, true)
returning email, giveuser_id, wants_statement, wants_updates;