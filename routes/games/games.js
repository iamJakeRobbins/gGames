var express = require('express');
var router = express.Router();
const knex = require('../../db/knex');


/* GET home page. */
router.get('/', (req, res) => {
	knex('game')
	.select()
	.then(games =>{
  res.render('games/games', {games:games});
	})
});

router.get('/:id', (req, res) =>{
	knex('game')
	.select()
	.where('id', req.params.id)
	.first()
	.then(game =>{
		res.render('games/single', {game:game})
	})
});

router.post('/', (req, res) =>{
	knex('game')
	.insert({
		title:req.body.title,
		system:req.body.system,
	})
	.then( () =>{
		res.redirect('games')
	})
})

router.put('/:id', (req, res) =>{
	knex('game')
	.where('id', req.params.id)
	.update({
		title: req.body.title,
		system: req.body.system
	}, 'id')
	.then( (ids) =>{
		let id = ids[0]
		console.log(ids[0]);
		res.redirect('/games')
	})
})

module.exports = router;
