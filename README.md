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

  

  #### 💾 Configuração do banco de dados: 

  ```
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

  

# 📝 Resumo de  Comandos  SQL

##### ➕ INSERT

Começamos primeiramente com a definição do nosso banco de dados, para acompanhar o processo a query está disponível aqui []() . Em seguida criamos nosso primeiro dado para ser adicionado na tabela. Abaixo está o código usado através do javascript.

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

Também podemos fornecer um array de elementos para serem inseridos na tabela como n exemplo abaixo:

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

Em desenvolvimento....
