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
	knex('gamer')
	.select()
	.where('id', req.params.id)
	.first()
	.then(gamer =>{
		res.render('gamers/single', {gamer:gamer})
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


module.exports = router;
