var ProfileSchema = function (t) {
  t.increments('ProfileId')
  t.string('PostalCode')
  t.string('City')
  t.integer('UserId').unsigned().notNullable().references('UserId').inTable('Users').onDelete()
}

exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('Profiles', ProfileSchema)
    .then(function () {
      console.log('Profiles table is created')
    })
}

exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('Profiles')
    .then(function () {
      console.log('Profiles table was dropped')
    })
}