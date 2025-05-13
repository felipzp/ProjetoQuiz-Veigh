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
	fk_usuario int not null,
    fkPerguntas int not null,
    foreign key (fk_usuario) references usuarios(id),
    foreign key (fkPerguntas) references perguntas_error(id));
    
create table perguntas_error
( id int primary key auto_increment,
	pergunta varchar(85) not null,
	resposta varchar(45) not null);
    
insert into perguntas_error (pergunta, resposta) values
('Qual a música mais viral do artista Veigh?', 'Alternativa A'),
('Qual o nome correto do artista?', 'Alterativa D'),
('Quantos anos veigh tem?', 'Alterativa B'),
('Qual foi o primeiro álbum lançado de Veigh?', 'Alterativa B'),
('Qual o nome da gravadora em que o Veigh está inserido?', 'Alterativa D'),
('Qual dessas músicas é um feat com o Matuê', 'Alterativa D'),
('Qual dessas falas são características do Veigh?', 'Alterativa A'),
('Qual frase faz parte de uma música do Veigh?', 'Alterativa A'),
('Qual dessas músicas, possui Feat Gringo?', 'Alterativa C'),
('Em que ano foi lançado a faixa Buchanans?', 'Alterativa B');


select * from resultados_quiz;	
select * from perguntas_error;	

select u.nome,
r.acertos,
r.erros,
p.pergunta,
p.resposta
from usuarios u
	join resultados_quiz r
    on r.fk_usuario = u.id
		join perguntas_error p 
			on r.fkPerguntas = p.id;








