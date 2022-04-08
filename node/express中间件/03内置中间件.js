let express = require("express");
let fs = require("fs");
let path = require("path");
let app = express();

// app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/", (req, res) => {
    let buf = fs.readFileSync("./views/index.html");
    res.write(buf);
    res.end();
})

app.route("/login").get((req, res) => {
    let buf = fs.readFileSync("./views/login.html");
    res.write(buf);
    res.end();
}).post((req, res) => {
    console.log(req.body.username);
    let buf = fs.readFileSync("./views/login.html");
    res.write(buf);
    res.end();
})


app.listen(3000, () => {
    console.log("Server 3000");
})