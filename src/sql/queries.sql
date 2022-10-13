--Quick reference of common query strings

select * from users;

select * from sessions s ;

select * from urls u ;

select * from users u1
join sessions s on s."userId" = u1.id 
join urls u2 on u2."userId" = u1.id;

select * from users u1
full outer join sessions s on s."userId" = u1.id 
full outer join urls u2 on u2."userId" = u1.id;