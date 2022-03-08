# 🔮 Project   Advanced   SQL - KNEX.JS

Knex.Js é uma biblioteca do ecossistema do NodeJs. Além disso, trata-se de uma biblioteca para manipulação de banco de dados SQL. 

## 🧱  O  que  é  Query  Builder ?

Para adentrar a esse tema primeiro precisamos destacar as abordagens das construções de queries dentro da programação.

- 1️⃣ Código SQL dentro do corpo das Linguagens de Programação:
  Essa abordagem **não é recomenda** pois em determinado momento o código poderá ficar ilegível para outros desenvolvedores. São conhecidas como *queries cruas*(Raw).
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

  
