# 🔮 Project   Advanced   SQL - KNEX.JS

Knex.Js é uma biblioteca do ecossistema do NodeJs. Além disso, trata-se de uma biblioteca para manipulação de banco de dados SQL.

## 🧱  O  que  é  Query  Builder ?

Para adentrar a esse tema primeiro precisamos destacar as abordagens das construções de queries dentro da programação.

- 1️⃣ Código SQL dentro do corpo das Linguagens de Programação:
  Essa abordagem **não é recomendada** pois em determinado momento o código ficará ilegível para outros desenvolvedores. Essa abordagem é conhecida como *queries cruas*(Raw).
  Código de exemplo:

  ```sql
  ... //
  "SELECT * FROM post"
  ...\\
  ```

- 2️⃣ Via ORM:
  Essa abordagem trabalha com uma *"Model"* , que é **responsável por mapear e abstrair** para métodos do paradigma de Orientação a Objetos. A desvantagem de utilizar a abordagem ORM é que **ela inviabiliza a utilização de queries mais avançadas,** causando uma rigidez no código.
  Código de exemplo:

  ```js
  Models-> Articles.create({title: "post"});
  ```

- 3️⃣ Query Builders:
  Essa abordagem abstrai as duas citadas anteriormente. Em resumo o query builder constrói uma query sem precisarmos digitar qualquer linha de código SQL. O objetivo dessa abordagem é **gerar queries de forma simplificada e objetiva**, o que garante uma maior flexibilidade para o desenvolvedor.
  Código de exemplo:

  ```sql
  banco.select().table("post")where(id: 7);
  ```

# 🔧 Configurando o projeto

### **Tecnologias usadas:**

- Iniciando projeto:

  ```powershell
  npm init
  ```

- KNEX.JS:

  ```powershell
  npm install knex --save
  ```

- MYSQL2:

  ```powershell
  npm install mysql2 --save
  ```

#### 💾 Configuração do banco de dados

  ```js
  var knex = require('knex')({
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password:'',
      database:'knex'
    }
  });
  module.exports = knex;
  ```

# 📝 Resumo de  Comandos e Boas Práticas  SQL

##### ➕ INSERT

Começamos primeiramente com a definição do nosso banco de dados. Em seguida criamos nosso primeiro dado para ser adicionado na tabela. Abaixo está o código usado através do javascript.

```js
//Definição dos dados para INSERT
var dados = {
  nome: "God Of War",
  preco: 60.50,
  marca: "Sony"
}

```

Logo em seguida usamos a sintaxe para a construção do método *insert* para adicionar o elemento na tabela. Vale frisar que o código trabalha com o conceito de *"promisse"*, que será explicado em outro projeto.
Código que foi implementado:

```js
//Promisse
database.insert(dados).into("games").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});
```

Também podemos fornecer um array de elementos para serem inseridos na tabela como no exemplo abaixo:

```js
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

```

Como resultado iremos obter esse exemplo de tabela:

| id   | nome         | preco  | marca      |
| :--- | ------------ | ------ | ---------- |
| 1    | Minecraft    | 160.90 | Mojang     |
| 2    | GTA          | 120.30 | Rockstar   |
| 3    | Call of Duty | 234.90 | Activision |

##### ✅ SELECT

Este comando é usado para selecionar,categorizar e manipular dados de diferentes formas. Abaixo temos um exemplo de seleção da tabela games.

```js
database.select().table("games").then(data => {
  console.log(data);
}).catch(erro => {
  console.log(error);
})
```

Para seleções de atributos podemos passar um array junto com os atributos que queremos. Abaixo está o mesmo código, porém com os atributos "id" e "preco" como retorno.

```js
database.select(["id", "preco"]).table("games");
```

##### 🔃 NESTED QUERIES

