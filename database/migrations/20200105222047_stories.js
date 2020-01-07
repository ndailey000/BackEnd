
exports.up = function(knex) {
  return knex.schema.createTable('stories', stories => {
      stories
      .increments();
      stories
      .string('name', 128)
      .unique()
      .notNullable();
      stories
      .text('story', 500)
      stories
      .text('quote', 255)
  })
};

exports.down = function(knex) {
  
};
