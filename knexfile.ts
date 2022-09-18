import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: '',
      database: 'nest-repository-pattern',
    },
    migrations: {
      directory: './src/database/migrations',
    },
  },
};

module.exports = config;
