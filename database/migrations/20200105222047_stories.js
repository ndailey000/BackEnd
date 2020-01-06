
exports.up = function(knex) {
  return knex.schema.createTable('stories', stories => {
      stories
      .increments();
      stories
      .string('Name', 128 varchar)
  })
};

exports.down = function(knex) {
  
};
