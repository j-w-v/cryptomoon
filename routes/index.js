var express = require('express');
var router = express.Router();

//require controllers
var cryptoCalls = require('../controllers/crypto');

/* GET home page - list of 20 cryptos */
router.get('/', cryptoCalls.crypto_all);

router.post('/', cryptoCalls.all_refresh);
router.get('/about', cryptoCalls.about);
router.get('/cryptos/:name/:id', cryptoCalls.crypto_detail);



module.exports = router;
