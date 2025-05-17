-- Projeto Individual Script

create database projeto_individual;


use projeto_individual;

create table usuarios 
    (idUsuario int primary key auto_increment ,
    nome varchar(45) not null,
    email varchar(45) unique not null,
    senha varchar(45) not null);
    
create table resultados_quiz 
   ( idResultado int primary key auto_increment,
    certas int,
    erradas int ,
	fk_usuario int ,
    foreign key (fk_usuario) references usuarios(idUsuario));
 
Create table recomendacao(
idRecomendacao int primary key auto_increment,
musica varchar(45),
artista varchar(45),
fk_usuario int ,
foreign key (fk_usuario) references usuarios(idUsuario));
    



select u.nome,
r.certas,
r.erradas
from usuarios u
	join resultados_quiz r
    on r.fk_usuario = u.idUsuario;
		

		drop table resultados_quiz;

            
select * from resultados_quiz;
select * from recomendacao;
select * from usuarios;


desc resultados_quiz;
desc usuarios;

show tables;


SELECT r.certas, r.erradas, r.idResultado
FROM resultados_quiz r
WHERE r.fk_usuario 
ORDER BY r.idResultado DESC
LIMIT 5;
 
  SELECT AVG(certas) AS media_acertos
        FROM resultados_quiz
        group by fk_usuario;

