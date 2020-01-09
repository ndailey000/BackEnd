
exports.up = function(knex) {
  return knex.schema
  .createTable('stories', stories => {
      stories
      .increments();
      
      stories
      .string('name', 128)
      .unique()
      .notNullable();
      
      stories
      .text('story', 500)
      .notNullable();
      
      stories
      .text('quote', 255)
      .notNullable();
      
      stories
      .integer("admin_id")
      .notNullable()
      .references("id")
      .inTable("admins")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    admins.timestamps(true, true);
  })
 
};

exports.down = function(knex) {
  
};
