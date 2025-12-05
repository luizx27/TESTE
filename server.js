// ----------------------------
// IMPORTS
// ----------------------------
const express = require("express");
const cors = require("cors");

// ----------------------------
// CONFIGURAÇÃO DO SERVIDOR
// ----------------------------
const app = express();
app.use(cors());

// ----------------------------
// ROTAS DO BACKEND
// ----------------------------

// Rota principal só pra não dar erro no GET /
app.get("/", (req, res) => {
  res.send("Backend do Clash Royale funcionando!");
});

// Todas as cartas (AQUI DEPOIS colocamos as 100 cartas reais)
app.get("/cards", (req, res) => {
  const cards = [
    { name: "Cavaleiro", elixir: 3, rarity: "Comum" },
    { name: "Arqueiras", elixir: 3, rarity: "Comum" },
    { name: "Gigante", elixir: 5, rarity: "Rara" },
    { name: "Bebê Dragão", elixir: 4, rarity: "Épica" }
  ];
  res.json(cards);
});

// ----------------------------
// LIGAR O SERVIDOR
// ----------------------------
const PORT = 4000;
app.listen(PORT, () => console.log("Servidor rodando em http://localhost:" + PORT));
