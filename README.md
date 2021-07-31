# School API

The objective of this project was to put in practice the create a database and the sever.


## Features

- Visual studio code
- Node.js
- Postman or Insominia

  
## Installation

Install my project with npm

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
I'm a student full stack developer at Resilia Educação... </br>
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/s%C3%A2mela-barbosa-web-developer/)
