const request = require("supertest");
const { app } = require("../app");

/*test('/escola/professores', async () => {
   await request("http://localhost:9810")
    .get('/escola/professores')
    .expect(200)
    .then((res) => console.log("Passou no test"));
})*/

describe("Testando rotas de professor", () => {
    it("POST /escola/professores certo", async () => {
        const response = await request(app)
        .post("/escola/professores")
        .send({
            nome: "José Felipe",
            formacao: "Educação Física",
            carga_horaria: 25,
            endereco: "Rua São Fernando 78",
            email: "personal_felipe@gmail.com",
            telefone: "(25)99645-7841"
        })
        expect(response.error).toBe(false);
    })
    
    it("GET /escola/professores", async () => {
        const response = await request(app)
        .get("/escola/professores")
        expect(response.body).toHaveProperty("resultado");
    })
    
    it("DELETE /escola/professores/ID", async () => {
        const response = await request(app)
        .get("/escola/professores/4")
        expect(response).toBeTruthy()
    })
})