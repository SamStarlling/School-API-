const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

//-----------PROFESSORES
const PROFESSORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PROFESSORES" (
  "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
  "NOME" VARCHAR(255),
  "FORMACAO" VARCHAR(100),
  "CARGA_HORARIA" INTEGER(50),
  "ENDERECO" VARCHAR(255),
  "EMAIL" VARCHAR(255),
  "TELEFONE" VARCHAR(25)
)
`

const ADD_PROFESSORES_DATA = `
INSERT INTO PROFESSORES (ID, NOME, FORMACAO, CARGA_HORARIA,ENDERECO, EMAIL, TELEFONE)
VALUES
(1, 'Antônio Augusto', 'Matemática', 20, 'Rua tereza 25', 'ant_augusto@cet.com', '(21)99854-5621'),
(2, 'Augusto Pedro', 'Física', 30, 'Rua tomé 250', 'augusto@ceft.com', '(21)97854-5621'),
(3, 'Carlos Roberto', 'Química', 15, 'Estrada dos Rios Grandes 89', 'carlos_1965@paep.com','(22)99854-5621')
`

function criaTabelaProfessores() {
  db.run(PROFESSORES_SCHEMA, (error) => {
       if (error) console.log("Erro ao criar tabela de professores", error);
    });
}

function populaTabelaProfessores() {
    db.run(ADD_PROFESSORES_DATA, (error) => {
       if (error) console.log("Erro ao popular tabela de professores", error);
    });
}

db.serialize(() => {
  criaTabelaProfessores();
  populaTabelaProfessores();
})