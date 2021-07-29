const Professor = require("../models/professor-model");
const ProfessoresDao = require("../dao/professores-dao");

module.exports = (app, bd) => {
  const DaoProfessores = new ProfessoresDao(bd);

  app.get('/escola/professores', async (req, res) => {
    try {
      const respostaMostraProfessores = await DaoProfessores.MostraProfessores();
      res.json({resultado: respostaMostraProfessores});

    }
    catch(error){
      res.json({mensagem: error.mensagem});
    }
  })
  app.get('/escola/professores/:ID', async (req, res) => {
    try {
      const id = req.params.ID
      if(parseInt(id)) {
        const respostaMotraProfessor = await 
        DaoProfessores.MostraProfessor(id);
        if(respostaMotraProfessor) {
          res.json({resultado: respostaMotraProfessor});
        }
        else {
          throw new Error("Nenhum usuario encontrado");
        }
      }
      else {
        throw new Error("Nenhum usuario encontrado");
      }
      
    }
    catch(error){
      res.status(500).json({mensagem: error.mensagem});
    }
  })
  app.post('/escola/professores', async (req, res) => {
    try {
      const body = req.body;
      const infos = [body.NOME, body.FORMACAO, body.CARGA_HORARIA, body.ENDERECO, body.EMAIL, body.TELEFONE];
      const respostaInsereProfessor = await DaoProfessores.InsereProfessor(infos);
      res.json({resultado: respostaInsereProfessor});
    }
    catch(error){
      res.json({mensagem: error.mensagem});
    }
  })
  app.delete('/escola/professores/:ID', async (req, res) => {
    try {
      const id = req.params.ID
      const respostaDeletaProfessor = await DaoProfessores.DeletaProfessor(id)
      res.json({resultado: respostaDeletaProfessor});
    }
    catch(error){
      res.json({mensagem: error.mensagem});
    }
  })
  app.put('/escola/professores/:ID', async (req, res) => {
    try {
      const id = req.params.ID
      const body = req.body;
      const infos = [body.NOME, body.FORMACAO, body.CARGA_HORARIA, body.ENDERECO, body.EMAIL, body.TELEFONE];
      const respostaAlteraProfessor = await DaoProfessores.AlteraProfessor(infos, id);
      res.json({resultado: respostaAlteraProfessor});
    }
    catch(error){
      res.json({mensagem: error.mensagem});
    }
  })
}