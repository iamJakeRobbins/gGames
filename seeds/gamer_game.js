exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gamer_game').del()
    .then(function () {
      // Inserts seed entries
      return knex('gamer_game').insert([
        {
					gamer_id: 2,
					game_id: 1
			},
			{
				gamer_id: 2,
				game_id: 2
			},
			{
				gamer_id: 3,
				game_id: 3
			}
      ]);
    });
};
