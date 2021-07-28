//imports de bibliotecas ou frameworks do node
const Express = require("express");
const cors = require('cors');

//imports arquivos
const bd = require("./data/sqlite-bd");
const professoresControllers = require("./controllers/professores-controllers")


//config
const app = Express();
const port = 9810;


//middlewares
app.use(Express.json());
app.use(cors());


//rotas
professoresControllers(app, bd);

module.exports = {
  app: app,
  port: port
}