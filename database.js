var knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password:'Amanda220700',
    database:'knex'
  }
});
module.exports = knex;