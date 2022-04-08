let express = require("express");
let fs = require("fs");
let app = express();
let qs = require("querystring");

app.use("/",(req,res,next)=>{
    let bufs = [];
    req.on("data",bus=>{
        bufs.push(bus);
    })
    req.on("end",()=>{
        let a = Buffer.concat(bufs);
        req.zzz = a.toString();
        next();
    })
})

app.get("/",(req,res)=>{
    let buf = fs.readFileSync("./views/index.html")
    res.write(buf);
    res.end();
})


app.get("/login",(req,res)=>{
    let buf = fs.readFileSync("./views/login.html")
    res.write(buf);
    res.end();
})

app.post("/login",(req,res)=>{
    let buf = fs.readFileSync("./views/login.html")
    console.log(req.zzz);
    res.write(buf);
    res.end();
})

app.listen(3000,()=>{
    console.log("server 3000");
})