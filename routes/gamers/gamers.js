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
