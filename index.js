var database = require("./database");

//Definição dos dados para INSERT
var dados = [
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

//Promisse
database.insert(dados).into("games").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});