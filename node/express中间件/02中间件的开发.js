let express = require("express");
let fs = require("fs")

let postParmit = require("./unit/postParmit");
let getParmit = require("./unit/getParmit");

let app = express();

app.use(postParmit());
app.use(getParmit());


app.route("/login").get((req, res) => {
    let buf = fs.readFileSync("./views/login.html")
    res.write(buf)
    res.end()
}).post((req, res) => {
    console.log(req.obj);
    let buf = fs.readFileSync("./views/login.html")
    res.write(buf);
    res.end();
})


app.listen(3000, () => {
    console.log("sever 3000");
})