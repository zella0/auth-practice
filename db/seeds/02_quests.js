
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quests').del()
    .then(function () {
      // Inserts seed entries
      return knex('quests').insert([
        {name: "Quest 1", lowest_xp: 10, highest_xp: 20},
        {name: "Fetch Quest", lowest_xp: -5, highest_xp: 5},
        {name: "Dungeon Run", lowest_xp: -100, highest_xp: 100}
      ]);
    });
};
