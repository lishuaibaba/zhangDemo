var express = require('express');
var router = express.Router();


router.route('/').get(function (req, res, next) {
  res.render('login');
}).post((req, res) => {
  let { username, password } = req.body;
  if (username == "zhang" && password == "123") {
    /*
    maxAge?: number | undefined; 设置时间   maxAge: 1000 * 60  走美国时间  差八个小时左右
    signed?: boolean | undefined; 加密cookie 还得在app.js  设置加密密钥   app.use(cookieParser("随便填写英文"))  然后用 req.signedCookies解密cookie
    expires?: Date | undefined;  设置时间   new Date(Date.now() + 1000 * 60) 走美国时间  差八个小时左右
    httpOnly?: boolean | undefined;  true false   true的时候只能在服务端操作这个cookie  客户端不能，防止cookie被篡改
    path?: string | undefined; 设置当前cookie在哪能访问  /login  只能在/login访问，其他地方访问不了
    domain?: string | undefined; 设置域名， 如果设置的是一级域名 则该cookie在所有的一级域名的二级域名下均可访问，如果设置二级域名，则只能在二级域名下访问
    secure?: boolean | undefined;  true  false   true只能在https协议下访问  http不能访问
    encode?: ((val: string) => string) | undefined;
    sameSite?: boolean | 'lax' | 'strict' | 'none' | undefined;
    */
    var options = {
      // expires: new Date(Date.now() + 1000 * 60) 设置时间 走美国时间  差八个小时左右
      maxAge: 1000 * 60, //设置时间 走美国时间  差八个小时左右`
      path:"/",
      signed:true
    }
    res.cookie("token", username, options);//存储cookie
    res.redirect("/");
  } else {
    res.redirect("/login")
  }
});

module.exports = router;
