//npm install express
//node app.js
// http://localhost:3000
// Importando o módulo Express
const express = require('express');
const app = express();
const port = 3000;

// Rota principal que responde com "Olá, Mundo!"
app.get('/', (req, res) => {
  res.send('<h1>bom dia senhores</h1>');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
