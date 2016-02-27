var ProfileSchema = function (t) {
  t.increments('id')
  t.string('cp')
  t.integer('user_id').unsigned().references('id').inTable('Users')
}

exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('Profiles', ProfileSchema)
    .then(function () {
      console.log('Profiles table is created')
    })
}

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('Profiles')
    .then(function () {
      console.log('Profiles table was dropped')
    })
}
