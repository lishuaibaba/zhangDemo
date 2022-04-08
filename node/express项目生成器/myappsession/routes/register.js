var express = require('express');
var router = express.Router();
var svgCaptcha = require("svg-captcha");

var cz = "";
router.get('/code', function (req, res) {
  var captcha = svgCaptcha.create();
  req.session.codeid = captcha.text;
  res.type('svg');
  res.status(200).send(captcha.data);
});


router.get('/', function (req, res, next) {
  res.render("register");
});

router.post("/", (req, res) => {
  let { user, pass, code } = req.body;
  console.log(user,pass,code,req.session.codeid);
  if (user == "zhang" && pass == "123" && code == req.session.codeid) {
    res.redirect("/");
  } else {
    res.render("register");

  }
})

module.exports = router;
