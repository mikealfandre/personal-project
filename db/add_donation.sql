insert into donations(
    amount,
    date, 
    charity_name,
    user_id
)
values(
    $1,
    $2,
    $3,
    $4
);