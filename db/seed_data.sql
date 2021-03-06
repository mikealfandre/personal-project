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

insert into giveusers (email, password)
value(${email}, ${password})
returning email, id;

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

alter table charities
add column website_url text,
add column ein text,
add column org_id integer,
add column curr_score integer,
add column ovr_rating integer,
add column fin_score integer,
add column fin_rating integer,
add column accountability_score integer,
add column category_id integer,
add column cause_id integer,
add column cause_name text, 
add column nteeType text;

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
charity_id integer references charities(ch_id),
user_id integer references giveusers(giveuser_id)
);

create table donations(
id serial primary key,
charity_name text,
amount decimal,
date date,
user_id integer references giveusers(giveuser_id)
);

-- Change user preferences

update giveusers
set email = $2, 
    wants_statement = $3, 
    wants_updates = $4
where giveuser_id = $1;
