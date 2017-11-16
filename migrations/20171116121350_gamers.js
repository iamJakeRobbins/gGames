exports.up = function(knex, Promise){
    return Promise.all([
	knex.schema.createTable("gamer", (table) => {
        table.increments().primary;
				table.string('name');
	})
		])
  .then(function(){
        return knex.schema.createTable("gamer_game", (table) => {
            table.increments().primary;
            table.integer("game_id")
            table.integer("gamer_id")
        });
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("gamer_game").then(function(){
        return knex.schema.dropTable("gamer");
    });
};
