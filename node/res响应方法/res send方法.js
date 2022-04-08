const express = require("express");
const fs = require("fs");
const app = express();


app.get("/",(req,res)=>{
    // let buf = fs.readFileSync("./public/image/1.png");
    // res.type("png");

    let buf = fs.readFileSync("./public/muisc/1.mp3");
    res.type("mp3");
    res.send(buf);
})


app.listen(3000,()=>{
    console.log("server 3000");
})