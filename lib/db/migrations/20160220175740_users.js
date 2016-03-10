var UserSchema = function (t) {
  t.increments('UserId')
  t.string('UserName').notNullable()
  t.string('Email').notNullable()
  t.string('Password').notNullable()
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
