let http = require("http");

let server = http.createServer();

server.on("connection",()=>{
    console.log("连接来了");
})

server.on("request",(req,res)=>{
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.httpVersion);
    res.write("hello world")
    res.end();
})

server.on("listening",()=>{
    console.log("server run at port 3000");
})

server.listen(3000);