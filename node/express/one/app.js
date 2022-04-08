const express = require("express");
let fs = require("fs");
let qs = require("querystring");
const app = express();

let isLogin = false;


app.get("/", (req, res) => {
    if (isLogin) {
        let buf = fs.readFileSync("./views/index.html");
        res.write(buf);
        res.end();
    } else {
        res.redirect("/login")
    }
})

app.get("/login", (req, res) => {

    let buf = fs.readFileSync("./views/login.html");
    res.write(buf);
    res.end();
})

app.post("/login", (req, res) => {
    let bufs = [];

    req.on("data", (buf) => {
        bufs.push(buf);
    })
    req.on("end", () => {
        let buf = Buffer.concat(bufs);
        let parmat = qs.parse(buf.toString());

        var { username, password } = parmat;
        if (username == "zhang" & password == "123") {
            res.redirect("/");
            isLogin = true;
        } else {
            res.redirect("/login");
        }
    })

})

app.listen(3000, () => {
    console.log("3000");
})