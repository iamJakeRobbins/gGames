var express = require('express');
var router = express.Router();
const knex = require('../db/knex');


/* GET home page. */
router.get('/', (req, res) => {
	knex('game')
	.select()
	.then(games =>{
  res.render('games', {games:games});
	})
});

module.exports = router;
