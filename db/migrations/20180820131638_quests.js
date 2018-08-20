
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quests', (table)=>{
    table.increments();
    table.string("name");
    table.integer("lowest_xp");
    table.integer("highest_xp");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {

};
