var express = require('express');
var router = express.Router();
const knex = require('../../db/knex');


/* GET home page. */
router.get('/', (req, res) => {
	knex('gamer')
	.select()
	.then(gamers =>{
  res.render('gamers/gamers', {gamers:gamers});
	})
});

router.get('/:id', (req, res) =>{
	knex('game')
	.select()
	.then(games =>{
	knex('gamer')
	.select('*', 'gamer_game.id as row_id')
	.where('gamer.id', req.params.id)
	.innerJoin('gamer_game', 'gamer.id', 'gamer_id')
	.innerJoin('game', 'game_id', 'game.id')
	.then(gamesData =>{
		knex('gamer').where('id', req.params.id)
		.then(gamerData =>{
			let data = {
				gamer: gamerData[0],
				gamesData: gamesData,
				games: games,
			}
			console.log(data)
			res.render('gamers/single',data)
			})
		})
	})
});


router.post('/', (req, res) =>{
	knex('gamer')
	.insert({
		name:req.body.name,
	})
	.then( () =>{
		res.redirect('gamers')
	})
})

router.post('/:id', (req, res) =>{
	req.body.gamer_id = req.params.id
	knex('gamer_game')
	.insert({
		gamer_id: req.body.gamer_id,
		game_id: req.body.game_id
	}).then( () =>{
		res.redirect(`/gamers/${req.body.gamer_id}`)
	})
})

router.delete('/:id', (req, res) =>{
	knex('gamer_game')
	.select()
	.where('id', req.body.id)
	.del()
	.then(() =>{
		res.redirect(`/gamers/${req.params.id}`)
	})
})


module.exports = router;
