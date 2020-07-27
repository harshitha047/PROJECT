create database project;
use project;
create table registerform(
Id int auto_increment,
username varchar(100) not null,
mobile varchar(100) not null,
password varchar(100) not null,
email varchar(100) not null,
address varchar(100) not null,
primary key (id)
);
select * from registerform;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Shiva@123';
flush privileges;

