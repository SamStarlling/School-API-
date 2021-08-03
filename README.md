# API Escola

Projeto de desenvolvimento da entidade Professores da API Escola para a finalização do módulo de Node.js da Resilia Educação.



## Características do projeto

- Padrão de projeto MVC;
- Arquitetura de software REST;
- Operações CRUD;

  
## Ferramentas necessárias para testar o projeto
Caso tenha algum instalado pular o passo da Instalação.

### Passo 1
#### Instalação do Node.js
[Node.js](https://nodejs.org/en/download/)
![App Screenshot](https://media.geeksforgeeks.org/wp-content/uploads/20190311152716/Capture120.png)

### Passo 2
#### Instalação do Visual Studio Code
[Visual Studio Code](https://code.visualstudio.com/Download)
![App Screenshot](https://www.toolsqa.com/wp-content/uploads/sites/1/nggallery/protractor/downlaodpage.png)

### Passo 3
#### Instalação do Postman
[Postman](https://www.postman.com/downloads/)
![App Screenshot](https://giangtester.com/wp-content/uploads/2017/09/Download_Postman_Tool.png)


### Passo 4
#### Instalação do Git & Git Bash
[Git Bash](https://grokshop.tv/wp-content/uploads/2019/10/git_download-768x390.png)
![App Screenshot](https://grokshop.tv/wp-content/uploads/2019/10/git_download-768x390.png)


## Iniciando o projeto

Instalando as dependências do projeto 


```bash
  npm install
```

## API Reference

#### Get all professors

```http
  GET localhost:9810/escola/professores
```
Display an object JSON with all professors into the database.

#### Get professor

```http
  GET localhost:9810/escola/professores/${ID}
```

| Parametro | Tipo     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `ID`      | `number` | **Required**. ID of fetch professor |

#### Post professor

```http
  POST localhost:9810/escola/professores
```

Insert professor into the database.

```http
  PUT localhost:9810/escola/professores/${ID}
```

| Parametro | Tipo     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `ID`      | `number` | **Required**. ID of fetch and update professor |


```http
  DELETE localhost:9810/escola/professores/${ID}
```

| Parametro | Tipo     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `ID`      | `number` | **Required**. ID of fetch and delete professor |

## 🚀 About Me
Eu sou estudante de engenharia elétrica apaixonada por tecnologia que resolveu se desafiar iniciando os estudos na Resilia Eduacação em desenvolvimento web, com o propósito de desenvolver soluções que facilitarão a vida dos usuários.
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/s%C3%A2mela-barbosa-web-developer/)
