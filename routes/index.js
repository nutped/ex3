var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GOT7' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'GOT7' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'GOT7' });
});

module.exports = router;
