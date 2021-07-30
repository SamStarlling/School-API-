# Projeto Módulo 4 - API Escola

## Índice
<!--ts-->
   * [Sobre](#Sobre)
   * [Instalação](#instalacao)
   * [Testando as rotas](#rotas)
      * [GET](#get)
      * [GET/ID](#getId)
      * [POST](#post)
      * [PUT](#put)
      * [DELETE](#delete)
   * [Tecnologias Usadas](#tecnologias)
<!--te-->

<div id= "Sobre">
<h1 align="center">Projeto Módulo 4 - API Escola</h1>


<h3>Projeto final do módulo 4 com objetivo de desenvolver uma API seguindo a arquitetura REST e os padrões de projeto MVC e CRUD</h3>

- CREATE: POST </br>
- READ: GET </br>
- UPDATE: PUT</br>
- DELETE: DELETE</br>

</div></br>

<div id= "Instalação">
<h1 align="center">Instalação</h1>
  <h3>Para instalar todas as dependências do projeto utilize o comando abaixo no terminal</h3>
  
```bash
npm install
```
  
</div> </br>

<div id= "rotas">
<h1 align="center">Rotas</h1>
  <h3>Consultas do banco de dados seguindo o padrão CRUD</h3>

  <div id= "get">
    <h3>Método HTTP GET para mostrar todos os professores do banco</h3>
    
```bash
http://localhos:9810/escola/professores
```
    
  </div></br>
  
  <div id= "getID">
    <h3>Método HTTP GET para mostrar o professor do banco referente ao id passado como parâmetro</h3>
    
```bash
http://localhos:9810/escola/professores/1
```
    
  </div></br>
  
  <div id= "post">
    <h3>Método HTTP POST para inserir um novo professor no banco</h3>
    
```bash
http://localhos:9810/escola/professores
```
    
  </div></br>
  
  <div id= "put">
    <h3>Método HTTP PUT para atualizar as informações de um professor no banco pelo id</h3>
    
```bash
http://localhos:9810/escola/professores/1
```
    
  </div>
  
  
  <div id= "delete">
    <h3>Método HTTP DELETE para deletar um professor do banco pelo id</h3>
    
```bash
http://localhos:9810/escola/professores/1
```
    
  </div>
</div>

