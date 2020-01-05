
exports.up = function(knex) {
  return knex.schema.createTable('admins', admins => {
admins
.increments();
admins
.string('username', 128)
.notNullable()
.unique();
admins
.string('password', 128)
.notNullable();
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('admins');
  
};
