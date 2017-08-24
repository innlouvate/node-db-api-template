module.exports = {
development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      user: 'postgres',
      // password: 'postgres',
      host: 'db',
      port: '5432'
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  }
};
