create table giveusers(
giveuser_id serial primary key,
email varchar(60),
password varchar(60),
wants_statement boolean,
wants_updates boolean
);

insert into giveusers(
email,
password,
wants_statement,
wants_updates
)values(
'mike@gmail.com',
'password',
true,
true
);

create table charities(
id serial primary key,
name text,
mission text,
tagline text,
category text,
cause text,
rating text,
img text
);

insert into charities(
name,
mission,
tagline,
category,
cause,
rating,
img
)values(
'red cross',
'to help give blood too all people that need it',
'to help all',
'health',
'cause',
'4 star',
'URL'
);

update charities
set img = 'https://images.unsplash.com/photo-1484755765804-5a9d6be167d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
where name = 'red cross';

create table mylists(
id serial primary key,
charity_id integer references charities(id),
user_id integer references giveusers(giveuser_id)
);

create table donations(
id serial primary key,
charity_name text,
amount decimal,
date date,
user_id integer references giveusers(giveuser_id)
);
