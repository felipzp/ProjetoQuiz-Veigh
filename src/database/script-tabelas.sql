-- Projeto Individual Script

create database projeto_individual;

use projeto_indiviual;

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
 
    
    



select u.nome,
r.certas,
r.erradas,
p.pergunta,
p.resposta
from usuarios u
	join resultados_quiz r
    on r.fk_usuario = u.idUsuario
		join perguntas_error p 
			on r.fkPerguntas = p.idPergunta;


select * from usuarios
	join resultados_quiz r
    on r.fk_usuario = usuarios.idUsuario
		join perguntas_error p 
			on r.fkPerguntas = p.idPergunta;
            

SELECT u.nome,    
r.certas,
r.erradas
FROM usuarios u
JOIN resultados_quiz r ON r.fk_usuario = u.idUsuario
WHERE r.idResultado IN (
SELECT MAX(idResultado)   
FROM resultados_quiz
GROUP BY fk_usuario)
and fk_usuario;


            
select * from resultados_quiz;
select * from perguntas_error;	
select * from usuarios;


desc resultados_quiz;
desc perguntas_error;
desc usuarios;

show tables;



SELECT * FROM perguntas_error WHERE idPergunta = 11;


SELECT r.certas, r.erradas, r.idResultado
FROM resultados_quiz r
WHERE r.fk_usuario =3
ORDER BY r.idResultado DESC
LIMIT 1;


