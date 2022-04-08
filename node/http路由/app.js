let http = require("http");
let fs = require("fs");

http.createServer((req, res) => {
    var buf = ``;
    switch (req.url) {
        case "/":
            buf = fs.readFileSync("./views/index.html")
            break;
        case "/home":
            buf = fs.readFileSync("./views/home.html")
            break;
        case "/login":
            buf = fs.readFileSync("./views/login.html")
            break;
    }

    res.write(buf);
    res.end();


}).listen(3000);