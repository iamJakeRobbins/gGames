exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('gamer').del()
    .then(function () {
      // Inserts seed entries
      return knex('gamer').insert([
        {
					name: 'Brooks',
			},
			{
				name: 'Michelle',
			},
			{
				name: 'Peter',
			}
      ]);
    });
};
