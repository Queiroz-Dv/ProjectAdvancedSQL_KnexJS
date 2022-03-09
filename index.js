var database = require("./database");

//Definição dos dados para INSERT
/*var dados = [
  {
  nome: "Minecraft",
  preco: 160.90,
  marca: "Mojang"
  },
  {
    nome: "GTA",
    preco: 120.30,
    marca: "RockStar"
  },
  {
    nome: "Call Of Duty",
    preco: 234.90,
    marca: "Activison"
  },
]
database.insert(dados).into("games").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});*/

//Select
/*database.select(["id", "preco"]).table("games").then(data => {
  console.log(data);
}).catch(erro => {
  console.log(error);
})*/

// Multíplas consultas
database.insert({
  nome: "The Sims",
  preco: 123.60,
  marca: "EA Games"
}).into("games").then(data => {
  database.select(["id", "preco"]).table("games").then(data => {
    console.log(data);
  }).catch(erro => {
    console.log(error);
  })
  console.log(data);
}).catch(error => {
  console.log(error);
})