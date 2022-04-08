let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res) => {
    // 英文
    // res.write("hello world")

    // 汉字
    // res.writeHead(200, "ok", { "content-type": "text/plain;charset=utf8" });
    // res.write("我是张")

    // 图片
    // fs.readFile("../../img/1.jpg",(err,data)=>{
    //     if(err) res.write("图片加载错误")
    //     res.writeHead(200,"ok",{
    //         "content-type":"image/jpg"
    //     })
    //     res.write(data);

    //     res.end();
    // })

    // 音频
    // fs.readFile("../../img/buku.mp3",(err,data)=>{
    //     if(err) res.write("err")

    //     res.write(data);
    //     res.end();
    // })
    // fs.readFile("./1.html", (err, data) => {
    //     if (err) res.write("err")
    if (req.url == "/") {
        fs.readFile("./1.html", (err, data) => {
            if (err) res.write("err")
            res.write(data);
            res.end();
        })
    } else if (req.url == "/1.jpg") {
        fs.readFile("./1.jpg", (err, data) => {
            if (err) res.write("err")
            res.writeHead(200, "ok", {
                "content-type": "image/jpg"
            })
            res.write(data);
            res.end();
        })
    }

    // })

    // res.end();
}).listen(3000, () => {
    console.log("3000");
})
