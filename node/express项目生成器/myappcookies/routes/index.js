var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(req.cookies);//读取cookie  中间件封装过的
  console.log(req.signedCookies,'123');//加密的用 signedCookies 解密
  if (req.signedCookies.token == "zhang") {
    res.render('index');
  }else{
    res.redirect('login');
  }

});

module.exports = router;
