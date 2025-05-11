-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database pjindividual;

use pjindividual;

create table usuarios 
    (id int primary key auto_increment ,
    nome varchar(45) not null,
    email varchar(45) unique not null,
    senha varchar(45) not null);
    
create table resultados_quiz 
   ( id int primary key auto_increment,
    acertos int not null,
    erros int not null,
    dtHora datetime,
	fk_usuario int not null,
    foreign key (fk_usuario) references usuarios(id));

create table estatisticas_gerais (
    id int primary key auto_increment,
    media_geral_acertos decimal(5,2) not null);
select * from usuarios;	



desc usuarios;



