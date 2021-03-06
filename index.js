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
/*database.insert({
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
})*/

//WHERE
/*var query = database.select(["id", "preco"]).
  whereRaw("preco > 50").
  table("games");
console.log(query.toQuery());*/

//DELETE
/*database.where({ id: 3 }).delete().table("games").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});*/

//UPDATE
/*database.where({ id: 1 }).update({ preco: 40 }).table("games").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});*/

//Order By
//database.select().table("games").orderBy("preco", "desc"); //desc
//database.select().table("games").orderBy("preco", "asc"); //asc

//Inserts Associados
/*database.insert({
  nome: "Blizzard",
  game_id: 3
}).table("estudios").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});*/

//Joins
/*database.
select([""]).
table("games").
innerJoin("estudios", "estudios.game_id", "games.id");*/