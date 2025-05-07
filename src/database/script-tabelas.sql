create database pjindividual;

use pjindividual;


CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_usuario VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);
CREATE TABLE resultados_quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fk_usuario INT NOT NULL,
    acertos INT NOT NULL,
    erros INT NOT NULL,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuarios(id)
);
CREATE TABLE estatisticas_gerais (
    id INT PRIMARY KEY,
    media_geral_acertos DECIMAL(5,2) NOT NULL
);
