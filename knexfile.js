// Update with your config settings.

// module.exports = {
//   test: {
//     client: 'pg',
//     connection: 'postgres://localhost:8080/postgres',
//     migrations: {
//       directory: __dirname + '/db/migrations'
//     },
//     seeds: {
//       directory: __dirname + '/db/seeds/test'
//     }
//   },
//   development: {
//     client: 'pg',
//     connection: 'postgres://localhost/mocha_chai_tv_shows',
//     migrations: {
//       directory: __dirname + '/db/migrations'
//     },
//     seeds: {
//       directory: __dirname + '/db/seeds/development'
//     }
//   },
//   production: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     migrations: {
//       directory: __dirname + '/db/migrations'
//     },
//     seeds: {
//       directory: __dirname + '/db/seeds/production'
//     }
//   }
// };


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
