let express = require("express");
let fs = require("fs");
let app = express();

app.get("/",(req,res)=>{
    res.redirect("/login?zhang=123&z=123123")
})

app.get("/login",(req,res)=>{
    console.log(req.query);
    let buf = fs.readFileSync("./views/login.html");
    res.write(buf);
    res.end();
})

app.post("/login",(req,res)=>{
    let buf = fs.readFileSync("./views/login.html");
    res.write(buf);
    res.end();
})

app.listen(3000,()=>{
    console.log("sever 3000");
})