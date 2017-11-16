
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('game').del()
    .then(function () {
      // Inserts seed entries
      return knex('game').insert([
        {
					title: 'Donkey Kong Country',
					system: 'SNES'
			},
			{
				title: 'Super Mario World',
				system: 'Nintendo 64'
			},
			{
				title: 'Earthworm Jim',
				system: 'SNES'
			}
      ]);
    });
};
