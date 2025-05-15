create table if not exists users (
    id serial primary key,
    username varchar(25),
    password varchar(50),
    last_time_login varchar default null,
    last_time_device varchar default null
);

create table if not exists device_logs(
    id serial primary key,
    user_id integer,
    foreign key(user_id) references users(id),
    client_type varchar,
    client_name varchar,
    os varchar,
    device_type varchar,
    device_brand varchar,
    device_model varchar
);

