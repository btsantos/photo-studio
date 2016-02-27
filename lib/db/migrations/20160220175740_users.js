var UserSchema = function (t) {
  t.increments('id')
  t.string('username').notNullable()
  t.string('email').notNullable()
  t.string('password').notNullable()
}

exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('Users', UserSchema)
    .then(function () {
      console.log('Users table is created')
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('Users')
    .then(function () {
      console.log('Users table was dropped')
    })
}
