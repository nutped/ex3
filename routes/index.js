var express = require('express');
var router = express.Router();
var connect = require("../config/database");


/* GET home page. */
router.get('/', function(req, res, next) {
  var query = "SELECT * FROM positions";
  connect.query(query,function(error,result){
    res.json(result)
  })
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'GOT7' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'GOT7' });
});

module.exports = router;
