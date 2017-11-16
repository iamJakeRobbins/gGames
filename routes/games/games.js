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

router.post('/', (req, res) =>{
	knex('game')
	.insert({
		title:req.body.title,
		system:req.body.system,
	})
	.then( (stuff) =>{
		console.log('hello')
		res.redirect('games')
	})
})

module.exports = router;
