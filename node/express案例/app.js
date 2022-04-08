let express = require("express");
let fs = require("fs");
let path = require("path");
let app = express();

let isLogin = false;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get("/", (req, res) => {
    if (isLogin) {
        let buf = fs.readFileSync("./views/index.html");
        res.write(buf);
        res.end();
    } else {
        res.redirect("/login");
    }
})

app.get("/register", (req, res) => {
    let buf = fs.readFileSync("./views/register.html");
    res.write(buf);
    res.end();
})

app.get("/details", (req, res) => {
    let buf = fs.readFileSync("./views/details.html");
    res.write(buf);
    res.end();
})

app.get("/list", (req, res) => {
    let buf = fs.readFileSync("./views/list.html");
    res.write(buf);
    res.end();
})

app.get("/ShoppingCart", (req, res) => {
    let buf = fs.readFileSync("./views/ShoppingCart.html");
    res.write(buf);
    res.end();
})

app.route("/login").get((req, res) => {
    let buf = fs.readFileSync("./views/Signin.html");
    res.write(buf);
    res.end();
}).post((req, res) => {
    if (req.body.username == "zhang" & req.body.password == "123") {
        isLogin = true;
        res.redirect("/");
    } else {
        let buf = fs.readFileSync("./views/Signin.html");
        res.write(buf);
        res.end();
        console.log("账号或者密码错误");
    }
})


app.listen(3000, () => {
    console.log("Server 3000");
})