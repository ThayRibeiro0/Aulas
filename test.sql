CREATE TABLE usuarios(
    nome VARCHAR(50), 
    email VARCHAR(100), 
    idade INT
    );

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Victor Lima",
    "email@teste.com",
    8
);

INSERT INTO usuarios(idade, email, nome) VALUES(
    25,
    "email@teste22.com",
    "Luan"
);

INSERT INTO usuarios(idade, email, nome) VALUES(
    80,
    "email@teste33.com",
    "Antony"
);

INSERT INTO usuarios(idade, email, nome) VALUES(
    55,
    "email@teste88.com",
    "Vanez"
);

INSERT INTO usuarios(idade, email, nome) VALUES(
    110,
    "email@teste66.com",
    "Iane"
);

SELECT * FROM usuarios WHERE idade = 25;

SELECT * FROM usuarios WHERE nome = "Iane";

SELECT * FROM usuarios WHERE idade <= 30;

DELETE FROM usuarios WHERE nome = "Luan";

UPDATE FROM usuarios SET nome = "Nome de Teste" WHERE nome = "Vanez";   