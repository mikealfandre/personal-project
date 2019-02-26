insert into charities(
name,
mission,
tagline,
category,
cause,
rating,
img,
website_url,
ein,
category_id,
cause_id,
nteeType
)select
$1,
$2,
$3,
$4,
$5,
$6,
$7,
$8,
$9,
$10,
$11,
$12

where not exists(
    select ein from charities where ein = $9
);

select ch_id from charities
where ein = $9;