Este recurso é usado quando queremos fazer mais de uma consulta em uma única query. São chamadas de "Queries Aninhadas" pois realiza uma consulta após a outra. Abaixo temos um código de exemplo onde se insere um dado e logo em seguida faz a listagem dos atributos.

```js
// Primeira consultas
database.insert({
  nome: "The Sims",
  preco: 123.60,
  marca: "EA Games"
}).into("games").then(data => {

  //Segunda Consulta
  database.select(["id", "preco"]).
  table("games").
  then(data => {
  console.log(data);
  console.log(error);
  });
  console.log(data);
  //Fim da segunda Consulta

}).catch(error => {
  console.log(error);
})
```

##### 🔍 WHERE

Este comando é usado para cláusulas condicionais. Abaixo temos um exemplo do código que foi implementado:

```js
var query = database.
where({ nome: "The Sims" })
.table("games");
console.log(query.toQuery());
```

Porém, para estruturas mais complexas utilizamos o recurso *"whereRaw"* , que, de forma resumida, tem se a necessidade de escrever o que se quer consultar.
Código de exemplo:

```js
var query = database.select(["id", "preco"]).
  where({ nome: "Call of Duty" }).
  whereRaw("preco > 50").
  table("games");
console.log(query.toQuery());
```

> Obs: É recomendável usar apenas um where para consultas condicionais.

##### 💥 DELETE

O comando delete funciona da mesma forma que o select, basta apenas repassar o parâmetro do que será deletado e a sua respectiva tabela.

```js
database.where({ id: 3 }).delete().table("games").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});
```

##### 🔄 UPDATE

 Assim como os outros comandos o update segue o mesmo padrão, além disso é de extrema importância respeitar o tipo dos campos a serem atualizados.

 ```js
 database.where({ id: 1 }).update({ preco: 40 }).table("games").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});
 ```

##### 🔡 ORDER BY

 Este comando é usado para ordenação dos dados seja em ordem alfabética, crescente e descrescente.

 ```js
 database.
 select().
 table("games").
 orderBy("preco", "desc"); //desc

database.
select().
table("games").
orderBy("preco", "asc"); //asc
 ```

# 💞 Relacionamentos

Os relacionamentos entre tabelas são formas de criar dependências entre elas, bem como associações.
Ao todo existe três tipos de relações que serão descritas abaixo:

| Relacionamentos | Dependências                                                 |
| --------------- | ------------------------------------------------------------ |
| 1 P 1           | Um estúdio tem um game  - Um game tem um estúdio             |
| 1 P M           | Um estúdio pode ter vários games                             |
| M P M           | Um estúdio pode ter vários games - Um game pode ter vários estúdios |

#### 🗝 Chaves

Existe dois tipos de chaves que norteiam os bancos SQL: as chaves primárias (*primary keys*) e chaves estrangeiras (*foreign keys*).

*Chave Primária* tem o objetivo de formar uma identificação do registro e precisa ser única.

*Chave Estrangeira* tem o papel de fazer uma relação entre tabelas. Além disso uma chave estrangeira sempre será a cópia de uma chave primária.

##### 🔛 Joins (Resumo)

Os joins servem para ecoomizar  recursos do servido fazendo queries. Um join é uma maneira de unirmos duas tabelas numa só consulta.

*Inserções Associadas(Associated Inserts)* servem para inserir registros que tem um relacionamento com outro registro. Abaixo está  o código que foi implementado como exemplo:

```js
database.insert({
  nome: "Blizzard",
  game_id: 3
}).table("estudios").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});
```

##### ↔ Inner Join

O inner join é um recurso que irá unir duas tabelas ignorando os registros nulos.

```js
database.
select().
table("games").
innerJoin("estudios", "estudios.game_id", "games.id");
```

# 🎉🎉 Agradecimento

Com isso terminamos mais um resumo para fins de estudos.
Deixe uma star ou compartilhe o conteúdo com quem precisa!
Isso é apenas uma introdução para outros resumos mais complexos que estarão em cada repositório.
