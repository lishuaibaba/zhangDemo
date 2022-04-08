let http = require("http");
let fs = require("fs");

var qs = require('querystring');


http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return;
    }
    if (req.url == "/login") {
        fs.readFile("./views/login.html", (err, data) => {
            res.write(data)
            res.end();
        })
    } else if (req.url == "/") {
        if (req.method == "GET") {
            fs.readFile("./views/index.html", (err, data) => {
                res.write(data)
                res.end();
            })
        } else if (req.method == "POST") {
            let bufs = [];
            req.on("data", (buf) => {
                bufs.push(buf);
            })
            req.on("end", (buf) => {
                let bufss = Buffer.concat(bufs);
                var a = bufss.toString();
                var { user, pass } = qs.parse(a);
                if (user == "zhang" & pass == "123") {
                    fs.readFile("./views/index.html", (err, data) => {
                        res.write(data)
                        res.end();
                    })
                } else {
                    console.log("错误");
                    var arr = [1, 2, 3];
                    console.log(arr.includes(1));

                }
            })
        }
    } else {
        fs.readFile("./views/err.html", (err, data) => {
            res.write(data)
            res.end();
        })
    }
}).listen(3000)