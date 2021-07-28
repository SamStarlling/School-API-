const { app , port } = require("./app");

//config server
app.listen(port, () => {
  console.log(`Servidor rodando: ${port}`);
})