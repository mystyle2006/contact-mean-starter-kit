var express = require('express');
var router = express.Router();
var contact = require('./contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/contact',contact); // /contact go to contact

module.exports = router;