var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { names:["张三","李四","王五"] });
});

module.exports = router;
