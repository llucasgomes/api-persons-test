const express = require("express");
const app = express();

//escutando em uma porta ( declarar)
const PORT = process.env.PORT || 8877;

//criando rotas para teste
app.get("/", (req, res) => {
  res.json({
    msg: "ok",
  });
});

//outra rota de test
app.get("/about", (req, resp) => {
  resp.json({
    linkedin: "www.linkedin.com",
    facebook: "www.facebook.com",
    github: "www.github.com",
  });
});

//outra rota de test
app.get("/persons", (req, res) => {
  res.json([
    {
      id: 1,
      name: "lucas",
      age: 32,
    },
    {
      id: 2,
      name: "Fabio",
      age: 53,
    },
    {
      id: 3,
      name: "Roger",
      age: 12,
    },
  ]);
});

//iniciando o servidor
app.listen(PORT, () => {
  console.log("Observando na porta:" + PORT);
});
