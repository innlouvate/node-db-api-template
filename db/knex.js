var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];

module.exports = require('knex')({
  client: 'pg',
  connection: {
    host     : 'db',
    user     : 'postgres',
    database : 'postgres',
    charset  : 'utf8'
  }
});
