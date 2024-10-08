exports.up = function(knex) {
    return knex.schema.createTable('notes', (table) => {
      table.increments('id'); // Auto-incrementing primary key
      table.string('title').notNullable();
      table.text('content');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('notes');
  };