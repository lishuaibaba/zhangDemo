const express = require("express");
const app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.post("/v2/login", (req, res) => {

    let user = "zhang";
    let pass = "123456";
    let code = null;
    let msg = null;
    let { username, password } = req.body;
    if (username == user && password == pass) {
        code = true;
        msg = "登录成功";

    } else {
        code = false;
        msg = "账号或密码错误";
    }

    res.send({
        result: {
            data: code,
            msg:msg
        }
    })
})

app.listen(3000, () => {
    console.log("3000");
})