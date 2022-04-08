let http = require("http");
let url = require("url");
let qs = require("querystring");

let server = http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return;
    }

    if (req.method == "GET") {
        var urlS = url.parse(req.url);
        var {query} = urlS;

        var z = qs.parse(query);
        console.log(z);
    }

    if (req.method == "POST") {
        var bufs = [];
        req.on("data", (buf) => {
            bufs.push(buf)
        })

        req.on("end", () => {
            let a = Buffer.concat(bufs);
            var b = a.toString();
            console.log(b);
        })
    }

    res.write("over")
    res.end();
})


server.listen(3000);