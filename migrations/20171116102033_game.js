exports.up = function(knex, Promise) {
	 return Promise.all([
	knex.schema.createTable('game', (table) => {
		table.increments().primary;
		table.text('title');
		table.text('system');
	})
])
};

exports.down = function(knex, Promise) {
	return Promise.all([
	knex.schema.dropTable('game')
])
};
