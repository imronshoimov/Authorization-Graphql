CREATE DATABASE demo_db;

CREATE TABLE users(
    user_id serial primary key,
    username varchar(64),
    email varchar(128),
    password varchar(128),
    is_registered boolean default false,
    age int
);


