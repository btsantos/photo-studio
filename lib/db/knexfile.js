module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'travis',
    database: 'photostudio',
    charset: 'utf8'
  },
  migrations: {
    tableName: 'Migrations'
  }
}
